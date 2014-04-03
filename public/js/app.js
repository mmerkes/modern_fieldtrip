window.App = Ember.Application.create();

App.AuthenticatedRoute = Ember.Route.extend({
  beforeModel: function(transition) {
    if( !this.controllerFor('login').get('token')) {
      this.redirectToLogin(transition);
    }
  },

  redirectToLogin: function(transition) {
    alert('You must be logged in!');

    var loginController = this.controllerFor('login');
    loginController.set('attemptedTransition', transition);
    this.transitionTo('login');
  },

  getToken: function() {
    return this.controllerFor('login').get('token')
  },

  events: {
    error: function(reason, transition) {
      if( reason.status === 401 ) {
        this.redirectToLogin(transition);
      } else {
        alert('Oops... Something went wrong!');
      }
    }
  }
});
