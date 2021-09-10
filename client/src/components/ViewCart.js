import React from "react"
import { useHistory } from "react-router-dom"


function ViewCart() {

    let history = useHistory();

  return (
    <div className="App">
      <header>
        <button onClick={() => history.push('/checkout')}>Go To Checkout</button>    
      </header>
    </div>
  );
}


  export default ViewCart;