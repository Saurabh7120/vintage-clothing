/*jshint esversion:9*/

import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
  const priceForStripe = price*100;
  const publishableKey = 'pk_test_51HNbVjIEfLnDaRZy6F8Gb8jFNWkttFWcdUkToTM5T4hvAocfnAPn5EKgFFGKg84WBPyAdb5bgRhPweNLgQwIx2rw00JlfdTCiR';

  const onToken = token =>{
    alert('Payment successfull');
  }

  return(
    <div>
      <StripeCheckout
        label='Pay Now'
        name='Vintage Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        pabelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
