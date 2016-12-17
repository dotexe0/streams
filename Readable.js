const stream = require('stream');

function RandomNumbers(options) {
  stream.Readable.call(this, options);
  this._counter = 0;
  this._end = 10; // number of random numbers to count up to.
};

RandomNumbers.prototype = Object.create(stream.Readable.prototype);
RandomNumbers.prototype.constructor = RandomNumbers;

RandomNumbers.prototype._read = function() {
  var number = Math.floor(Math.random() * (150));
  number = number.toString();
  console.log('Current number: ', number);
  var buff = new Buffer(number);
  this.push(buff);
  this._counter++;
  if(this._counter === this._end) {
    this.push(null);
  }
};

module.exports = RandomNumbers;
