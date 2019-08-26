// ADD FAVORITE - 'favoriteItems' from shop.reducer
export const addItemToFavorites = (favoriteItems, favoriteItemToAdd) => {
  const existingFavoriteItem = favoriteItems.find(favoriteItem => {
    return favoriteItem.id === favoriteItemToAdd.id
  });

  // existingFavoriteItem ? returns new array via favoriteItems.map
  if (existingFavoriteItem) {
    return favoriteItems.map(favoriteItem => (
      favoriteItem.id === favoriteItemToAdd.id
      ? {...favoriteItem, isFavorite: true}
      : favoriteItem
    ))
  }

  return [...favoriteItems, {...favoriteItemToAdd, isFavorite: true}];

};

// REMOVE FAVORITE - 'favoriteItems' from shop.reducer.js
export const removeItemFromFavorites = (favoriteItems, favoriteItemToRemove) => {

};

// TOGGLE IS FAVORITE
export const toggleIsFavorite = (favoriteItems, favoriteItem) => {

};