const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	const result = arr.reduce((a, current) => a + current, 0);
  return result;
};

const multiply = function(arr) {
  const result = arr.reduce((a, current) => a * current, 1);
  return result;
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
	if (typeof num !== 'number' || num < 0) {
    throw new Error('Input should be a non-negative number.');
  }

  let result = 1;

  for (let i = num; i >= 1; i--) {
    result =result * i;
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
