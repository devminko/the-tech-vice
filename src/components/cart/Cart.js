import React, { } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';

import style from './cart.module.scss';

// *************************** CART COMPONENT *************************** //
const Cart = ({ currentUser, cartItems, history }) => {
  // 'currentUser' passed as prop via redux, 'history' passed as prop via withRouter
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

      <Button onClick={() => history.push('/checkout')}>Checkout</Button>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(Cart));