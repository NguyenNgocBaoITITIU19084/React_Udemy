const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

const DUMMY_CART = {
  items: [],
  totalItems: 0,
};

app.post('/cart', (req, res) => {
  DUMMY_CART.items = req.body.items;
  DUMMY_CART.totalItems = req.body.totalItems;

  console.log('DUMMY_CART:::', DUMMY_CART);

  return res.status(201).json({ status: true, data: DUMMY_CART });
});

app.get('/cart', (req, res) => {
  return res.status(200).json({ status: true, data: DUMMY_CART });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
