/*****
 * Write a function that reverses a string, e.g., "hello"becomes "olleh"
 * 
 * 
 */

const reverseString = function () {
    let str = prompt('Enter string');
    // Turning the string into an array to apply the reverse method.
    let arrayString = str.split('');
    let reversedArray = arrayString.reverse();
    //Converting the array into a string
    let reversedString = reversedArray.join('');

    console.log(`The reverse of '${str}' is '${reversedString}'`);
}
console.log(reverseString());