"use strict";

var path = require('path');

var express = require('express');

var morgan = require('morgan');

var handlebars = require('express-handlebars');

var app = express();
var port = 3000;
app.use(express["static"](path.join(__dirname, 'public'))); // HTTP logger

app.use(morgan('combined')); //Template engine

app.engine('hbs', handlebars({
  extname: '.hbs' //config end name file

}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views')); // console.log('PATH: ' + path.join(__dirname, 'resources\\views'));

app.get('/', function (req, res) {
  res.render('home');
});
app.get('/news', function (req, res) {
  res.render('news');
});
app.get('/search', function (req, res) {
  res.render('search');
});
app.post('/search', function (req, res) {
  res.render('search');
}); // 127.0.0.1 - localhost

app.listen(port, function () {
  console.log("Example app listening at http://localhost::".concat(port));
});