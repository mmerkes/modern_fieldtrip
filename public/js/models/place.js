var attr = DS.attr;

App.Place = DS.Model.extend({
  name: attr(),
  votes: attr(),
  address: attr(),
  location: DS.belongsTo('location'),
  trip: DS.belongsTo('trip')
});
