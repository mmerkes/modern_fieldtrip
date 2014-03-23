'use strict';

var mongoose = require('mongoose');

var Location = new mongoose.Schema({
  lat: Number,
  long: Number,
  city: String,
  state: String
});

module.exports = Location;
