'use strict'

function first(){
    return Promise.resolve('SECRET VALUE');
}

function second(val){
    return Promise.resolve(val);
}

setTimeout(function () {
    first().then(second).then(console.log);
}, 400);