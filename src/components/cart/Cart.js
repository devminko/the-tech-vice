import React, { } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/CartItem';
import Button from '../button/Button';

import style from './cart.module.scss';

// *************************** CART COMPONENT *************************** //
const Cart = ({ cartItems, totalCartQuantity, history }) => {
  // 'currentUser' passed as prop via redux, 'history' passed as prop via withRouter
  return (
    <div className={style.cart}>

      <h3 className={style.title}>My Cart</h3>

      <div className={style.items}>
        {
          cartItems.length
          ? cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)
          : <span className={style.emptyMessage}>Your Cart is Empty!</span>
        }
      </div>

      <div className={style.totals}>
        {
          cartItems.length
          ? 
          <>
            <span className={style.quantity}>Items: {totalCartQuantity}</span>
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
  cartItems: state.cart.cartItems,
  totalCartQuantity: selectCartItemsCount(state),
});

export default withRouter(connect(mapStateToProps)(Cart));