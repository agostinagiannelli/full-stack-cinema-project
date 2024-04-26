require('dotenv').config();
const mongoose = require('mongoose');

const { DB_HOST, DB_USER, DB_PASSWORD, DB_CLUSTER, DB } = process.env;
const URI = `${DB_HOST}+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.jopjgdw.mongodb.net/${DB}?retryWrites=true&w=majority`;

const dbConnect = async () => {
    try {
        await mongoose.connect(URI);
    } catch (error) {
        console.log(`Server Connection Error: ${error.message}`);
    }
};

module.exports = dbConnect;