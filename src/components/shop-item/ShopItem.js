import React, { } from 'react';
import { connect } from 'react-redux';
import { IoMdHeartEmpty, IoMdHeart  } from 'react-icons/io';

import { addFavorite, removeFavorite } from '../../redux/shop/shop.actions';
import { addItem } from '../../redux/cart/cart.actions';

import Button from '../button/Button';

import style from './shop-item.module.scss';

// *************************** SHOP ITEM COMPONENT *************************** //
const ShopItem = ({ item, addFavorite, removeFavorite, addItem }) => {
  // 'item' passed down as prop from ShopPreview.js + 'addFavorite', 'removeFavorite', 'addItem' via REDUX
  const { brand, productName, category, ratings, numOfRatings, isFavorite, price, inventory, images } = item;

  return (
    <div className={style.shopItem}>

      <div className={style.favorites}>
        <span className={style.logo}>Tv</span>
        {
          isFavorite
          ? <span onClick={() => removeFavorite(item)} className={style.isFavorite}><IoMdHeart /></span>
          : <span onClick={() => addFavorite(item)} className={style.notFavorite}><IoMdHeartEmpty /></span>
        }
      </div>
      
      <div className={style.imageContainer}>
        <img src={images[0]} alt={productName} className={style.image} />
      </div>

      <div className={style.header}>
        <span className={style.brand}>{brand}</span>
        <span className={style.productName}>{productName} - {`(${category})`}</span>
      </div>

      <div className={style.priceContainer}>
        <span className={style.price}>${price}</span>
      </div>

      <div className={style.ratingsContainer}>
        <span className={style.ratings}>
          {ratings.length ? ratings : '0'} out of {numOfRatings.length ? numOfRatings : '0'} ratings
        </span>
        <span className={style.inventory}>{inventory > 10 ? '10+ Left' : `${inventory} Left`}</span>
      </div>

      <div className={style.buttonContainer}>
        <Button onClick={() => addItem(item)}>Add to Cart</Button>
      </div>

    </div>
  )
};

// REDUX
// const mapStateToProps = (state) => ({
//   inventory: state.cartItems.inventory,
// });

const mapDispatchToProps = (dispatch) => ({
  addFavorite: (item) => dispatch(addFavorite(item)),
  removeFavorite: (item) => dispatch(removeFavorite(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopItem);