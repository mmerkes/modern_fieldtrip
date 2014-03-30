var User = require('../models/user');

exports.login = function(request, response) {
  response.setHeader("Content-Type", "application/json");
  
  User.findOne({ email: request.body.email }, function(error, user) {
    if( error || user.password !== request.body.password ) {
      errorResponse(error);
    } else {
      response.send(user);
    }
  });
};

exports.signup = function(request, response) {
  response.setHeader("Content-Type", "application/json");

  var user = new User(request.body);

  user.save( function( error, user ) {
    if( error ) {
      errorResponse(error);
    } else {
      response.send(user);
    }
  });
};

function errorResponse() {
  response.writeHead(500);
  response.send({'error': error});
};
