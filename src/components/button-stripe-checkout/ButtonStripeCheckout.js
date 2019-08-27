import React, { } from 'react';
import StripeCheckout from 'react-stripe-checkout';

// *************************** BUTTON STRIPE CHECKOUT COMPONENT *************************** //
const ButtonStripeCheckout = () => {
  const publishableKey = 'pk_test_S4cOoXAvp0cJF4PwegaY8llo00L0BfBZdr';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful!')
  };

  // full list of props | settings available @ https://github.com/azmenak/react-stripe-checkout
  return (
    <StripeCheckout 
      token={onToken}
      stripeKey={publishableKey}
      name='Tech Vice'
      ComponentClass='div'
      label='Checkout Now'

    />
  )
};

export default ButtonStripeCheckout;