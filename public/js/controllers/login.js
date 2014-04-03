App.LoginController = Ember.Controller.extend({
  reset: function() {
    this.setProperties({
      username: "",
      password: "",
      errorMessage: ""
    });
  },

  token: localStorage.token,

  tokenChanged: function() {
    localStorage.token = this.get('token');
  }.observes('token'),

  actions: {
    login: function() {
      var self = this;
      var data = this.getProperties('email', 'password');
      
      self.set('errorMessage', null);

      Ember.$.post('/login', data).then(function(response) {
        self.set('errorMessage', response.message);

        if(response.success) {
          self.set('token', response.token);

          var attemptedTransition = self.get('attemptedTransition');
          if (attemptedTransition) {
            attemptedTransition.retry();
            self.set('attemptedTransition', null);
          } else {
            // Redirect to 'articles' by default.
            self.transitionToRoute('index');
          }
        }
      });
    }
  }
});

// How to check for a cookie on login
// How to handle a failed login besides getting rejected
