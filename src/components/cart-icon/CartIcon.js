import React, { } from 'react';
import { TiShoppingCart } from 'react-icons/ti';

import style from './cart-icon.module.scss';

// *************************** CART ICON COMPONENT *************************** //
const CartIcon = () => {
  return (
    <div className={style.carticon}>
      <TiShoppingCart className={style.icon} />
      <div className={style.totals}>
        <span className={style.quantity}>0</span>
      </div>
    </div>
  )
};

export default CartIcon;