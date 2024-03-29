//uncomment imported function to test below cases
//const assertEqual = require('./assertEqual');

const tail = (array) => {
  return array.slice(1);
};

//test cases
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
