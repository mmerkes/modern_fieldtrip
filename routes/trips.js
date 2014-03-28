var Trip = require('../models/trip.js');

exports.collection = function(request, response) {
  response.setHeader("Content-Type", "text/json");

  Trip.find({}, function(error, trips) {
    if(error) {
      errorResponse(error);
    }
    response.send( trips );
  });
};

exports.create = function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  var trip = new Trip(request.body);
  var re = / /g;
  trip._id = trip.name.replace(re, '-');

  trip.save(function(error, trip) {
    if(error) {
      errorResponse(error);
    } else {
      response.send(trip);
    }
  });
};

exports.findById = function(request, response) {
  response.setHeader('Content-Type', 'application/json');

  Trip.findOne({ _id: request.params.id}, function(error, trip) {
    if(error) {
      errorResponse(error);
    } else {
      response.send(trip);
    }
  });
};

exports.update = function(request, response) {
  delete request.body._id;

  Trip.update({_id: request.params.id}, request.body, function(error) {
    if(error) {
      errorResponse(error);
    } else {
      response.send({'message': "Success"});
    }
  });
};

exports.destroy = function(request, response) {
  Trip.remove({_id: request.params.id}, function(error) {
    if(error) {
      errorResponse(error);
    } else {
      response.send({'message': 'Success'});
    }
  });
}

exports.vote = function(request, response) {
  console.log('voting');
  Trip.findById( request.params.id, function(err, doc) {
    doc.places.forEach(function(place, index) {
      console.log( place.name + request.params.place_name );
      if( place.name === request.params.place_name ) {
        if( request.params.vote === 'up' ) {
          doc.places[index].votes++;
        } else {
          doc.places[index].votes--;
        }
      }
    });

    doc.save( function(error) {
      if(error) {
        errorResponse(error);
      } else {
        response.send({'message': 'Success'});
      }
    });
  });
}

function errorResponse(error) {
  response.writeHead(500);
  response.send({'error': error});
};

