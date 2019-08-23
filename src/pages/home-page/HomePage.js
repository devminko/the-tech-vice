import React, { } from 'react';

import HomeLanding from '../../components/home-landing/HomeLanding';
import HomeProducts from '../../components/home-products/HomeProducts';

import style from './home-page.module.scss';

// *************************** HOME PAGE *************************** //
const HomePage = () => {
  return (
    <div className={style.homepage}>

      <HomeLanding />
      <HomeProducts />
      
    </div>
  )
};

export default HomePage;