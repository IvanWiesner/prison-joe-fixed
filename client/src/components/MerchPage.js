import React, {useState, useEffect}  from "react"
import MerchCard from "./MerchCard";


function MerchPage({merches, setMerches, addToCart}) {
    
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
    

return (
    <main>
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
    showReviews? reviews.map((review) => <p>{review.comment}</p>):null
    }
     <button onClick={() => setShowReviews(true)}>See Reviews</button>
     <button onClick={() => setShowReviews(false)}>Hide Reviews</button>
    </main>
    )
}
  export default MerchPage;