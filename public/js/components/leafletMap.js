App.LeafletMapComponent = Ember.Component.extend({
  didInsertElement: function() {
    var location = this.location;
    var places = this.places;
    
    var mapCenter = [ location.lat, location.long ];

    var markers = places.map( function(place) {
      var loc = place.location;
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

    console.log("Markers " + markers);

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
  },

  redrawMap: function() {
    this.rerender();
  }.observes('controller.location')
});
