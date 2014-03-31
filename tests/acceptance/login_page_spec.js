'use strict';
/*global casper*/

casper.test.begin('session', 2, function suite(test) {
  var sampleUser = {
    '.form-group #email': "Jsnow@gmail.com",
    '.form-group #password': "password",
  };

  casper.start('http://localhost:3000/#/login', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    this.fillSelectors('form', sampleUser);
    this.click('button');
  });

  casper.waitForUrl(/trips$/, function(){
    test.assertTextExists('Amy Jones','page body contains profile');
  });

  casper.run(function(){
    test.done();
  });
});
