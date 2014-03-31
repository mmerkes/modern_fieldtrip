'use strict';
/*global casper*/

casper.test.begin('index page', 3, function suite(test) {

  casper.start('http://localhost:3000/', function() {
    test.assertHttpStatus(200);
  });

  casper.then(function(){
    test.assertTitle('Modern Field Trip', 'Title is Modern Field Trip');
  });

  casper.then(function() {
    test.assertSelectorHasText('h1.headline','Plan it. Do it. Share it.');
  });

  casper.run(function(){
    test.done();
  });

});
