const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize App
const app = express();
app.use(express.json());
app.use(cors());

// --- DATABASE CONNECTION ---
// FORCE the same database name 'smartcart'
mongoose.connect('mongodb://localhost:27017/smartcart')
  .then(() => console.log('✅ MongoDB Connected to: smartcart'))
  .catch(err => console.log(err));
// --- PRODUCT LOGIC ---
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: Number,
  category: String,
  image: String,
  stock: Number,
  specs: [String]
});
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// Public Routes
app.get('/api/products', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};
    if (category && category !== 'All') query.category = category;
    if (search) query.title = { $regex: search, $options: 'i' };
    const products = await Product.find(query);
    res.json(products);
  } catch (err) { res.status(500).json({ message: 'Server Error' }); }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
  } catch (err) { res.status(500).json({ message: 'Server Error' }); }
});

// --- LOAD ROUTES ---
// --- LOAD ROUTES ---
app.use('/api/auth', require('./routes/auth'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes')); // <--- NEW LINE

// --- START SERVER ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});