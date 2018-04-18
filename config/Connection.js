const mongoose = require('mongoose');
const mongodbURL = 'mongodb://127.0.0.1/quotes1';

var connect = function () {
    mongoose.connect(mongodbURL, (err, db) => {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            console.log('Connection established to', mongodbURL);
        }
    });
}

module.exports = {
    connect: connect
};



