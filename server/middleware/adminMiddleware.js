const User = require('../models/User');

const admin = async (req, res, next) => {
  try {
    // The user is already logged in (req.user exists from auth middleware)
    // We just need to check their role in the database
    const user = await User.findById(req.user.id);
    
    if (user && user.role === 'admin') {
      next(); // You are admin, proceed!
    } else {
      res.status(403).json({ message: 'Access denied. Admins only.' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = admin;