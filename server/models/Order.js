const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
  total: { type: Number, required: true },
  items: [
    {
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Order', orderSchema);
