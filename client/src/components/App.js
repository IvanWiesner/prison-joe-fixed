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
  const [login, setLogin] = useState(true);
  // true = shows on navbar
  // const [superLogin, setSuperLogin] = useState(false)
  const [reviews, SetReviews] = useState([])
  const [merches, setMerches] = useState([])

  function handleNewReviews(newReview) {
    SetReviews([...reviews, newReview])
}

useEffect(() => {
  fetch("http://localhost:3000/merches")
    .then((resp) => resp.json())
    .then((data) => setMerches(data))
}, []);

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <h1 className="navbar-title">Prison Joe</h1>
          <img className="logo" src="https://i.imgur.com/woGFDn2.png"/>
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
        handleNewReviews={handleNewReviews}
        />} />
        <Route path="/cart"
        component={() => <ViewCart 
        merches={merches}
        />} />
        <Route path="/work"
        component={() => <WorkPage 
        />} />
        <Route path="/checkout"
        component={() => <CheckoutPage 
        />} />
        <Route path="/nemerch"
        component={() => <NewMerch login={true}
        merches={merches}
        
        />} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
