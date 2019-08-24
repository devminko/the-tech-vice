import { TOGGLE_CART_VISIBILITY } from './cart.types';

const INITIAL_STATE = {
  isCartVisible: true,
  cartItems: [1],
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_VISIBILITY :
      return {
        ...state,
        isCartVisible: !state.isCartVisible,
      };
    default :
      return state;
  }
};
