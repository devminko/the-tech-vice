import { CATEGORY_DATA } from './category.data';

const INITIAL_STATE = {
  productCategories: CATEGORY_DATA,
};

export const categoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default :
      return state;
  }
};