App.TripsView = Ember.View.extend({
  didInsertElement: function() {
    $("#dashboard, .map-extend, .map").height($(document).height());
    $(window).resize(function(){
        $("#dashboard, .map-extend, .map").height($(document).height());
    });
  }
});
