const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    originalUrl:{type:String},
    shortUrl:{type:String}
});

module.exports = mongoose.model('url', urlSchema);