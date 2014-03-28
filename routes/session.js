var User = require('../models/user');

exports.login = function(request, response) {
  response.setHeader("Content-Type", "text/json");
  
  User.findOne({ email: request.body.email }, function(error, user) {
    if( error || user.password !== request.body.password ) {
      errorResponse(error);
    } else {
      delete user.password;
      response.send(user);
    }
  });
};

exports.signup = function(request, response) {
  response.setHeader("Content-Type", "text/json");
  var data = request.body;
  
  var user = new User({
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: data.password
  });

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
