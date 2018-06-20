import React from 'react';
import ItemPage from './ItemPage';
import CartPage from './CartPage';
import { Link, Router } from '@reach/router';

const App = () => (
  <div>
    <nav>
      <Link to="/">Items</Link> <Link to="/cart">Cart</Link>
    </nav>
    <Router>
      <ItemPage path="/" />
      <CartPage path="/cart" />
    </Router>
  </div>
);

export default App;
