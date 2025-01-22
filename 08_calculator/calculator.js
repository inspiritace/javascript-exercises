const add = function(add1,add2) {
  return add1 + add2;
};

const subtract = function(subtract1,subtract2) {
  return subtract1 - subtract2;
	
};

const sum = function(sumArray) {
  return sumArray.reduce((total, current) => total + current, 0);
	
};

const multiply = function(multiplyArray) {
  return multiplyArray.reduce((product, current) => product * current);

};

const power = function(power1,power2) {
  return Math.pow(power1, power2);
	
};

const factorial = function(factorial) {
  if (factorial === 0) return 1;
  let result = 1;
  for (let i = factorial; i > 0; i--) {
    result *= i;
  }
  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
