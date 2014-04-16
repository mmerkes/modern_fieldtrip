'use strict';

/*global casper*/
//var x = require('casper').selectXPath;

casper.test.begin('session', 2, function suite(test) {

    casper.start('http://localhost:3000/#/trips/Downtown-Seattle', function() {
        test.assertHttpStatus(200);
    });

    casper.then(function() {
        //this passes
        test.assertExists('body.ember-application','ember-application found');
    });

    casper.then(function() {
        //this does not, nor does it pass when looking for any element inside of it
        //only the downtown-seattle route has this problem as far as I can see
        test.assertExists('div.ember-view','ember-view');
    });

    casper.run(function(){
        test.done();
    });
});
