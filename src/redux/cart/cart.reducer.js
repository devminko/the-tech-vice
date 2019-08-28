import { TOGGLE_CART_VISIBILITY, ADD_ITEM, REMOVE_ITEM, CLEAR_ITEMS } from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  isCartVisible: false,
  cartItems: [],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY :
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    case ADD_ITEM :
      return {
        // ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case REMOVE_ITEM :
      return {
        // ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CLEAR_ITEMS :
      return {
        ...state,
      }
    default :
      return state;
  }
};
