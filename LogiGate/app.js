var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Require route paths
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouter = require('./routes/dashboard');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views')); //set the views directory
app.set('view engine', 'hbs'); //set the view engine

//Tell node to use this links as paths
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dashboard', dashboardRouter);

module.exports = app;
