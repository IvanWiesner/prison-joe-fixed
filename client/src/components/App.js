import '../App.css';
import { useEffect, useState } from "react";
import Login from "./Login"
import WorkPage from "./WorkPage"
import MerchPage from "./MerchPage"
import ViewCart from "./ViewCart"
import CheckoutPage from "./CheckoutPage"
import HomePage from "./HomePage"
import NewMerch from "./NewMerch"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, Image, Col} from "react-bootstrap";
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
  fetch("/merches")
    .then((resp) => resp.json())
    .then((data) => setMerches(data))
    if (localStorage.cartItems) {
      setCartItems(JSON.parse(localStorage.cartItems))
    }
    fetch("/me")
    .then((resp) => resp.json())
    .then((data) => {
      if (!data.error) {
        setLogin(true)
      }
    })
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
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home" id="title">Prison Joe
    <div class="row">
      <div class="col-3">
      <Image src="https://i.imgur.com/woGFDn2.png" fluid />
    </div>
    </div>
    </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/work">Work Info</Nav.Link>
      <Nav.Link href="/merch">Merch</Nav.Link>
      <Nav.Link href="/login">Seth Go Here</Nav.Link>
      {login &&  <Nav.Link href="/newmerch">Add New Merch</Nav.Link>}
    </Nav>
    </Container>
    </Navbar>

          <div className="top-logos">
          <header className="top-header">
          <ul>
          
            <div class="container">

              <div class="row">
                <div class="col-4">
              <p className="navbar-title">Experience Prison</p>
               </div>
                <div class="col-1">
                <a href="https://www.snapchat.com/add/sethepoo?share_id=RTc1RkJF&locale=en_US" target="_blank">
                <Image fluid src="https://i.imgur.com/V6YikB0.jpg"/>
                </a>
                <br></br>
                </div>
                <div class="col-1">
                <a href="https://twitter.com/joe_prison" target="_blank">
                <Image fluid src="https://i.imgur.com/LGpM9wt.png"/>
                </a>
                <br></br>
                </div>
                <div class="col-2" id="twitch">
                <a href="https://www.twitch.tv/prisonjoe" target="_blank">
                  <Image fluid src="https://i.imgur.com/RcGaNSP.png"/>
                </a>
                </div>
              </div>

          </div>

          </ul>
          </header>
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
        login={login}
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
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
                <footer>
                  <p>
                  For Business Inquirys-prisonjoe55@gmail.com
                  </p>
                  <div className="ivans">
                  <p>Website Creator -</p>
                  <a href="www.linkedin.com/in/ivanwiesner" target="_blank">
                    <Col xs={2} md={1}>
                    <Image className="linkdin" src="data:image/png;base64,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"/>
                    </Col>
                  </a>
                  <a href="https://github.com/IvanWiesner" target="_blank">
                  <Col xs={2} md={1}>
                    <Image className="git" src="data:image/png;base64,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"/>
                  </Col>
                  </a>
                  </div>
                </footer>
              </div>
      </div>
    </Router>
    
  );
}

export default App;
