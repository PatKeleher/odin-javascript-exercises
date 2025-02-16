const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
  return array.reduce((sum, element) => {
    return sum + element;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((accumulator, element) => {
    return accumulator * element;
  }, 1)
};

const power = function(x, y) {
  return x**y;	
};

const factorial = function(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
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
