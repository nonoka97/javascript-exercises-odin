const removeFromArray = function(myArray, ...itemsToDelete) {
    if (itemsToDelete.length === 0) {
        return myArray; // Return the original array if no items to delete are provided
    } else {
        for (let i = 0; i < itemsToDelete.length; i++) {
            const itemToDelete = itemsToDelete[i];
            while (myArray.includes(itemToDelete)) {
                const index = myArray.indexOf(itemToDelete);
                myArray.splice(index, 1);
            }
        }
        return myArray;
    }
};

console.log(removeFromArray([1,2,"abc",3],2,"abc"));

// Do not edit below this line
module.exports = removeFromArray;
