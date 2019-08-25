import { ADD_FAVORITE, REMOVE_FAVORITE } from './shop.types';

export const addFavorite = (item) => ({
  type: ADD_FAVORITE,
  payload: item,
});

export const removeFavorite = (item) => ({
  type: REMOVE_FAVORITE,
  payload: item,
});

