import React, { } from 'react';
import StripeCheckout from 'react-stripe-checkout';

// *************************** BUTTON STRIPE CHECKOUT COMPONENT *************************** //
const ButtonStripeCheckout = ({ price }) => {
  // 'price' passed as prop via CheckoutPage.js
  const publishableKey = 'pk_test_S4cOoXAvp0cJF4PwegaY8llo00L0BfBZdr';
  const priceInCents = price * 100;

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!')
  };

  // Default US Card = 4242 4242 4242 4242 - Exp: 01/20 - CVV: 123

  // full list of props | settings available @ https://github.com/azmenak/react-stripe-checkout
  return (
    <StripeCheckout 
      label='Checkout'
      name='Confirm Details Below'
      billingAddress
      shippingAddress
      description={`Youre total is $${price}`}
      amount={priceInCents}
      panelLabel='Checkout'
      token={onToken} 
      stripeKey={publishableKey}
    />
  )
};

export default ButtonStripeCheckout;