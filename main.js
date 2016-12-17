// var Alphabet = require('./alphabet');
// var alpha = new Alphabet();
var RandomNumbers = require('./Readable')
var Evaluate = require('./Transform')
var Cache = require('./Writable');
var transform = new Evaluate();
var printOut = new Cache('Numbers');
var nums = new RandomNumbers();

// nums.on('data', function(chunk) {
//     console.log(chunk.toString());
// });

nums.pipe(transform).pipe(printOut);

// cache.on('finish', function() {
//     console.log('Numbers less than 100:');
//     for (var key in Cache.store) {
//         console.log(key, ':', Cache.store[key].toString());
//     }
// });
