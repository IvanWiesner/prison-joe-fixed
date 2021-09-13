import React, {useState, useEffect}  from "react"
import MerchCard from "./MerchCard";
import NewMerch from "./NewMerch";

function MerchPage({merches, setMerches, addToCart}) {
    
    const [ reviews, setReviews] = useState(false)

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
        <NewMerch 
        merches={merches}
        reviews={reviews}
        />
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
    </main>
    )
}
  export default MerchPage;