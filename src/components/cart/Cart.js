import React, { } from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';

import style from './cart.module.scss';

// *************************** CART COMPONENT *************************** //
const Cart = ({ currentUser, cartItems }) => {
  // 'currentUser' passed as prop via redux
  return (
    <div className={style.cart}>

      <h3 className={style.title}>My Cart</h3>

      <div className={style.items}>
        {
          cartItems.length
          ? <CartItem />
          : <span className={style.emptyMessage}>Your Cart is Empty!</span>
        }
      </div>

      <div className={style.totals}>
        {
          cartItems.length
          ? 
          <>
            <span className={style.count}>Items: 0</span>
            <span className={style.price}>Price: $0.00</span>
          </>
          : null
        }
      </div>

      <Button>Checkout</Button>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(Cart);