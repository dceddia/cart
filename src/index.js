import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { fetchItems } from './actions';
import App from './App';
import './index.css';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
