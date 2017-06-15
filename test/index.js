
"use strict";


var promise = new Promise(function (resolve, reject) {
    setTimeout(resolve, 0, 101);
}).then(function (value) {
    console.log(value);
    return Promise.resolve(102);
}).then(function (value) {
    console.log(value);
    return {
        then: function (resolve, reject) {
            setTimeout(resolve, 0, 103);
        }
    }
}).then(function (value) {
    console.log(value);
    return Promise.all(["Bar", new Promise(function (resolve, reject) {
        setTimeout(resolve, 500, 106)
    }), Promise.resolve(104)]);
}).then(function (value) {
    console.log(value);
    return Promise.race([Promise.reject("Error"), Promise.resolve(108)]);
}).then(function (value) {
    console.log(value);
    return 109;
}).catch(function (error) {
    console.log(error);
});

console.log(ES6.isPromise(promise));

// true
// 101
// 102
// 103
// [ 'Bar', 106, 104 ]
// Error

