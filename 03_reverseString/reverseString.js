const reverseString = function(string) {
    let stringArray = string.split('');
    stringArray = stringArray.reverse();
    let reversedString = stringArray.join('');
    return reversedString;
};

console.log(reverseString('123! asdf?'));

// Do not edit below this line
module.exports = reverseString;
