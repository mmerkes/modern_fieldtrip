'use strict';

var mongoose = require('mongoose');
var Location = require('./location');

var Place = new mongoose.Schema({
  name: String,
  url: String,
  votes: Number,
  address: String,
  location: [ Location ]
});

module.exports = Place;
