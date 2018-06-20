import { items } from './items';
import { ADD_TO_CART } from './actions';
import produce from 'immer';

const initialState = {
  items,
  cart: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return produce(state, draft => {
        const item = action.item;
        if (draft.cart[item.id]) {
          draft.cart[item.id].count++;
        } else {
          draft.cart[item.id] = {
            count: 1,
            item
          };
        }
      });
    default:
      return state;
  }
}
