// var Alphabet = require('./alphabet');
var Cache = require('./Writable');
// var alpha = new Alphabet();
var Evaluate = require('./Transform')
var RandomNumbers = require('./Readable')
var trans = new Evaluate();
var cache = new Cache('Numbers');
var nums = new RandomNumbers();

// nums.on('data', function(chunk) {
//     console.log(chunk.toString());
// });

nums.pipe(trans).pipe(cache);

// cache.on('finish', function() {
//     console.log('Numbers less than 100:');
//     for (var key in Cache.store) {
//         console.log(key, ':', Cache.store[key].toString());
//     }
// });
