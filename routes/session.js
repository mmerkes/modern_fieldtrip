var User = require('../models/user');

exports.login = function(request, response) {
  response.setHeader("Content-Type", "application/json");
  
  User.findOne({ email: request.body.email }, function(error, user) {
    if( error || user.password !== request.body.password ) {
      response.send(500, {'error': error});
    } else {
      user.password = '[FILTERED]';
      response.send(user);
    }
  });
};

exports.signup = function(request, response) {
  response.setHeader("Content-Type", "application/json");

  var user = new User(request.body);

  user.save( function( error, user ) {
    if( error ) {
      response.send(500, {'error': error});
    } else {
      user.password = '[FILTERED]';
      response.send(user);
    }
  });
};

exports.logout = function(request, response) {
  request.logout();
  response.redirect('/');
};

