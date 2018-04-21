const express = require('express'),
    request = require('request'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    port = process.env.port || 3000,
    DBConnection = require('./config/Connection.js'),
    QuotesModel = require('./models/QuotesModel'),
    quotesData = require('./appdata/quotes.json'),
    mongoose = require('mongoose');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
DBConnection.connect();

app.get('/getQuotes', (req, res) => {
            res.send(quotesData);    
    // QuotesModel.find({}, function (error, quotes) {
    //     if (error) {
    //         console.log(error);
    //         res.send("error retrieving db");
    //     }
    //     else {
    //         console.log('data retrieved ' + JSON.stringify(quotes));
    //         res.send(quotes);
    //     }
    // });

});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/quoteSubmit', (req, res) => {
    var requestJSON = JSON.parse(req.body.quoteData);

    var QuotesData = new QuotesModel({
        _id: new mongoose.Types.ObjectId(),
        username: requestJSON.username,
        quoteText: requestJSON.quoteText,
        categories: requestJSON.categories
    });
    QuotesData.save(function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('data saved successfully');
        }
    });
    res.json("Data submitted by " + requestJSON.username);
});

app.get('/admin', (req, res) => {
    res.render('admin', {});
});

app.listen(3000, () => {
    console.log('listening on 3000');
})