// var Alphabet = require('./alphabet');
// var Cache = require('./cache');
var RandomNumbers = require('./randomNumbers')
// var alpha = new Alphabet();
// var cache = new Cache('alpha1');

var nums = new RandomNumbers();

nums.on('data', function(chunk) {
    console.log(chunk.toString());
});

// alpha.pipe(cache);
// cache.on('finish', function() {
//     console.log('Cache store:');
//     for (var key in Cache.store) {
//         console.log(key, ':', Cache.store[key]);
//     }
// });
