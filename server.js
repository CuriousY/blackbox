const express = require('express'),
    request = require('request'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser'),
    port = process.env.port || 3000,
    DBConnection = require('./config/Connection.js'),
    QuotesModel = require('./models/QuotesModel'),
    mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
DBConnection.connect();

app.get('/getQuotes', (req, res) => {  
    QuotesModel.find({}, function (error, quotes) {
        if (error) {
            console.log(error);
            res.send("error retrieving db");
        }
        else {
            res.send(quotes);
        }
    });

});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + '/admin.html');
});

app.post('/quoteSubmit', (req, res) => {
    var quoteJSON = req.body.quote;
    if (quoteJSON) {
        var QuotesData = new QuotesModel({
            _id: new mongoose.Types.ObjectId(),
            author: quoteJSON.author,
            quoteText: quoteJSON.quoteText,
            categories: quoteJSON.categories,
            imagePath:"images/marion-michele-330691.jpg",
            likes:23
        });
        QuotesData.save(function (err) {
            if (err) {
                throw err;
            }
            else {
                console.debug('data saved in DB');
            }
        });
        res.status(200).json('Data submitted');
    }
    else {
        res.status(500).send('Something broke!');
    }


});

app.get('/admin', (req, res) => {
    res.render('admin', {});
});

app.listen(3000, () => {
    console.log('listening on 3000');
})