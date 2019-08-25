import React, { } from 'react';
import { IoMdHeartEmpty, IoMdHeart  } from 'react-icons/io';

import style from './shop-item.module.scss';

// *************************** SHOP ITEM COMPONENT *************************** //
const ShopItem = ({ item }) => {
  // 'item' passed down as prop from ShopPreview.js
  const { brand, productName, category, ratings, numOfRatings, isFavorite, price, inventory, images } = item;

  return (
    <div className={style.shopItem}>

      <div className={style.favorites}>
        <span className={style.logo}>Tv</span>
        {
          isFavorite ? <span className={style.isFavorite}><IoMdHeart /></span>
          : <span className={style.notFavorite}><IoMdHeartEmpty /></span>
        }
      </div>
      
      <div className={style.imageContainer}>
        <img src={images[1] || images[0]} alt={productName} className={style.image} />
      </div>

      <div className={style.header}>
        <span className={style.brand}>{brand}</span>
        <span className={style.productName}>{productName} - {`(${category})`}</span>
      </div>

      <div className={style.priceContainer}>
        <span>${price}</span>
      </div>

      <div className={style.ratingsContainer}>
        <span className={style.ratings}>
          {ratings.length ? ratings : '0'} out of {numOfRatings.length ? numOfRatings : '0'} ratings
        </span>
        <span className={style.inventory}>{inventory > 10 ? '10+ Left' : `${inventory} Left`}</span>
      </div>

    </div>
  )
};

export default ShopItem;