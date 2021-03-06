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
       <button type="submit" class="btn btn-outline-danger">Add Review</button>
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
  