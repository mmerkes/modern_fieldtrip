'use strict';

var mongoose = require('mongoose');
var Location = require('./location');
var Schema = mongoose.Schema;

var Place = new mongoose.Schema({
  name: String,
  url: String,
  votes: Number,
  address: String,
  location: {
    lat: Number,
    long: Number,
    city: String,
    state: String
  }
});

module.exports = Place;
