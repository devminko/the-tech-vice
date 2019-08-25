import React, { } from 'react';

import ShopOverview from '../../components/shop-overview/ShopOverview';

import style from './shop-page.module.scss';

// *************************** SHOP PAGE *************************** //
const ShopPage = () => {
  return (
    <div className={style.shopPage}>
      
      <ShopOverview />

    </div>
  )
};

export default ShopPage;