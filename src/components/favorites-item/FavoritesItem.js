import React, { } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoMdHeartEmpty, IoMdHeart  } from 'react-icons/io';

import { addFavorite, removeFavorite } from '../../redux/shop/shop.actions';
import { addItem } from '../../redux/cart/cart.actions';

import Button from '../button/Button';

import style from './favorites-item.module.scss';

// *************************** FAVORITES ITEM COMPONENT *************************** //
const FavoritesItem = ({ favoriteItem, addItem }) => {
  // 'favoriteItem' passed down as prop via FavoritesOverview.js
  const { brand, productName, category, ratings, numOfRatings, isFavorite, price, inventory, images } = favoriteItem;
  
  // Link leading to product page + removes any spaces in 'brand' or 'productName'
  let productLink = `shop/${brand}+${productName}+${price}`;
  productLink = productLink.replace(/\s/g, '');

  return (
    <div className={style.favoritesItem}>

      <div className={style.favorites}>
        <span className={style.logo}>Tv</span>
        {
          isFavorite
          ? <span onClick={() => removeFavorite(favoriteItem)} className={style.isFavorite}><IoMdHeart /></span>
          : <span onClick={() => addFavorite(favoriteItem)} className={style.notFavorite}><IoMdHeartEmpty /></span>
        }
      </div>
      
      <div className={style.imageContainer}>
        <Link to={productLink} favoriteItem={favoriteItem}>
          <img src={images[0]} alt={productName} className={style.image} />
        </Link>
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
        <Button onClick={() => addItem(favoriteItem)}>Add to Cart</Button>
      </div>

    </div>
  )
};

// REDUX
const mapDispatchToProps = (dispatch) => ({
  addFavorite: (item) => dispatch(addFavorite(item)),
  removeFavorite: (item) => dispatch(removeFavorite(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(FavoritesItem);