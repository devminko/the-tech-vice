import React, { } from 'react';
import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import style from './checkout-item.module.scss';

// *************************** CHECKOUT ITEM COMPONENT  *************************** //
const CheckoutItem = ({ cartItem }) => {
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
        <span className={style.remove}>-</span>
        <span className={style.quantity}>{quantity}</span>
        <span className={style.add}>+</span>
      </div>
      <span className={style.totalPrice}>${totalPrice}</span>

      {/* <div className={style.quantityContainer}>
        <span className={style.remove}>Remove</span>
        <span className={style.quantity}>{quantity}</span>
        <span className={style.add}>Add</span>
      </div> */}
    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
})

export default connect(mapStateToProps)(CheckoutItem);