import React, { } from 'react';
import { connect } from 'react-redux';

import { selectCollections } from '../../redux/shop/shop.selectors';
import ShopPreview from '../shop-preview/ShopPreview';

import style from './shop-overview.module.scss';

// *************************** SHOP OVERVIEW *************************** //
const ShopOverview = ({ collections }) => {
  return (
    <div className={style.shopOverview}>
      
      {
        collections.map(({id, ...otherProps}) => (
          <ShopPreview key={id} {...otherProps} />
        ))
      }

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(ShopOverview);