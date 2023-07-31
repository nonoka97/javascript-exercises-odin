const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
  
    if (num === 1) {
      return 1;
    } else if (num === 2) {
      return 1;
    }
  
    let prev = 1;
    let current = 1;
    let next;
  
    for (let i = 3; i <= num; i++) {
      next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
  };

// Do not edit below this line
module.exports = fibonacci;
