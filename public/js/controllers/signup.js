App.SignupController = Ember.Controller.extend({
  actions: {
    signup: function() {
      $.ajax({
        type: 'POST',
        url: '/signup',
        context: this,
        data: this.getProperties('first_name', 'last_name', 'email', 'password')
      }).done(function() {
        this.transitionToRoute('trips');
      }).fail(function(xhr) {
        this.set('errorMessage', xhr.responseText);
      });
    }
  }
});
