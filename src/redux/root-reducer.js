import { combineReducers } from 'redux';

import { categoryReducer } from './category/category.reducer';
import { userReducer } from './user/user.reducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
  user: userReducer,
});