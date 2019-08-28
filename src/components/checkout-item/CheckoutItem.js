import React, { } from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import style from './checkout-item.module.scss';

// *************************** CHECKOUT ITEM COMPONENT  *************************** //
const CheckoutItem = ({ cartItem, addItem, removeItem }) => {
  // 'cartItem' passed as prop via CheckoutPage.js
  const { brand, productName, category, price, images, quantity } = cartItem;

  const totalPrice = quantity * price;

  return (
    <div className={style.checkoutItem}>

      <div className={style.productContainer}>
        <img src={images[0]} alt={productName} className={style.image} />
        <span className={style.product}>
          <span className={style.brand}>{brand}</span> 
          <br /> 
          <span className={style.productName}>{productName}</span>
          <br /> 
          <span className={style.category}>{category}</span>
        </span>
      </div>

      <span className={style.price}>${price}</span>

      <div className={style.quantityContainer}>
        <span onClick={() => removeItem(cartItem)} className={style.remove}>&#8722;</span>
        <span className={style.quantity}>{quantity}</span>
        <span onClick={() => addItem(cartItem)} className={style.add}>&#43;</span>
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