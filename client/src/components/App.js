import '../App.css';
import { useEffect, useState } from "react";
import Login from "./Login"
import WorkPage from "./WorkPage"
import MerchPage from "./MerchPage"
import ViewCart from "./ViewCart"
import CheckoutPage from "./CheckoutPage"
import HomePage from "./HomePage"
import { 
  BrowserRouter as Router, 
  Route,
  Link,
  Switch
  } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);
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
            <Link to="/merch"> Merch </Link>
          </nav>
        </div>

        <Switch>
          <Route path="/login"
          component={() => <Login login={true}
          setLogin={setLogin}
        /> }/>
         <Route exact path="/"
          component ={() => <HomePage login={true}
        />} />
        <Route path="/merch"
        component={() => <MerchPage login={true}
        merches={merches}
        setMerches={setMerches}
        handleNewReviews={handleNewReviews}
        />} />
        <Route path="/cart"
        component={() => <ViewCart login={true}
        />} />
        <Route path="/work"
        component={() => <WorkPage login={true}
        />} />
        <Route path="/checkout"
        component={() => <CheckoutPage login={true}
        />} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
