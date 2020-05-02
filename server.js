const express = require('express');

var app = express();

app.get('/', function (req, res) {
    res.send('api running')
});

app.listen(5000, function (res, error) {
    console.log('app is running and  listing')
});