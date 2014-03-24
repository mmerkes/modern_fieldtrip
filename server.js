'use strict';

var express  = require('express');
var app      = express();
var http     = require('http');
var path     = require('path');
var port     = process.env.PORT || 3000;
var mongoose = require('mongoose');

// set up consolidate and handlebars templates

app.configure('development', function() {
  app.use(express.logger('dev'));
  app.use(express.errorHandler());
});


app.configure(function() {
  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.static(path.join(__dirname)));
  // session secret TODO move to node-foreman's .env / process.env
  app.use(app.router);
});


app.configure('development', function() {
  console.log('In development mode');
  app.use(express.errorHandler());
  mongoose.connect( 'mongodb://' + process.env.MONGOU + ':' + process.env.MONGOP + '@ds053428.mongolab.com:53428/noobjs_posts' );
});

app.configure('test', function() {
  console.log('In test mode');
  mongoose.connect( 'mongodb://' + process.env.MONGOU + ':' + process.env.MONGOP + '@ds053428.mongolab.com:53428/fieldtrip' );
});

 var trips = require('./routes/trips.js');

// Trip routes
app.get('/api/v1/trips', trips.collection);
app.get('/api/v1/trips/:id', trips.findById);
app.post('/api/v1/trips', trips.create);
app.put('/api/v1/trips/:id', trips.update);
app.delete('/api/v1/trips/:id', trips.destroy);
app.get('/api/v1/trips/:id/:place_name/:vote', trips.vote);

var server = http.createServer(app);

server.listen(3000, function(){
  console.log('Running on port 3000');
});
