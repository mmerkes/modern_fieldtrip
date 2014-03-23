'use strict';

var mongoose = require('mongoose');

var User = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
});

module.exports = mongoose.model('User', User);
