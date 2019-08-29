import { TOGGLE_CART_VISIBILITY, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS, EMPTY_CART } from './cart.types';

export const toggleCartVisibility = () => ({
  type: TOGGLE_CART_VISIBILITY,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItems = (item) => ({
  type: CLEAR_ITEMS,
  payload: item,
});

export const emptyCart = () => ({
  type: EMPTY_CART,
});

