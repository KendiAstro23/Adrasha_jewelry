const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample product data
const products = [
  {
    _id: '1',
    name: 'Gold Necklace',
    description: 'A beautiful gold necklace.',
    price: 200,
    imageUrl: 'https://example.com/images/gold-necklace.jpg',
    madeOn: '2023-10-01',
    materials: 'Gold',
    bestFor: 'Weddings, parties',
  },
  {
    _id: '2',
    name: 'Silver Bracelet',
    description: 'A stylish silver bracelet.',
    price: 100,
    imageUrl: 'https://example.com/images/silver-bracelet.jpg',
    madeOn: '2023-09-15',
    materials: 'Silver',
    bestFor: 'Daily wear, gifts',
  },
];

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
