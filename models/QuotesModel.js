const mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var QuotesSchema = new Schema({
    _id: ObjectId,
    author : Schema.Types.String,
    quoteText : Schema.Types.String,
    imagePath:Schema.Types.String,
    likes : Schema.Types.Number,
    categories : []

});

var QuotesModel = mongoose.model('QuoteModel',QuotesSchema);
module.exports = QuotesModel;