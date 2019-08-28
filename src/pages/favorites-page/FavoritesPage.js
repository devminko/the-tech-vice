import React, { } from 'react';

import FavoritesOverview from '../../components/favorites-overview/FavoritesOverview';

import style from './favorites-page.module.scss';

// *************************** FAVORITES PAGE *************************** //
const FavoritesPage = () => {
  return (
    <div className={style.favoritesPage}>

      <FavoritesOverview />

    </div>
  )
};

export default FavoritesPage;