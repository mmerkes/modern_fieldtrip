App.LeafletMapComponent = Ember.Component.extend({
  didInsertElement: function() {
    var location = this.get('location')[0];
    var places = this.get('places');
    
    var mapCenter = [ location.lat, location.long ];

    var markers = places.map( function(place) {
      var loc = place.location[0];
      return {
        location: [ loc.lat, loc.long ], 
        options: {
          clickable: true,
          title: place.name,
          alt: place.name,
          riseOnHover: true
        }
      };
    });

    var map = L.map('map').setView( mapCenter, 12);

    L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      maxZoom: 18
    }).addTo(map);

    markers.forEach( function( marker ) {
      var mark = L.marker(marker.location, marker.options).addTo(map);
      mark.bindPopup(marker.options.title).on('click', function(e) {
        var id = e.target.options.title;
        $('[data-id="' + id + '"]').toggle();
      });
    });
  }
});
