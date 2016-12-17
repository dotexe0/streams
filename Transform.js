const Transform = require('stream').Transform;

// function Evaluate(options) {
//   stream.Transform.call(this, options);
//     this._compareTo = 100;
// }
//
// Evaluate.prototype = Object.create(stream.Transform.prototype);
// Evaluate.prototype.constructor = Evaluate;
//
// Evaluate.prototype._transform = function(chunk, encoding, callback) {
//     if(chunk < this._compareTo) {
//       this.push(chunk)
//     }
//     callback();
// }
//
// module.exports = Evaluate;

class Evaluate extends Transform {
  constructor(options) {
    super(options);
    this._compareTo = 100;
  }

  _transform(chunk, encoding, callback) {
    // console.log(chunk);
    if(chunk < this._compareTo) {
      this.push(chunk)
      console.log('Below 100: ', chunk.toString());
    }
    callback();
  }
}
module.exports = Evaluate;
