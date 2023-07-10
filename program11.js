'use strict'

getAll(fetch(1), fetch(2))
    .then(function (values) {
        console.log(values[0], values[1]);
    });