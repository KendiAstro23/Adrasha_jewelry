const mongoose = require('mongoose');
const Product = require('./server'); // Adjust the path if needed

const MONGO_URI = 'mongodb://localhost:27017/jewelry';

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

const sampleProducts = [
  {
    name: 'Gold Necklace',
    description: 'A stunning gold necklace perfect for any occasion.',
    price: 199.99,
    imageUrl: 'https://example.com/gold-necklace.jpg',
    madeOn: '2022-11-01',
    materials: '24k Gold',
    bestFor: 'Weddings, Anniversaries',
  },
  {
    name: 'Silver Bracelet',
    description: 'Elegant silver bracelet with intricate designs.',
    price: 99.99,
    imageUrl: 'https://example.com/silver-bracelet.jpg',
    madeOn: '2023-01-15',
    materials: 'Sterling Silver',
    bestFor: 'Birthdays, Casual Wear',
  },
];

const seedDatabase = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(sampleProducts);
    console.log('Database seeded!');
    mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    mongoose.disconnect();
  }
};

seedDatabase();
