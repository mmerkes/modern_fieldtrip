App.TripView = Ember.View.extend({
  classNames: ['place'],

  attributeBindings: ['data-name'],

  didInsertElement: function() {
    var self = this;

    $('.place').delegate('button', 'click', function() {
      var name = $(this).attr('data-name');
      var vote = $(this).attr('data-value');
      var time = Date.parse(new Date());

      $.get('api/v1/trips/' + self.get('controller._id') + '/' +
        name + '/' + vote, { date: time });
    });
  }
});
