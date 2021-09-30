import React, {useState}  from "react"
import { useHistory } from "react-router-dom"
import CheckoutPage from "./CheckoutPage"
import {Image, Col} from "react-bootstrap";

function MerchCard({merch, setMerches, handleNewReviews, addToCart, reviews,  setReviews, login}) {

  const [merchButton, setMerchButton] = useState(false)
    
  let history = useHistory();

    function deleteMerches(merchToDelete) {
      fetch(`/merches/${merchToDelete.id}`, {
          method: 'DELETE'
      })
      console.log('deleteMerches', merchToDelete)
      const remaingingMerches = merch.filter(merch => {
          return merch !== merchToDelete
      })
      setMerches(remaingingMerches)
  }    
  
    return (
      <div className="merchcard">
          <div className="card">
          <p className="merch-name">{merch.name}</p>
            <Image src={merch.image_url} className="hat" fluid/>
                <p className="merch-price">$ {merch.price}</p>
              {/* <button type="button" class="btn btn-outline-warning" onClick={() => addToCart(merch)} classname="add-to">Add to Cart</button> */}
              <div>
              {login && <button type="button" class="btn btn-outline-warning" onClick={() => deleteMerches(merch)}>Remove Merch</button>}
            </div>  
            {/* <button type="button" class="btn btn-outline-warning" onClick={() => history.push('/cart')}>Go to Cart</button>   */}
          </div>
      </div>
    );
  }
  
  export default MerchCard;