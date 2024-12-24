const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {id: 101, name: 'Silver Necklace', image: '/neck2.jpg', description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 102, name: 'Gold Pendant Necklace', image: '/neck3.jpg', description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  {id: 103, name: 'Silver Necklace', image: '/neck4.jpg', description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 104, name: 'Gold Pendant Necklace', image: '/neck5.jpg', description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  {id: 201, name: 'Silver Necklace', image: '/ear2.jpg', description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 202, name: 'Gold Pendant Necklace', image: '/ear3.jpg', description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  {id: 203, name: 'Silver Necklace', image: '/ear4.jpg', description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 204, name: 'Gold Pendant Necklace', image: '/ear5.jpg', description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: '301', name: 'Gold Necklace', price: 200, description: 'Beautiful gold necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings' },
  { id: '302', name: 'Silver Bracelet', price: 100, description: 'Elegant silver bracelet.', madeOn: '2023-02-01', materials: 'Silver', bestFor: 'Parties' },
  {id: 303, name: 'Silver Necklace', image: '/comb4.jpg', description: 'A classic silver necklace.'},
  { id: 304, name: 'Gold Pendant Necklace', image: '/comb5.jpg', description: 'A charming gold pendant necklace.'},
];

// Add a root route
app.get('/', (req, res) => {
  res.send('Welcome to the Products API');
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }
});

app.listen(5000, () => {
  console.log('Backend server running on http://localhost:5000');
});
