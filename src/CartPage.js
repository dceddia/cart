import React from 'react';
import { connect } from 'react-redux';

const CartPage = ({ items }) => (
  <div className="CartPage">
    <h2>Cart</h2>
    <ul>{items.map(item => <li key={item.id}>{item.name}</li>)}</ul>
  </div>
);

const mapStateToProps = state => ({
  items: state.cart
});
export default connect(mapStateToProps)(CartPage);
