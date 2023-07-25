const sumAll = function(numberOne, numberTwo) {
    if(    typeof numberOne !== 'number'
        || typeof numberTwo !== 'number'
        || numberOne < 0
        || numberTwo < 0
        ) {
        return 'ERROR';
    }
    let largerNumber = Math.max(numberOne,numberTwo);
    let smallerNumber = Math.min(numberOne, numberTwo);
    let sum = 0;
    for (let i = smallerNumber; i <= largerNumber; i++) {
        sum = sum + i;
    }
    return sum;
};

console.log(sumAll("-10",14));

// Do not edit below this line
module.exports = sumAll;
