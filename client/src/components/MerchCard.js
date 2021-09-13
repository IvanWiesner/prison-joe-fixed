import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import CheckoutPage from "./CheckoutPage"

function MerchCard({merch, handleNewReviews, addToCart, reviews,  setReviews}) {
    const [cart, setCart] = useState([])
    const [page, setPage] = useState('merch')
    const [showReviews, setShowReviews] = useState("")

    
    console.log(reviews)
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
              <button onClick={() => history.push('/cart')}>Go to Cart ({cart.length})</button>
              {
                  reviews? <p>{reviews.comment} !</p>:null
              }
              <button onClick={() => setReviews(true)}>See Reviews</button>
              <button onClick={() => setReviews(false)}>Hide Reviews</button>
          </div>
                
          <button onClick={() => addToCart(merch)} classname="add-to">Add to Cart</button>
      </div>
    );
  }
  
  export default MerchCard;
  {/* {reviews.map((review) => (
                 <button 
                 key={review}
                 classname="review-button"
                 onClick={() => setShowReviews(reviews)} 
                 >
             </button>
            ))} */}