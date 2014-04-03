'use strict';

var express  = require('express');
var app      = express();
var http     = require('http');
var path     = require('path');
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

require('./auth_config/passport')(passport);

// set up consolidate and handlebars templates

app.configure('dev', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.static(path.join(__dirname)));

  // required for passport
  app.use(express.session({ secret: 'ninjasdoeverythingbetter' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions
  app.use(flash()); // use connect-flash for flash messages stored in session
  app.use(app.router);
});

app.configure('dev', function() {
  console.log('In development mode');
  app.use(express.errorHandler());
  mongoose.connect( 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASS + '@' + process.env.MONGO_URL + '/' + process.env.MONGO_DB );
});

app.configure('test', function() {
  console.log('In test mode');
  mongoose.connect( 'mongodb://' + process.env.MONGOU + ':' + process.env.MONGOP + '@ds053428.mongolab.com:53428/fieldtrip' );
});

var session = require('./routes/session.js');
var trips = require('./routes/trips.js');

var currentToken;

// Core Routes
app.post('/login', function(request, response) {
  var body = request.body,
      email = body.email,
      password = body.password;

  if( email === 'jsnow@gmail.com' && password === 'password') {
    currentToken = 'abcdefghijklmnopqrstuvwxyz';
    response.send({
      success: true,
      token: currentToken
    });
  } else {
    response.send({
      success: false,
      message: 'Invalid email/password'
    });
  }
});

app.post('/signup', passport.authenticate('local-signup'));

app.get('/logout', session.logout);

// Trip routes
app.get('/api/v1/trips', trips.collection);
app.get('/api/v1/trips/:id', isLoggedIn, trips.findById);
app.post('/api/v1/trips', isLoggedIn, trips.create);
app.put('/api/v1/trips/:id', isLoggedIn, trips.update);
app.delete('/api/v1/trips/:id', isLoggedIn, trips.destroy);
app.get('/api/v1/trips/:id/:place_name/:vote', isLoggedIn, trips.vote);

var server = http.createServer(app);

server.listen(3000, function(){
  console.log('Running on port 3000');
});

// route middleware to make sure a user is logged in
function isLoggedIn(request, response, next) {

  // if user is authenticated in the session, carry on 
  if (request.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  response.redirect('/');
};


