const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Initialize Express App
const app = express();

// --- MIDDLEWARE ---
// Enable CORS for all origins (prevents deployment errors)
app.use(cors({
  origin: '*', // Allow all origins for deployment
  credentials: true // Allow credentials
}));

// Parse incoming JSON data
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// --- DATABASE CONNECTION ---
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/smartcart');
    console.log('✅ MongoDB Connected Successfully to:', conn.connection.name);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    console.error('🔧 Troubleshooting tips:');
    console.error('   1. Check if MongoDB is running');
    console.error('   2. Verify MONGO_URI in your .env file');
    console.error('   3. Ensure network connectivity to MongoDB');
    process.exit(1); // Exit process with failure
  }
};

// --- HEALTH CHECK ROUTE ---
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running successfully",
    status: "healthy",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// --- API ROUTES ---
// Import and use available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/products', require('./routes/product'));
app.use('/api/products', require('./routes/productRoutes'));

// --- 404 HANDLER ---
app.use('*', (req, res) => {
  res.status(404).json({
    message: "Route not found",
    status: "error",
    path: req.originalUrl
  });
});

// --- GLOBAL ERROR HANDLER ---
app.use((err, req, res, next) => {
  console.error('🔥 Global Error Handler:', err.stack);
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      message: "Validation Error",
      status: "error",
      errors: errors
    });
  }
  
  // Mongoose duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      message: "Duplicate field value",
      status: "error",
      field: Object.keys(err.keyValue)[0]
    });
  }
  
  // JWT error
  if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      message: "Invalid token",
      status: "error"
    });
  }
  
  // Default error
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
    status: "error",
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// --- SERVER START ---
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    // Connect to database first
    await connectDB();
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`🚀 Server running successfully on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`📡 Health Check: http://localhost:${PORT}/`);
      console.log(`📚 API Documentation: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error('💥 Unhandled Promise Rejection:', err);
  process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception:', err);
  process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM received, shutting down gracefully...');
  mongoose.connection.close(() => {
    console.log('📦 MongoDB connection closed');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('🛑 SIGINT received, shutting down gracefully...');
  mongoose.connection.close(() => {
    console.log('📦 MongoDB connection closed');
    process.exit(0);
  });
});

// Start the server
startServer();

module.exports = app; // Export for testing purposes
