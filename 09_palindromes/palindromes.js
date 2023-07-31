const palindromes = function (word) {
    
    const noBullshit = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = noBullshit.split('').reverse().join('');

    if (noBullshit === reversed) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
