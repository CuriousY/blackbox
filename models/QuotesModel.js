const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var QuotesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username : mongoose.Schema.Types.String,
    quoteText : mongoose.Schema.Types.String,
    categories : []

});

var QuotesModel = mongoose.model('QuoteModel',QuotesSchema);
module.exports = QuotesModel;