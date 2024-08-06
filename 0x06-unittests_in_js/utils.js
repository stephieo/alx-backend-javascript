#!/usr/bin/node
class Utils {
  static  calculateNumber(type, a, b) {
    let c = 0;
    const a_r = Math.round(a);
    const b_r = Math.round(b);
    
    if (type === 'SUM') {
      c = a_r + b_r;
    } else if (type === 'SUBTRACT') {
      c = a_r - b_r;
    } else if (type === 'DIVIDE') {
        c = b_r === 0 ? 'Error' : a_r / b_r;
    }
    
    return c;
  }
}

module.exports = Utils;