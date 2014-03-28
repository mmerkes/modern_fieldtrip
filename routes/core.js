exports.login = function(request, response) {
  response.setHeader("Content-Type", "text/json");
  console.log(request.body);
  response.send({ message: 'Success' });
};

exports.signup = function(request, response) {
  response.setHeader("Content-Type", "text/json");
  console.log(request.body);
  response.send({ message: 'Success' });
};
