const stream = require('stream');

function Evaluate(options) {
  stream.Transform.call(this, options);
    this._compareTo = 100;
}

Evaluate.prototype = Object.create(stream.Transform.prototype);
Evaluate.prototype.constructor = Evaluate;

Evaluate.prototype._transform = function(chunk, encoding, callback) {
    if(chunk < this._compareTo) {
      this.push(chunk)
    }
    callback();
}

module.exports = Evaluate;
