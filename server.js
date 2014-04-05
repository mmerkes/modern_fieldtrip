'use strict';

var express  = require('express');
var app      = express();
var http     = require('http');
var path     = require('path');
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');
var bcrypt = require('bcrypt');

// set up consolidate and handlebars templates

app.configure('dev', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});

app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.json());
  app.use(express.cookieParser('everybodylovesaparty'));
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname)));
  // session secret TODO move to node-foreman's .env / process.env

  app.use(express.session({ secret: 'everybodylovesaparty' })); // session secret
  app.use(passport.initialize());
  app.use(passport.session()); // persistent login sessions

  app.use(app.router);

  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, { message: 'Internal Server Error'});
  });
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

// Core Routes
//app.post('/login', session.login);
//app.post('/signup', session.signup);
// process the signup form

var User = require('./models/user.js');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function(email, password, done) {
  User.findOne({ email: email }, function(err, user) {
    if (err) return done(err);
    if (!user) return done(null, false);
    user.comparePassword(password, function(err, isMatch) {
      if (err) return done(err);
      if (isMatch) return done(null, user);
      return done(null, false);
    });
  });
}));

app.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) return next(err);
    if (user) res.send({ access_token: user.token });
    else res.send(404, 'Incorrect email or password.');
  })(req, res, next);
});

app.post('/signup', function(req, res, next) {
  if (!req.body.email) {
    return res.send(400, 'Email cannot be blank.');
  }

  if (!req.body.password) {
    return res.send(400, 'Password cannot be blank.');
  }

  var user = new User({
    email: req.body.email,
    password: req.body.password,
    first_name: req.body.first_name,
    last_name: req.body.last_name
  });

  user.save(function(err) {
    if (err) return res.send(500, err.message);
    res.send(200);
  });
});

// Trip routes
app.get('/api/v1/trips', isLoggedIn, trips.collection);
app.get('/api/v1/trips/:id', trips.findById);
app.post('/api/v1/trips', trips.create);
app.put('/api/v1/trips/:id', trips.update);
app.delete('/api/v1/trips/:id', trips.destroy);
app.get('/api/v1/trips/:id/:place_name/:vote', trips.vote);

function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on 
  if (req.isAuthenticated())
    return next();
  console.log('Not passing...');
  // if they aren't redirect them to the home page
  res.send('Not logged in');
}

var server = http.createServer(app);

server.listen(3000, function(){
  console.log('Running on port 3000');
});
