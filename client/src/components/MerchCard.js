import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import CheckoutPage from "./CheckoutPage"

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
            <img className="hat" src={merch.image_url}/>
                <p>$ {merch.price}</p>
              <button onClick={() => history.push('/cart')}>Go to Cart</button>
          </div>
            <button onClick={() => addToCart(merch)} classname="add-to">Add to Cart</button>
      </div>
    );
  }
  
  export default MerchCard;