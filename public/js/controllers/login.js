App.LoginController = Ember.ObjectController.extend({
  actions: {
    login: function() {
      var self = this;
      var username = this.get('email');
      var password = this.get('password');
      
      $.post('login', { username: username, password: password }, function() {
        self.transitionToRoute('trips');
      }).fail( function() {
        alert('Invalid login');
      });
    }
  }
});
