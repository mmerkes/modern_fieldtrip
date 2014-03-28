App.PlaceCardComponent = Ember.Component.extend({
  classNames: ['card-list'],

  attributeBindings:["data-id"],

  'data-id': Ember.computed.oneWay("place.name")
});
