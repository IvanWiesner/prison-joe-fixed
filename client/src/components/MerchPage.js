import React, {useState, useEffect}  from "react"
import MerchCard from "./MerchCard";

function MerchPage({merches, setMerches, handleNewReviews}) {
    
    const [ reviews, setReviews] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/reviews")
          .then((resp) => resp.json())
          .then((data) => setReviews(data));
      }, []);

return (
    <main>
    {merches.map(merch => {
        return (
        <MerchCard 
        merch={merch}
        key={merch.id}
        handleNewReviews={handleNewReviews}
        reviews={reviews}
        />
        )
    })}
    </main>
    )
}
  export default MerchPage;