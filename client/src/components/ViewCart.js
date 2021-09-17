import React from "react"
import { useHistory } from "react-router-dom"
import {Navbar, Container, Nav, Image, Col} from "react-bootstrap";


function ViewCart({merch, cartItems}) {

    let history = useHistory();
    console.log(cartItems)

  return (
    <div className="cart-items">
        <div className="cart-header">
        </div>
        {cartItems.length === (0 && <div> No items in cart.</div>)}
        <div>
            {cartItems.map((item) =>(
                <div key={item.id} className="cart-list">
                    <p>{item.name}</p>
                    <Col xs={6} md={4}>
                    <Image fluid src={item.image_url} />
                    </Col>
                    <p>$ {item.price}</p>
                </div>
            ))}
            <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="Z8BAUHWBBBJCY"/>
            <input type="image" src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404__480.png" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" className="paypal-button"/>
            <img className="paypal" alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"/>
            </form>
        </div>
        
      <header>
        {/* <button onClick={() => history.push('/checkout')}>Shipping Address</button>     */}
      </header>
    </div>
  );
}


  export default ViewCart;