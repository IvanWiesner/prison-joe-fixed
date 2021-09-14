import React, {useState, useEffect}  from "react"
import MerchCard from "./MerchCard";


function MerchPage({merches, setMerches, addToCart, login}) {
    
    const [ reviews, setReviews] = useState([])
    const [ showReviews, setShowReviews ] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((resp) => resp.json())
          .then((data) => setReviews(data));
      }, []);

      
      function handleNewReviews(newReview) {
        setReviews([...reviews, newReview])
    }
    function deleteReviews(reviewToDelete) {
        fetch(`http://localhost:3000/reviews/${reviewToDelete.id}`, {
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
        handleNewReviews={handleNewReviews}
        reviews={reviews}
        setReviews={setReviews}
        />
        )
    })}

    {
    showReviews? reviews.map((review) => <p>{review.comment}
    {login && <button onClick={() => deleteReviews(review)}>X</button>}
    {/* <button onClick={() => handleNewReviews(newReview)}>Add Review</button> */}
    </p>):null
    }
     <button className="review-button" onClick={() => setShowReviews(true)}>See Reviews</button>
     <button className="review-button" onClick={() => setShowReviews(false)}>Hide Reviews</button>
    </div>
    )
}
  export default MerchPage;
  