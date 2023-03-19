// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅✅✅ Passed: ${actual}  ===  ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Failed: ${actual}  !==  ${expected}`);
//   }
//   return actual === expected;
  
// };

const countLetters = function(string) {
  let counted = {};
  let noSpaces = string.replace(/\s/g, ""); //how to remove spaces in javascript MDN
  for (const letters of noSpaces) {
    if (counted[letters]) {
      counted[letters] += 1;
    }
    if (!counted[letters]) {
      counted[letters] = 1;
    }
  }
  return counted;
};

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;