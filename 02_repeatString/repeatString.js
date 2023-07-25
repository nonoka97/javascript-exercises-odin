const repeatString = function(string, repeatTimes) {
    fullString = "";
    if(repeatTimes < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repeatTimes; i++) {
        fullString = fullString + string;
    }
    return fullString;
};
// Do not edit below this line
module.exports = repeatString;
