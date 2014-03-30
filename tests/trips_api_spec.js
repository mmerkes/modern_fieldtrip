'use strict';

var superagent = require('superagent'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    app = require('../server').app,
    mongoose = require('mongoose'),
    Trip = require('../models/trip');


describe('Sessions JSON api', function() {
  var id;

  it('can signup a new user', function(done) {
    superagent.post('http://localhost:3000/signup')
      .send(sampleUser)
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body._id).to.not.eql(null);
        expect(response.body.first_name).to.be.eql('Jon');
        expect(response.body.last_name).to.be.eql('Snow');
        sampleUser.id = response.body._id;

        done();
    });
  });

  it('can login an existing user', function(done) {
    superagent.post('http://localhost:3000/login')
      .send({
        email: sampleUser.email,
        password: sampleUser.password
      })
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body._id).to.eql(sampleUser.id);
        expect(response.body.first_name).to.equal(sampleUser.first_name);

        done();
    });
  });

  after( function(done) {
    Trip.remove({ _id: trip._id }, function() {
      done();
    });
  });
});
