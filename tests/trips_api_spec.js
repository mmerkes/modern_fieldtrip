'use strict';

var superagent = require('superagent'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    app = require('../server').app;


describe('Sessions JSON api', function() {
  var sampleTrip = {
    name: "My San Fran trip",
    places: [
      {
        name: "Pizza place",
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
  };

  it('can create a new trip', function(done) {
    superagent.post('http://localhost:3000/api/v1/trips')
      .send(sampleTrip)
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body._id).to.not.eql(null);
        expect(response.body.name).to.be.eql(sampleTrip.name);
        expect(response.body.places.length).to.be.eql(sampleTrip.places.length);
        expect(response.body._id).to.be.eql('My-San-Fran-trip')
        sampleTrip._id = response.body._id;

        done();
    });
  });

  it('can get trips collection', function(done){
    superagent.get('http://localhost:3000/api/v1/trips')
      .end(function(error, response){
        expect(error).to.eql(null);
        expect(response.body.length).to.be.above(0);

        done();
    });
  });

  it('can get a single trip', function(done) {
    superagent.get('http://localhost:3000/api/v1/trips/' + sampleTrip._id)
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body._id).to.eql(sampleTrip._id);
        expect(response.body.name).to.eql(sampleTrip.name);
        expect(response.body.places.length).to.eql(sampleTrip.places.length);

        done();
      });
  });

  it('can update a trip', function(done) {
    sampleTrip.places.push({
        name: "Seafood place",
        address: "1100 8th Ave",
        location: {
          lat: -37.67,
          long: 122.15,
          city: "San Francisco",
          state: "CA"
        }
    });

    superagent.put('http://localhost:3000/api/v1/trips/' + sampleTrip._id)
      .send(sampleTrip)
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body.message).to.eql('Success');

        done();
    });
  });

  it('can remove a trip', function(done) {
    superagent.del('http://localhost:3000/api/v1/trips/' + sampleTrip._id)
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body.message).to.eql('Success');

        done();
    });
  });
});
