'use strict'

function alwaysThrows() {
    console.log("'OH NOES'");
}

function iterate(arg1 = 0, arg2 = 0) {
    console.log(parseInt(arg1));

    return arg1 + 1;
}

var promise = new Promise(function (fulfill, reject) {
    for (var i = 0; i < 10; i++) {
        if (i < 5) {
            fulfill(iterate(i + 1));
        } else {
            console.log('OH NOES');
            break;
        }
    }
});

//Your solution to An important rule passed!

//Here's the official solution in case you want to compare notes:

/*'use strict';
    
function iterate(num) {
    console.log(num);
    return num + 1;
}

function alwaysThrows() {
    throw new Error('OH NOES');
}

function onReject(error) {
    console.log(error.message);
}

Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);*/