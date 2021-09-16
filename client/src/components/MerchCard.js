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
      <div className="MerchCard">
          <div>
          <p>{merch.name}</p>
            <Col xs={7} md={5}>
            <Image src={merch.image_url} fluid/>
            </Col>
                <p>$ {merch.price}</p>
              <button type="button" class="btn btn-outline-warning" onClick={() => history.push('/cart')}>Go to Cart</button>
          </div>
            <button type="button" class="btn btn-outline-warning"onClick={() => addToCart(merch)} classname="add-to">Add to Cart</button>
      </div>
    );
  }
  
  export default MerchCard;