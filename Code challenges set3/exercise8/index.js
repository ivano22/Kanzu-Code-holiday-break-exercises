/****
 * Write a function that takes a number and an array, checks if the 
number exists in the array, and returns a message "Found"or "Not
Found".
 * 
 * Used includes() method to check whether the number exists.
 * 
 * 
 * 
 */
function checkNumberExists(number1) {
    let arrNumber = [2, 4, 5, 8, 10, 11];

    if (arrNumber.includes(number1)) {
        console.log('number found');
    }
    else {
        console.log('number not found');
    }
}
console.log(checkNumberExists(11));