import '../App.css';
import { useEffect, useState } from "react";
import Login from "./Login"
import WorkPage from "./WorkPage"
import MerchPage from "./MerchPage"
import ViewCart from "./ViewCart"
import CheckoutPage from "./CheckoutPage"
import HomePage from "./HomePage"
import NewMerch from "./NewMerch"
import { 
  BrowserRouter as Router, 
  Route,
  Link,
  Switch
  } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);
  // true = shows on navbar
  // const [superLogin, setSuperLogin] = useState(false)
  const [merches, setMerches] = useState([])
  const [cartItems, setCartItems] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/merches")
    .then((resp) => resp.json())
    .then((data) => setMerches(data))
    if (localStorage.cartItems) {
      setCartItems(JSON.parse(localStorage.cartItems))
    }
}, []);

const addToCart = (merch) => {
  const merchExist = cartItems.find((item) => item.id === merch.id)
  if(merchExist){
      setCartItems(cartItems.map((item) => item.id === merch.id ?
      {...merchExist, quantity: merchExist.quantity + 1}: item)
  )
  localStorage.setItem("cartItems", JSON.stringify(cartItems.map((item) => item.id === merch.id ?
  {...merchExist, quantity: merchExist.quantity + 1}: item)))
} else {
  setCartItems([...cartItems, {...merch, quantity: 1 }])
  localStorage.setItem("cartItems", JSON.stringify([...cartItems, {...merch, quantity: 1 }]))
}

}

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <h1 className="navbar-title">Prison Joe</h1>
          <div>
          <img className="logo" src="https://i.imgur.com/woGFDn2.png"/>
          </div>
          <a href="https://twitter.com/joe_prison">
            <img className="twitter" src="https://i.imgur.com/LGpM9wt.png"/>
          </a>
          <a href="https://www.snapchat.com/add/sethepoo?share_id=RTc1RkJF&locale=en_US">
            <img className="snap" src="https://i.imgur.com/V6YikB0.jpg"/>
          </a>
          <nav className="navbar-bar">
            <Link to="/">Home</Link> |
            <Link to="/work"> Work Info </Link> |
            <Link to="/merch"> Merch </Link> |
            {login && <Link to="/newmerch"> New Merch </Link>}
          </nav>

        </div>

        <Switch>
          <Route path="/login"
          component={() => <Login
          setLogin={setLogin}
          /> }/>
         <Route exact path="/"
          component ={() => <HomePage 
        />} />
        <Route path="/merch"
        component={() => <MerchPage 
        merches={merches}
        setMerches={setMerches}
        cartItems={cartItems}
        setCartItems={setCartItems}
        addToCart={addToCart}
        />} />
        <Route path="/cart"
        component={() => <ViewCart 
        merches={merches}
        cartItems={cartItems}
        addToCart={addToCart}
        />} />
        <Route path="/work"
        component={() => <WorkPage 
        />} />
        <Route path="/checkout"
        component={() => <CheckoutPage 
        merches={merches}
        />} />
        {login &&  <Route path="/newmerch"
        component={() => <NewMerch login={false}
        merches={merches}
        setMerches={setMerches}
        />} /> }
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
