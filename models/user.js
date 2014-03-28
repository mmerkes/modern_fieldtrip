'use strict';

var mongoose = require('mongoose');

var User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

module.exports = mongoose.model('User', User);
