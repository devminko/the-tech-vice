import React, { } from 'react';
import { Link } from 'react-router-dom';

import ProductsContainer from '../products-container/ProductsContainer';

import style from './products.module.scss';

// *************************** PRODUCTS COMPONENT *************************** //
const HomeProducts = () => {
  return (
    <div className={style.products}>

      <div className={style.header}>
        <h2 className={style.title}>Our Products</h2>
        <Link to='/shop' className={style.link}>
          <span className={style.text}>View All</span>
          <span className={style.symbol}>&#11179;</span>
        </Link>
      </div>

      <ProductsContainer />

    </div>
  )
};

export default HomeProducts;
