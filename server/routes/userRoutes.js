// server/routes/userRoutes.js
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // For password hashing
const User = require('../models/User');
const Order = require('../models/Order');
const router = express.Router();

const secret = process.env.JWT_SECRET;

// Middleware for authenticating the JWT token
const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Not authorized, token missing' });
  }

  try {
    const decoded = jwt.verify(token, secret);
    if (decoded.exp * 1000 < Date.now()) {
      return res.status(401).json({ error: 'Token expired' });
    }
    req.user = await User.findById(decoded.id).select('-password');
    if (!req.user) {
      return res.status(404).json({ error: 'User not found' });
    }
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ error: 'Not authorized, token failed' });
  }
};

// Registration Route
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Check if the email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already in use.' });
    }

    // Create a new user without hashing the password
    const newUser = new User({ firstName, lastName, email, phone, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('Registration Error:', error.message);
    res.status(400).json({ error: 'Registration failed. Please check the input fields and try again.' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  if (user.password !== password) {
    console.log('Password match result: false');
    return res.status(400).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, secret, { expiresIn: '2h' });
  res.status(200).json({ message: 'Login successful', token });
});

// Account Route
router.get('/account', protect, async (req, res) => {
  try {
    const user = req.user;
    const orders = await Order.find({ user: user._id });
    res.status(200).json({ user, orders });
  } catch (error) {
    console.error('Error fetching account data:', error.message);
    res.status(500).json({ error: 'Failed to fetch account data' });
  }
});

// Order Route
router.get('/orders/:orderId', protect, async (req, res) => {
  try {
    const order = await Order.findOne({ _id: req.params.orderId, user: req.user._id });
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.status(200).json({ order });
  } catch (error) {
    console.error('Error fetching order:', error.message);
    res.status(500).json({ error: 'Failed to fetch order data' });
  }
});

module.exports = { router, protect };
