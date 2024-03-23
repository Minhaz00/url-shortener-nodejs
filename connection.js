const mongoose = require('mongoose');

const connectToMongoDb = async (dbUrl) => {
    return mongoose.connect(dbUrl);
}

module.exports = {
    connectToMongoDb
};