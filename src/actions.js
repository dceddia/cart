const ADD_TO_CART = 'ADD_TO_CART';
const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';

const addToCart = item => ({
  type: ADD_TO_CART,
  item
});

const fetchItemsSuccess = items => ({
  type: FETCH_ITEMS_SUCCESS,
  items
});

const fetchItems = () => {
  return dispatch => {
    fetch('/items')
      .then(res => res.json())
      .then(data => dispatch(fetchItemsSuccess(data.items)));
  };
};

export { ADD_TO_CART, FETCH_ITEMS_SUCCESS, fetchItems, addToCart };
