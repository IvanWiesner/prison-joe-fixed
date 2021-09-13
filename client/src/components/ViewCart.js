import React from "react"
import { useHistory } from "react-router-dom"


function ViewCart({merch, cartItems}) {

    let history = useHistory();

  return (
    <div className="cart-items">
        <div className="cart-header">
            Cart Items
        </div>
        {cartItems.length === (0 && <div> No items in cart.</div>)}
        <div>
            {cartItems.map((item) =>(
                <div key={item.id} className="cart-list">
                    <img src={item.image} alt={item.name}/>
                </div>
            ))}
        </div>
      <header>
        <button onClick={() => history.push('/checkout')}>Go To Checkout</button>    
      </header>
    </div>
  );
}


  export default ViewCart;