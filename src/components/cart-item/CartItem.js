import React, { } from 'react';

import style from './cart-item.module.scss';

// *************************** CART ITEM COMPONENT *************************** //
const CartItem = () => {
  return (
    <div className={style.cartitem}>
      
      <img src='https://mechanicalkeyboards.com/shop/images/products/large_022C03PK102_main.jpg' alt='name' className={style.image}/>

      <div className={style.item}>
      
        <span className={style.title}>Item Title</span>
        <span className={style.subtitle}>Item Subtitle</span>

        <div className={style.totalsContainer}>
          <span className={style.totals}>1 x $20.00</span>
          <div className={style.buttons}>
            <span className={style.add}>Add</span>
            <span className={style.remove}>Remove</span>
          </div>
        </div>

      </div>

    </div>
  )
};

export default CartItem;