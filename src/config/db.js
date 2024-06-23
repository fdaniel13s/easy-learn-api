const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const mongoURL = process.env.MONGO_URL || 'mongodb://localhost:27019/easylearnDb';

        await mongoose.connect(mongoURL);

        console.log('MongoDB connection SUCCESS');
    } catch (error) {
        console.error('MongoDB connection FAIL');
        process.exit(1);
    }
};

module.exports = connectDB;