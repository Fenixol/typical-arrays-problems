
exports.min = function min (array) {
  if(Array.isArray(array) && array.length ){
    return Math.min.apply( Math, array );
  }
  return 0;
}

exports.max = function max (array) {
  if(Array.isArray(array) && array.length ){
    return Math.max.apply( Math, array );
  }
  return 0;
}

exports.avg = function avg (array) {
  if(Array.isArray(array) && array.length ){
    const sum = array.reduce((a, b) => a + b, 0);
    return (sum / array.length) || 0;
  }
  return 0;
}
