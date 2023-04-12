const middle = function(arrayA) {
  if (arrayA.length <= 2) {
    return [];
  } else if (arrayA.length % 2 === 0) {
    return [arrayA[Math.ceil(arrayA.length / 2) - 1], arrayA[Math.ceil(arrayA.length / 2)]];
  } else {
    return [arrayA[Math.floor(arrayA.length / 2)]];
  }
};

module.exports = middle;
