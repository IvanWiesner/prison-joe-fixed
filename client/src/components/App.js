import '../App.css';
import { useEffect, useState } from "react";
import Login from "./Login"
import WorkPage from "./WorkPage"
import MerchPage from "./MerchPage"
import ViewCart from "./ViewCart"
import CheckoutPage from "./CheckoutPage"
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
  const [merch, setMerch] = useState([])

  function handleNewReviews(newReview) {
    SetReviews([...reviews, newReview])
}

useEffect(() => {
  fetch("http://localhost:3000/merches")
    .then((resp) => resp.json())
    .then((data) => setMerch(data))
}, []);

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <h1 className="navbar-title">Prison Joe</h1>
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
        <Route path="/merch"
        component={() => <MerchPage login={true}
        merch={merch}
        setMerch={setMerch}
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
