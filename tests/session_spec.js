'use strict';

var superagent = require('superagent'),
    chai = require('chai'),
    expect = chai.expect,
    should = chai.should(),
    app = require('../server').app,
    mongoose = require('mongoose'),
    User = require('../models/user');

var sampleUser = {
  first_name: "Jon",
  last_name: "Snow",
  email: "Jsnow@gmail.com",
  password: "password"
};

describe('Sessions JSON api', function() {
  after( function(done) {
    User.remove({}, function() {
      done();
    });
  });

  it('can signup a new user', function(done) {
    superagent.post('http://localhost:3000/signup')
      .send(sampleUser)
      .end(function(error, response) {
        expect(error).to.eql(null);
        expect(response.body._id).to.not.eql(null);
        expect(response.body.first_name).to.be.eql('Jon');
        expect(response.body.last_name).to.be.eql('Snow');
        sampleUser._id = response.body._id;

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
        expect(response.body._id).to.eql(sampleUser._id);
        expect(response.body.first_name).to.equal(sampleUser.first_name);

        done();
    });
  });
});
