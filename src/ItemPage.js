import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { addToCart } from './actions';

const ItemPage = ({ items, addToCart }) => (
  <div className="ItemPage">
    <h2>Items</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item item={item}>
            <button className="addToCart" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </Item>
        </li>
      ))}
    </ul>
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
