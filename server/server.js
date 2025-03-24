// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Ensure correct path
const addressRoutes = require('./routes/addressRoutes'); // Ensure correct path
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api/users', userRoutes.router); // Use the router property from userRoutes
app.use('/api/addresses', addressRoutes); // Directly use addressRoutes

// Start Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
