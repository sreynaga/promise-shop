'use strict'

function attachTitle(title = 'DR. ') {
    return title;
}

var promise = new Promise(function (fulfill, reject) {
    fulfill('DR. MANHATTAN');
});

promise.then(attachTitle).then(console.log);

//Your solution to Values and promises passed!

//Here's the official solution in case you want to compare notes:

/*'use strict';
    
function attachTitle(name) {
    return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
    .then(attachTitle)
    .then(console.log);*/