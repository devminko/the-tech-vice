import { combineReducers } from 'redux';

import { categoryReducer } from './category/category.reducer';
import { userReducer } from './user/user.reducer';
import { cartReducer } from './cart/cart.reducer';
import { shopReducer } from './shop/shop.reducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
});