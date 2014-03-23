var attr = DS.attr;

/*
App.Trip = DS.Model.extend({
  name: attr(),
  users: attr(),
  places: DS.hasMany('place'),
  location: DS.belongsTo('location')
}); */

App.Trip = DS.Model.extend({
  name: attr(),
  users: attr(),
  places: attr(),
  location: attr()
});
