import React, { } from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import style from './checkout-item.module.scss';

// *************************** CHECKOUT ITEM COMPONENT  *************************** //
const CheckoutItem = ({ cartItem, addItem, removeItem }) => {
  // 'cartItem' passed as prop via CheckoutPage.js
  const { id, brand, productName, category, ratings, numOfRatings, isFavorite, price, inventory, images, quantity } = cartItem;

  const totalPrice = quantity * price;

  return (
    <div className={style.checkoutItem}>

      <div className={style.productContainer}>
        <img src={images[0]} alt={productName} className={style.image} />
        <span className={style.product}>{brand} <br /> {productName}<br /> {category}</span>
      </div>

      <span className={style.price}>${price}</span>

      <div className={style.quantityContainer}>
        <span onClick={() => removeItem(cartItem)} className={style.remove}>-</span>
        <span className={style.quantity}>{quantity}</span>
        <span onClick={() => addItem(cartItem)} className={style.add}>+</span>
      </div>

      <span className={style.totalPrice}>${totalPrice}</span>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);