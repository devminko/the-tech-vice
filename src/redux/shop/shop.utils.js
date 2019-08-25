// ADD ITEM TO FAVORITE
export const addItemToFavorites = (favoriteItems, favoriteItemToAdd) => {
  const existingFavoriteItem = favoriteItems.find(favoriteItem => {
    return favoriteItem.id === favoriteItemToAdd.id
  });

  // if 'existingFavoriteItem' exists, a NEW array will be returned via favoriteItems.map()
  if (existingFavoriteItem) {
    return favoriteItems.map(favoriteItem => (
      favoriteItem.id === favoriteItemToAdd.id
      // ? {...favoriteItem, quantity: favoriteItem.quantity + 1, isFavorite: true}
      ? {...favoriteItem, isFavorite: true}
      : favoriteItem
    ))
  };
  
  // return [...favoriteItems, {...favoriteItemToAdd, quantity: 1, isFavorite: true}];
  return [...favoriteItems, {...favoriteItemToAdd, isFavorite: true}];

};

// REMOVE ITEM FROM FAVORITES
export const removeItemFromFavorites = (favoriteItems, favoriteItemToRemove) => {
  const existingFavoriteItem = favoriteItems.find(favoriteItem =>{
    return favoriteItem.id === favoriteItemToRemove.id
  });

  if (existingFavoriteItem.quantity === 1) {
    return favoriteItems.filter(favoriteItem => favoriteItem.id !== favoriteItemToRemove.id)
  } else {
    return favoriteItems.map(favoriteItem => (
      favoriteItem.id === favoriteItemToRemove.id
      ? {...favoriteItem, quantity: favoriteItem.quantity - 1, isFavorite: false}
      : favoriteItem
    ))
  };
};