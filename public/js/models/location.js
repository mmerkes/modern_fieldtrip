attr = DS.attr;

App.Location = DS.Model.extend({
  lat: attr(),
  long: attr(),
  city: attr(),
  state: attr(),
  place: DS.belongsTo('place'),
  trip: DS.belongsTo('trip')
});
