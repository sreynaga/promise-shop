/*'use strict'

require('es6-promise');

var promise = new Promise(function (fulfill, reject) {
    setTimeout(function () {
        fulfill(console.log('FULFILLED!'));
    }, 300);
}).then('');*/

// Your solution to Fulfill a promise passed!

// Here's the official solution in case you want to compare notes:

'use strict';
    
    // Create a promise
    
    var promise = new Promise(function (fulfill, reject) {
      // After the timeout reaches 300ms, fulfill the promise with value
      // 'FULFILLED!'.
    
      setTimeout(function () {
        fulfill('FULFILLED!');
      }, 300);
    });
    
    // Add a handler to the promise’s fulfillment. `console.log` will be called
    // with the value passed to `fulfill`, which is `'FULFILLED!'`.
    // Note that this statement will ALWAYS be executed before `fulfill` is
    // called (we'll talk about this in depth in the lessons to come).
    
    promise.then(console.log);
