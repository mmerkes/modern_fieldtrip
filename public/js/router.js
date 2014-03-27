App.Router.map(function() {
  this.resource('trips', function() {
    this.resource('trip', {path: '/:id'}, function() {
      this.route('edit');
    });
  });
  this.route('login');
  this.route('signup');
});
