const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);  // No need for options now
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Exit with failure
    }
};

module.exports = connectDB;
