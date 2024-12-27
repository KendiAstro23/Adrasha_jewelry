process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err, origin) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Exit the process with failure code
});

const heapdump = require('heapdump');
heapdump.writeSnapshot('./' + Date.now() + '.heapsnapshot');


setInterval(() => {
  const memoryUsage = process.memoryUsage();
  console.log(`Memory Usage: ${memoryUsage.heapUsed / 1024 / 1024} MB`);
}, 10000); // Log memory usage every 10 seconds


const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
  {id: 101, name: 'Silver Necklace', imageUrl: 'neck2.jpg', price: 200, description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 102, name: 'Gold Pendant Necklace', imageUrl: 'neck3.jpg', price: 200, description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  {id: 103, name: 'Silver Necklace', imageUrl: 'neck4.jpg', price: 200, description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 104, name: 'Gold Pendant Necklace', imageUrl: '/neck5.jpg', price: 200, description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  {id: 201, name: 'Silver Necklace', imageUrl: '/ear2.jpg', price: 200, description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 202, name: 'Gold Pendant Necklace', imageUrl: '/ear3.jpg', price: 200, description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  {id: 203, name: 'Silver Necklace', imageUrl: '/ear4.jpg', price: 200, description: 'A classic silver necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: 204, name: 'Gold Pendant Necklace', imageUrl: '/ear5.jpg', price: 200, description: 'A charming gold pendant necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings'},
  { id: '301', name: 'Gold Necklace', imageUrl: 'comb2.jpg', price: 200, description: 'Beautiful gold necklace.', madeOn: '2023-01-01', materials: 'Gold', bestFor: 'Weddings' },
  { id: '302', name: 'Silver Bracelet', imageUrl: 'comb3.jpg', price: 100, description: 'Elegant silver bracelet.', madeOn: '2023-02-01', materials: 'Silver', bestFor: 'Parties' },
  {id: 303, name: 'Silver Necklace', imageUrl: '/comb4.jpg', price: 200, description: 'A classic silver necklace.'},
  { id: 304, name: 'Gold Pendant Necklace', imageUrl: '/comb5.jpg', price: 200, description: 'A charming gold pendant necklace.', },
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
