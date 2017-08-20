'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

mongoose.connect('mongodb://edgar:edgar@ds145010.mlab.com:45010/sampleapi');

const indexroute = require('../routes/index-route');
const productsroute = require('../routes/products-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexroute);
app.use('/products', productsroute);

module.exports = app;