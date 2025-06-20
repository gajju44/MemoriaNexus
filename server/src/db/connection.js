const mongoose = require('mongoose');
const {DB_URL} = require("../../constants");

const ConnectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Database connection failed', error);
    }
};

module.exports = {
    ConnectDB
};