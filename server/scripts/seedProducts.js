const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('../models/Product');

dotenv.config();

const products = [
  {
    title: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 79.99,
    category: 'Electronics',
    image: '🎧',
    stock: 25
  },
  {
    title: 'Cotton T-Shirt',
    description: 'Comfortable 100% cotton t-shirt',
    price: 24.99,
    category: 'Clothing',
    image: '👕',
    stock: 50
  },
  {
    title: 'JavaScript Book',
    description: 'Complete guide to modern JavaScript',
    price: 39.99,
    category: 'Books',
    image: '📚',
    stock: 15
  },
  {
    title: 'Smart Watch',
    description: 'Feature-rich smartwatch with fitness tracking',
    price: 199.99,
    category: 'Electronics',
    image: '⌚',
    stock: 10
  },
  {
    title: 'Running Shoes',
    description: 'Comfortable running shoes for all terrains',
    price: 89.99,
    category: 'Clothing',
    image: '👟',
    stock: 30
  },
  {
    title: 'Plant Pot',
    description: 'Decorative ceramic plant pot',
    price: 19.99,
    category: 'Home & Garden',
    image: '🪴',
    stock: 40
  },
  {
    title: 'Laptop Stand',
    description: 'Ergonomic laptop stand for better posture',
    price: 49.99,
    category: 'Electronics',
    image: '💻',
    stock: 20
  },
  {
    title: 'Yoga Mat',
    description: 'Non-slip yoga mat for all exercises',
    price: 34.99,
    category: 'Home & Garden',
    image: '🧘',
    stock: 35
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');

    // Insert new products
    await Product.insertMany(products);
    console.log('Products seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding products:', error);
    process.exit(1);
  }
};

seedProducts();
