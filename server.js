const express = require('express'),
    request = require('request'),
    app = express(), 
    path = require('path'),
    port = process.env.port || 3000,
    quotesData = require('./appdata/quotes.json');

app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{quotes:quotesData.quotes});
});

app.listen(3000, () => {
    console.log('listening on 3000');
})