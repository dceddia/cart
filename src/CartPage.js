import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const CartPage = ({ items }) => (
  <div className="CartPage">
    <h2>Cart</h2>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  items: state.cart
});
export default connect(mapStateToProps)(CartPage);
