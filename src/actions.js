const ADD_TO_CART = 'ADD_TO_CART';

const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

export { ADD_TO_CART, addToCart };
