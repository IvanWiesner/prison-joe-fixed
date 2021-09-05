import '../App.css';
import { useEffect, useState } from "react";
import Login from "./Login"
import { 
  BrowserRouter as Router, 
  Route,
  Link,
  Switch
  } from "react-router-dom";

function App() {
  const [login, setLogin] = useState(false);

  function handleNewReviews(newReview) {
    setReviews([...reviews, newReview])
}

  return (
    <Router>
      <div className="App">
        <div className="navbar">
          <h1 className="navbar-title">Prison Joe</h1>
          <nav className="navbar-bar">
            <Link to="/">Home</Link>|
            <Link to="/workpage"> Work Info </Link> |
            <Link to="/merchpage"> Merch </Link>
          </nav>
        </div>

        <Switch>
          <Route path="/login"
          component={() => <Login login={true}
          setLogin={setLogin}
        /> }/>

        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
