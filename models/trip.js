'use strict';

var User = require('./user');
var Place = require('./place');
var Location = require('./location');
var mongoose = require('mongoose');

var Trip = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
  users: [ String ],
  places: [ Place ],
  location: [ Location ]
});

module.exports = mongoose.model('Trip', Trip);

/*
{
  _id: "My-San-Fran-trip",
  name: "My San Fran trip",
  users: [ "mmerkes", "kelw" ],
  places: [
    {
      name: "Pizza place",
      votes: { mmerkes: true, kelw: true },
      address: "3201 4th Ave",
      location: {
        lat: -37.47,
        long: 122.25,
        city: "San Francisco",
        state: "CA"
      }
    }
  ],
  location: {
    lat: -37.47,
    long: 122.25,
    city: "San Francisco",
    state: "CA"
  }
},
{
  _id: "My-NYC-trip",
  name: "My NYC trip",
  users: [ "mmerkes", "kelw" ],
  places: [
    {
      name: "Party place",
      votes: { mmerkes: true, kelw: true },
      address: "3201 4th Ave",
      location: {
        lat: -40.48,
        long: 74,
        city: "New York",
        state: "NY"
      }
    }
  ],
  location: {
    lat: -40.48,
    long: 74,
    city: "New York City",
    state: "NY"
  }
},
{
  "_id" : "My-Seattle-trip",
  "name" : "My Seattle trip",
  "location" : [ ],
  "places" : [
    {
      "name" : "Pizza place",
      "address" : "3201 4th Ave",
      "_id" : ObjectId("532e751e2178be73eb8d284f"),
      "location" : [ ]
    }
  ],
  "users" : [
    "mmerkes",
    "kelw"
  ],
  "__v" : 0
}

jQuery.ajax({ method: 'PUT', url: 'api/v1/trips/My-NYC-trip', data: {
  _id: "My-NYC-trip",
  name: "My NYC trip",
  users: [ "mmerkes", "kelw" ],
  places: [
    {
      name: "Party place",
      votes: { mmerkes: true, kelw: true },
      address: "3201 4th Ave",
      location: {
        lat: -40.48,
        long: 74,
        city: "New York",
        state: "NY"
      }
    }
  ],
  location: {
    lat: -40.48,
    long: 74,
    city: "New York City",
    state: "NY"
  }
}});
*/
