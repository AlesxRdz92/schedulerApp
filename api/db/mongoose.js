const mongoose = require('mongoose');
//const url = process.env.MONGODB_URI;
const url = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Schedule';
mongoose.Promise = global.Promise;
mongoose.connect(url, {useNewUrlParser: true});

module.exports = {
    mongoose
};