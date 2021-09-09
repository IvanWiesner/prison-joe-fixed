import React, {useState} from "react"
import { useHistory } from "react-router-dom"

function MerchCard({merch, handleNewReviews, reviews}) {
    const [cart, setCart] = useState([])
    const [page, setPage] = useState('merch')

    let history = useHistory();

    const addToCart = (merch) => {
    setCart([...cart, merch])
    console.log('add to  cart worked')
    }
    const renderMerch = () => (
        <>
        <p>{merch.name}</p>
        <img className="hat" src={merch.image_url}/>
        <p>$ {merch.price}</p>
        <div>
            <button onClick={() => addToCart(merch)} classname="add-to">Add to Cart</button>
            <button classname="review-button">See Reviews</button>
        </div>
        </>
    )
    return (
      <div className="MerchCard">
          <header>
              {reviews.map(review => <p>{review.comment}</p>)}
              <button onClick={() => history.push('/cart')}>Go to Cart ({cart.length})</button>
          </header>
          {page === "merch" && renderMerch()}
      </div>
    );
  }
  
  export default MerchCard;