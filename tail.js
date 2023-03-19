// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅✅✅ Passed: ${actual}  ===  ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Failed: ${actual}  !==  ${expected}`);
//   }
//   return actual === expected;
  
// };

//above is the copied code before module export
//below is module export so no need to have copied code

//const assertEqual = require('../assertEqual');


const tail = (array) => {
  return array.slice(1);
};



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

module.exports = tail;
