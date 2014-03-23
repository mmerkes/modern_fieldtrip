App.TripView = Ember.View.extend({
  classNames: ['place'],

  attributeBindings: ['data-name'],

  didInsertElement: function() {
    var self = this;
    var location = this.get('controller.location').objectAt(0);
    
    var mapCenter = [ location.lat, location.long];

    var map = L.map('map').setView( mapCenter, 12);

    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(map);

    $('.place').delegate('button', 'click', function() {
      var name = $(this).attr('data-name');
      var vote = $(this).attr('data-value');
      var time = Date.parse(new Date());

      $.get('api/v1/trips/' + self.get('controller._id') + '/' +
        name + '/' + vote, { date: time });
    });
    /*
    var locations = ...

    locations.forEach( function( location ) {
      L.marker(location).addTo(map);
    });
    */
  }
});
