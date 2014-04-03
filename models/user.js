'use strict';

var mongoose = require('mongoose'),
    bcrypt   = require('bcrypt-nodejs');

var User = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  twitter: {
      id: String,
      token: String,
      displayName: String,
      username: String
  },
  google: {
      id: String,
      token: String,
      email: String,
      name: String
  }
});

// generating a hash
User.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', User);
