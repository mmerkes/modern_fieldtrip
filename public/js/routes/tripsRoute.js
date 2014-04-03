App.TripsRoute = App.AuthenticatedRoute.extend({
  model: function() {
    return Ember.$.getJSON('api/v1/trips', {token: this.getToken()}).then( function(data) {
      data = data.map( function( item ) {
        item.id = item._id;
        return Em.Object.create(item);
      });

      return Ember.A(data);
    });
  }
});

/*
{
  _id: 'My-San-Fran-trip',
  name: "My San Fran trip",
  users: [ "mmerkes", "kelw" ],
  places: [
    {
      name: "Pizza place",
      votes: 3,
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
    lat: 37.47,
    long: 122.25,
    city: "San Francisco",
    state: "CA"
  }
},
{
  _id: 'My-NYC-trip',
  name: "My NYC trip",
  users: [ "mmerkes", "kelw" ],
  places: [
    {
      name: "Pizza place",
      votes: 1,
      address: "3201 4th Ave",
      location: {
        lat: -40.48,
        long: 74,
        city: "San Francisco",
        state: "CA"
      }
    }
  ],
  location: {
    lat: -40.48,
    long: 74,
    city: "New York City",
    state: "NY"
  }
}
*/
/*
{
  _id: "My-Seattle-trip",
  name: "My Seattle trip",
  users: [ "mmerkes", "kelw" ],
  places: [
    {
      name: "Pizza place",
      votes: 2,
      address: "3201 4th Ave",
      location: {
        lat: -47.36,
        long: 122.19,
        city: "Seattle",
        state: "WA"
      }
    }
  ],
  location: {
    lat: -47.36,
    long: 122.19,
    city: "Seattle",
    state: "WA"
  }
}
*/



