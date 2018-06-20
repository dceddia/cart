import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions';

const ItemPage = ({ items, addToCart }) => (
  <div className="ItemPage">
    <h2>Items</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item item={item} onAddToCart={() => addToCart(item)} />
        </li>
      ))}
    </ul>
  </div>
);

const Item = ({ item, onAddToCart }) => (
  <div className="Item">
    <div className="left">
      <div className="name">{item.name}</div>
      <div className="description">{item.description}</div>
    </div>
    <div className="right">
      <div className="price">$ {item.price.toFixed(2)}</div>
      <button className="addToCart" onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
);

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = {
  addToCart
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemPage);
