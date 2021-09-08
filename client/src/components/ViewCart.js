import React from "react"
import emailjs from 'emailjs-com';

function ViewCart() {

    function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('gmail', 'template_epnkdjv', e.target, 'user_bFjBxUDkvkxalpdQyr8Xh')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset()
          }

    return (
      <div className="order-container">
          <form onSubmit={sendEmail}>
            <div className="email-address">
                <input type="email" placeholder="Email Address" name="email"/>
            </div>
            <div className="shipping-address">
                <input type="text" placeholder="Shipping Address" name="address"/>
            </div>
            <div className="submit">
                <input type="submit" value="Submit Order"/>
            </div>
        </form>
      </div>
    );
  }
  
  export default ViewCart;