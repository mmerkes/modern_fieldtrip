'use strict';

/*global casper*/

casper.test.begin('session', 5, function suite(test) {

  casper.start('http://localhost:3000/#/trips', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function() {
    test.assertExists('img.logo-dash','Logo image found');
  });

  casper.then(function() {
    test.assertExists('div.user-img','User image found');
  });

  casper.then(function() {
    test.assertExists('div.trip-container','Atleast one trip showing');
  });

  casper.then(function() {
    test.assertExists('button.add-button','Add button exists');
    this.mouse.move('div.trip-container');
  });

  casper.run(function(){
    test.done();
  });
});
