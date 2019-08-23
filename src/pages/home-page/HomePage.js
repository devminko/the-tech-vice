import React, { } from 'react';

import HomeLanding from '../../components/home-landing/HomeLanding';
import HomeProducts from '../../components/home-products/HomeProducts';
import HomeNews from '../../components/home-news/HomeNews';

import style from './home-page.module.scss';

// *************************** HOME PAGE *************************** //
const HomePage = () => {
  return (
    <div className={style.homepage}>

      <HomeLanding />
      <HomeProducts />
      <HomeNews />
      
    </div>
  )
};

export default HomePage;