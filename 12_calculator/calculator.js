const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(a) {
	return a.reduce((a, b) => a+b, 0)
};

const multiply = function(a) {
  return a.reduce((a, b) => a*b, 1)
};

const power = function(a, b) {
	return a**b
};

const factorial = function(a) {
  if (a <= 1){
    return 1
  }
  return factorial(a - 1) * a
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
