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

// test code
// console.log(countLetters("LHL"));
// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;