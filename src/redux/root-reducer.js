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






// WITH REDUX PERSIST
// import { combineReducers } from 'redux';

// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// import { categoryReducer } from './category/category.reducer';
// import { userReducer } from './user/user.reducer';
// import { cartReducer } from './cart/cart.reducer';
// import { shopReducer } from './shop/shop.reducer';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   whitelist: ['cart'],      // 'userReducer' not whitelisted as its database is handled by firebase
// }

// const rootReducer = combineReducers({
//   category: categoryReducer,
//   user: userReducer,
//   cart: cartReducer,
//   shop: shopReducer,
// });

// export default persistReducer(persistConfig, rootReducer);




