import { createSelector } from 'reselect';

const selectShop = (state) => {
  return state.shop;
};

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections,
);

export const selectFavoriteItems = createSelector(
  [selectShop],
  shop => shop.favoriteItems,
)