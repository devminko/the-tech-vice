import React, { } from 'react';
import { connect } from 'react-redux';

import { selectFavoriteItems } from '../../redux/shop/shop.selectors';

import FavoritesItem from '../favorites-item/FavoritesItem';

import style from './favorites-overview.module.scss';

// *************************** FAVORITES OVERVIEW COMPONENT *************************** //
const FavoritesOverview = ({ favoriteItems }) => {
  // 'favoriteItems' passed as prop via redux
  return (
    <div className={style.favoritesOverview}>

      <div className={style.header}>
        <h3 className={style.title}>Current Favorites</h3>
        <span className={style.subtitle}>View Your Favorites Below</span>
      </div>

      <div className={style.favoritesContainer}>
        {
          favoriteItems.length
          ? favoriteItems.map(favoriteItem => (
            <FavoritesItem key={favoriteItem.id} favoriteItem={favoriteItem} />
          ))
          : <span className={style.emptyMessage}>No Current Favorites!</span>
        }
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  favoriteItems: selectFavoriteItems(state),
});

export default connect(mapStateToProps)(FavoritesOverview);