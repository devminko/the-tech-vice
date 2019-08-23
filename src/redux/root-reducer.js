import { combineReducers } from 'redux';

import { categoryReducer } from './category/category.reducer';

export const rootReducer = combineReducers({
  category: categoryReducer,
});