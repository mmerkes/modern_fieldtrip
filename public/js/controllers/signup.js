App.SignupController = Ember.ObjectController.extend({
  actions: {
    signup: function() {
      var password = this.get('password'),
          self = this;
      if( password !== this.get('password2')) {
        alert('The passwords must match');
      } else {
        var data = {
          first_name: this.get('first_name'),
          last_name: this.get('last_name'),
          email: this.get('email'),
          password: password
        };

        $.post('signup', data, function() {
          self.transitionToRoute('trips');
        }).fail( function() {
          alert('Signup unsuccessful!');
        });
      }
    }
  }
});
