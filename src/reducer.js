import { items } from './items';
import { ADD_TO_CART } from './actions';

const initialState = {
  items,
  cart: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.item]
      };
    default:
      return state;
  }
}
