import React, { } from 'react';
import { Link } from 'react-router-dom';

import ShopItem from '../shop-item/ShopItem';

import style from './shop-preview.module.scss';

// *************************** SHOP PREVIEW COMPONENT *************************** //
const ShopPreview = ({ title, routeName, items }) => {
  // 'title', 'routeName', 'items' destructured & passed down via {...otherProps} from ShopOverview.js
  return (
    <div className={style.shopPreview}>
      
      <div className={style.header}>
        <h2 className={style.title}>{title}</h2>
        <Link to={`shop/${routeName}`} className={style.link}>
          <span className={style.text}>View All</span>
          <span className={style.symbol}>&#11179;</span>
        </Link>
      </div>

      <div className={style.container}>
        {
          items
            .filter((item, idx) => idx < 4)
            .map(item => (
            <ShopItem key={item.id} item={item} />
          ))
        }
      </div>

    </div>
  )
};

export default ShopPreview;