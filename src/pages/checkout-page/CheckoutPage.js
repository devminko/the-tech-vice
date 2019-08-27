import React, { } from 'react';
import { connect } from 'react-redux';

import { selectCartItems, selectCartItemsCount, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import style from './checkout-page.module.scss';

// *************************** CHECKOUT PAGE  *************************** //
const CheckoutPage = ({ cartItems, totalCartQuantity, totalCartPrice }) => {
  return (
    <div className={style.checkoutPage}>

      <div className={style.header}>
        <h2 className={style.title}>Ready to Checkout?</h2>
        <h3 className={style.subtitle}>Review the Items in Your Cart</h3>
      </div>

      <div className={style.cartHeader}>
        <span className={style.product}>Product</span>
        <span className={style.price}>Price</span>
        <span className={style.quantity}>Quantity</span>
        <span className={style.itemTotal}>Total</span>
      </div>
    
      <div className={style.cartContainer}>
        {
          cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        }
      </div>

      <div className={style.totals}>
        <span className={style.text}>
          Subtotal <br />
          <span className={style.subQuantity}> ({totalCartQuantity || 0} items)</span>
        </span>
        <span className={style.subtotal}>
          ${totalCartPrice}
          <br />
          <span className={style.taxText}>(excluding taxes)</span>
        </span>
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  totalCartQuantity: selectCartItemsCount(state),
  totalCartPrice: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);