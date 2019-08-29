import React, { } from 'react';
import { connect } from 'react-redux';

import { addItem, removeItem } from '../../redux/cart/cart.actions';

import style from './cart-item.module.scss';

// *************************** CART ITEM COMPONENT *************************** //
const CartItem = ({ cartItem, addItem, removeItem }) => {
  // 'cartItem' passed down as prop via Cart.js and destructured
  const { brand, productName, category, price, images, quantity } = cartItem;

  return (
    <div className={style.cartItem}>
      
      <img src={images[0]} alt={productName} className={style.image}/>

      <div className={style.item}>

        <div className={style.productContainer}>
          <span className={style.title}>{brand}</span>
          {/* <span className={style.subtitle}>{productName} - {category}</span> */}
          <span className={style.subtitle}>{productName}</span>
          <span className={style.category}>{category}</span>
        </div>

        <div className={style.totalsContainer}>
          <span className={style.totals}>
            {quantity} <span className={style.totalsMultiplier}>x</span> ${price}.00
          </span>
          <div className={style.buttons}>
            <span onClick={() => addItem(cartItem)} className={style.add}>Add</span>
            <span onClick={() => removeItem(cartItem)} className={style.remove}>Remove</span>
          </div>
        </div>

      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CartItem);