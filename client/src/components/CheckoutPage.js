import React from "react"
import emailjs from 'emailjs-com';
import MerchCard from "./MerchCard";

function CheckoutPage({merches}) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_hcw9orn', 'template_epnkdjv', e.target, 'user_bFjBxUDkvkxalpdQyr8Xh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  // const renderCart = () => {
  //   const filterCart = merches.filter(merch => {
  //   return filterCart.map(merch => {
  //     <MerchCard
  //     key={merch.id}
  //     merch={merch}
  //     />
  //   })})
return (
<div className="order-container">
  <form onSubmit={sendEmail}>
    <div className="email-address">
        <p></p>
        <input type="email" placeholder="Email Address" name="email"/>
    </div>
    <div className="shipping-address">
        <input type="text" placeholder="Shipping Address" name="address"/>
    </div>
    <div className="submit">
        <input type="submit" value="Submit Order"/>
    </div>
    <div>
      {/* {renderCart()} */}
    </div>
</form>
</div>
);
}
  
  export default CheckoutPage;