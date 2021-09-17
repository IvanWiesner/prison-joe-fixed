import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import CheckoutPage from "./CheckoutPage"
import {Image, Col} from "react-bootstrap";
function MerchCard({merch, handleNewReviews, addToCart, reviews,  setReviews}) {

    let history = useHistory();
    // const toggle=() => {
    //     setReviews(!reviews)
    // }
            // {/* {reviews.filter(review => <p>{review.comment}</p>)} */}
            // 
            // ))} */}
    
       
    return (
      <div className="merchcard">
          <div className="card">
          <p className="merch-name">{merch.name}</p>
            <Image src={merch.image_url} className="hat" fluid/>
                <p className="merch-price">$ {merch.price}</p>
              <button type="button" class="btn btn-outline-warning" onClick={() => history.push('/cart')}>Go to Cart</button>
              <button type="button" class="btn btn-outline-warning"onClick={() => addToCart(merch)} classname="add-to">Add to Cart</button>
          </div>
           
      </div>
    );
  }
  
  export default MerchCard;