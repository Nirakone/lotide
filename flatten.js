/* goes through array items, pushes them out of inner array, gives count of how many
items in new flat array */
const flatten = (nestedArrays) => {
  let flattenedArray = [];
  for (let f = 0; f < nestedArrays.length; f++) {
    if (Array.isArray(nestedArrays[f])) {
      for (let l = 0; l < nestedArrays[f].length; l++) {
        flattenedArray.push(nestedArrays[f][l]);
      }
    } else {
      flattenedArray.push(nestedArrays[f]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};
//test case
// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;
