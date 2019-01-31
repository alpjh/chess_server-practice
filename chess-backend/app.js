// chess-backend/app.js

var gameRouter = require('./routes/games');//for game
var authRouter = require('./routes/auth');//for auth
var express = require('express');
var logger = require('morgan');
var cors = require('cors');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/auth', authRouter);//for auth
app.use('/games', gameRouter);//for game
module.exports = app;