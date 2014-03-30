'use strict';

var mongoose = require('mongoose');

var User = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', User);
