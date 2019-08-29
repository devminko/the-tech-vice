import React, { } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { emptyCart } from '../../redux/cart/cart.actions';

// *************************** BUTTON STRIPE CHECKOUT COMPONENT *************************** //
const ButtonStripeCheckout = ({ price, history, emptyCart }) => {
  // 'price' passed as prop via CheckoutPage.js
  const publishableKey = 'pk_test_S4cOoXAvp0cJF4PwegaY8llo00L0BfBZdr';
  const priceInCents = price * 100;

  const onToken = async (token) => {
    console.log(token);
    await alert('Payment Successful!');
    history.push('/');
    emptyCart();
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

// REDUX
const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});

export default withRouter(connect(null, mapDispatchToProps)(ButtonStripeCheckout));