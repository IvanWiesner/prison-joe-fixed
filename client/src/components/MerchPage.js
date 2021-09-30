import React, {useState, useEffect}  from "react"
import MerchCard from "./MerchCard";


function MerchPage({merches, setMerches, addToCart, login}) {
    
    const [ reviews, setReviews] = useState([])
    const [ showReviews, setShowReviews ] = useState(false)
    const [ comment, setComment ] = useState('')

    useEffect(() => {
        fetch("/reviews")
          .then((resp) => resp.json())
          .then((data) => setReviews(data));
      }, []);
console.log(handleSubmit)


      function handleSubmit (e) {
          console.log(handleSubmit)
        e.stopPropagation()
        e.preventDefault()
        const newReviewObject = {
            comment,
        }
        fetch(`/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(newReviewObject)
        })
        .then(res => res.json())
        .then((data) => handleNewReview(data), setComment(""));
      }
      


      function handleNewReview(newReview) {
        setReviews([...reviews, newReview])
    }
    function deleteReviews(reviewToDelete) {
        fetch(`/reviews/${reviewToDelete.id}`, {
            method: 'DELETE'
        })
        console.log('deleteReviews', reviewToDelete)
        const remaingingReviews = reviews.filter(review => {
            return review !== reviewToDelete
        })
        setReviews(remaingingReviews)
    }
    

return (
    <div>
    {merches.map(merch => {
        return (
        <MerchCard 
        addToCart={addToCart}
        merch={merch}
        key={merch.id}
        reviews={reviews}
        setReviews={setReviews}
        setMerches={setMerches}
        login={login}
        />
        )
    })}
    <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="paypal">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="Z8BAUHWBBBJCY"/>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
    <div>
    {
    showReviews? 
    <>
    {reviews.map((review) => <p className="reviews">"{review.comment}"
    {login && <button onClick={() => deleteReviews(review)}>X</button>}
    </p>)}

    <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="comment" 
          placeholder="Comment" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
        />
       <button type="submit">Add Review</button>
      </form>
    </>
    
    :null}
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
     <button type="button" id="reviews" class="btn btn-outline-danger" onClick={() => setShowReviews(true)}>See Reviews</button>
     <button type="button" id="reviews" class="btn btn-outline-danger" onClick={() => setShowReviews(false)}>Hide Reviews</button>
    </div>
    )
}
  export default MerchPage;
  