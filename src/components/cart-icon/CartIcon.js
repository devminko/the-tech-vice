import React, { } from 'react';
import { connect } from 'react-redux';
import { TiShoppingCart } from 'react-icons/ti';

import { toggleCartVisibility } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import Cart from '../cart/Cart';

import style from './cart-icon.module.scss';

// *************************** CART ICON COMPONENT *************************** //
const CartIcon = ({ isCartVisible, toggleCartVisibility, totalCartQuantity }) => {
  // 'isCartVisible' 'toggleCartVisibility' passed down as props via redux
  return (
    <div onClick={toggleCartVisibility} className={style.carticon}>
      <TiShoppingCart className={isCartVisible ? style.iconOpen : style.icon} />
      <div className={style.totals}>
        <span className={style.quantity}>{totalCartQuantity}</span>
      </div>
      {
        isCartVisible && <Cart />
      }
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  isCartVisible: state.cart.isCartVisible,
  totalCartQuantity: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);