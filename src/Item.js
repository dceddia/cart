import React from 'react';

const Item = ({ item, children }) => (
  <div className="Item">
    <div className="left">
      <div className="name">{item.name}</div>
      <div className="description">{item.description}</div>
    </div>
    <div className="right">
      <div className="price">$ {item.price.toFixed(2)}</div>
      {children}
    </div>
  </div>
);

export default Item;
