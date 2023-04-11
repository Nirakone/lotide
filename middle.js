const middle = (arrayA) => {
  let middleItem = [];
  if (arrayA.length <= 2) {
    return middleItem;
  } else if (arrayA.length % 2 === 0) {
    middleItem.push(Math.ceil(arrayA.length / 2));
    middleItem.push(Math.ceil(arrayA.length / 2) + 1);
  } else {
    middleItem.push(Math.ceil(arrayA.length / 2));
  }
  return middleItem;
};

//test code
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3]

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;
