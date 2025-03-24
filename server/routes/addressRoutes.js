// server/routes/addressRoutes.js
const express = require('express');
const router = express.Router();
const Address = require('../models/Address');
const { protect } = require('./userRoutes');

// Add new address
router.post('/add', protect, async (req, res) => {
    const { 
        fullName, 
        phone, 
        addressLine1,
        addressLine2, // Added addressLine2
        city, 
        state, 
        zipCode, 
        country 
    } = req.body;

    try {
        console.log("Incoming data:", req.body);
        const newAddress = new Address({
            userId: req.user._id,
            fullName,
            phone,
            addressLine1,
            addressLine2, // Added addressLine2
            city,
            state,
            zipCode,
            country,
        });
        await newAddress.save();
        res.status(201).json({ message: 'Address added successfully!', address: newAddress });
    } catch (error) {
        console.error("Error adding address:", error);
        res.status(500).json({ message: 'Failed to add address', error: error.message });
    }
});

// Update existing address
router.put('/edit/:id', protect, async (req, res) => {
    const { id } = req.params;
    const { 
        fullName, 
        phone, 
        addressLine1, 
        addressLine2, // Added addressLine2
        city, 
        state, 
        zipCode, 
        country 
    } = req.body;

    try {
        const updatedAddress = await Address.findOneAndUpdate(
            { _id: id, userId: req.user._id }, // Fixed syntax (_id instead of *id)
            { 
                fullName, 
                phone, 
                addressLine1, 
                addressLine2, // Added addressLine2
                city, 
                state, 
                zipCode, 
                country 
            },
            { new: true }
        );

        if (!updatedAddress) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.status(200).json({ message: 'Address updated successfully', address: updatedAddress });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update address', error });
    }
});

// Fetch all addresses for a user
router.get('/', protect, async (req, res) => {
    try {
        const addresses = await Address.find({ userId: req.user._id });
        res.status(200).json({ addresses });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch addresses', error });
    }
});

// Delete an address
router.delete('/delete/:id', protect, async (req, res) => {
    const { id } = req.params;
    try {
        const deletedAddress = await Address.findOneAndDelete({ _id: id, userId: req.user._id }); // Fixed syntax
        if (!deletedAddress) {
            return res.status(404).json({ message: 'Address not found' });
        }
        res.status(200).json({ message: 'Address deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete address', error });
    }
});

module.exports = router;