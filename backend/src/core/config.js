const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Fallback for local testing if no env is provided yet
        const mongoURI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/memproject';
        await mongoose.connect(mongoURI);
        console.log(' MongoDB Connected successfully');
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
