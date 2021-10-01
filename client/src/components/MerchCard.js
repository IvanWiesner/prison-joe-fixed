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
  // note test
    return (
      <div className="merchcard">
          <div className="card">
          <p className="merch-name">{merch.name}</p>
            <Image src={merch.image_url} className="hat" fluid/>
                <p className="merch-price">$ {merch.price}</p>
                <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="paypal">
              <input type="hidden" name="cmd" value="_s-xclick"/>
              <input type="hidden" name="hosted_button_id" value="Z8BAUHWBBBJCY"/>
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
          </form>
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