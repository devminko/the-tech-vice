import React, {} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import style from './products-container.module.scss';

// *************************** PRODUCTS CONTAINER COMPONENT *************************** //
const ProductsContainer = ({ productCategories }) => {
  // 'productCategories' passed as prop via REDUX
  return (
    <div className={style.container}>

      {
        productCategories.map(category => (
            <div key={category.id} className={style.category}>
            <Link to={category.routeUrl}>
                <img src={category.imageUrl} className={style.image} alt={category.title} />
                <h3 className={style.title}>{category.title}</h3>
                <span className={style.subtitle}>{category.subtitle}</span>
            </Link> 
            </div>
        ))
      }

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  productCategories: state.category.productCategories,
});

export default connect(mapStateToProps)(ProductsContainer);