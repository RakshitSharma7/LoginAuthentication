
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Protected route accessible only to authenticated users
router.get('/user-profile', authMiddleware, (req, res) => {
  // Access user information via req.user
  res.json({ message: 'User profile accessed.', user: req.user });
});

// Protected route accessible only to admin users
router.get('/admin-dashboard', authMiddleware, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied.' });
  }
  res.json({ message: 'Admin dashboard accessed.' });
});

module.exports = router;
