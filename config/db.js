const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this line is at the top to load environment variables

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }
        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

module.exports = connectDB;
