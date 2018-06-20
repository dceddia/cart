const express = require('express');
const { items } = require('./src/items');

const app = express();

// View latest image
app.get('/items', (req, res) => {
  res.json({
    items
  });
});

const port = process.env.PORT || 5005;
app.listen(port);

console.log(`Cart server listening on ${port}`);
