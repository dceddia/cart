import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

const CartPage = ({ items }) => (
  <div className="CartPage">
    <h2>Cart</h2>
    <ul>
      {Object.entries(items).map(([id, row]) => (
        <li key={id}>
          ({row.count}) <Item item={row.item} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  items: state.cart
});
export default connect(mapStateToProps)(CartPage);
