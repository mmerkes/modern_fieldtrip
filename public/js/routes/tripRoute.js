App.TripRoute = Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('api/v1/trips/' + params.id);
  }
});
