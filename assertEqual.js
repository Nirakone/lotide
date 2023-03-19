const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Passed: ${actual}  ===  ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Failed: ${actual}  !==  ${expected}`);
  }
  return actual === expected;
  
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

module.exports = assertEqual;
