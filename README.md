# ES6 Promise Shim

Provides a lightweight implementation of Promise in pure ES5 code for older browsers or older JavaScript engines.  

## Implemented

* `Promise`

    * `Promise.all()`
    * `Promise.race()`
    * `Promise.reject()`
    * `Promise.resolve()`
    * `Promise.prototype.then()`
    * `Promise.prototype.catch()`

## Examples

```javascript
"use strict";

require("es6-promise-shim");


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
```

## Installation

* In browser context, just insert this script on the top of other scripts
* For NodeJS, just install it from npm

    `npm install es6-promise-shim`
     
## Test

   `npm test`
     
## Contributors
   * [Ariyan Khan](https://github.com/ariyankhan)
   
## License

MIT License

Copyright (c) 2017 Ariyan Khan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
