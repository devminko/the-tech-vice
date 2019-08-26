import { SHOP_DATA } from './shop.data';
import { ADD_FAVORITE, REMOVE_FAVORITE } from './shop.types';
import { addItemToFavorites, removeItemFromFavorites } from './shop.utils';

const INITIAL_STATE = {
  collections: SHOP_DATA,
  favoriteItems: [],
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE :
      return {
        ...state,
        favoriteItems: addItemToFavorites(state.favoriteItems, action.payload),
      };
    case REMOVE_FAVORITE :
      return {
        ...state,
        favoriteItems: removeItemFromFavorites(state.favoriteItems, action.payload),
      };
    default :
      return state;
  }
};
