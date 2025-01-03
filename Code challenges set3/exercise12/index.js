/***
 * Build a function that takes a string and checks if it’s a palindrome (the
same forwards and backward). Write a program that takes an object and swaps its keys and values.
Example input: { a: 1, b: 2 }. Output: { 1: "a", 2: "b" }.
 * 
 * 
 * 
 */
//Function to check if a string is palindrome.
function isPalindrome() {
    //Tricky for me
}


//A program that takes an object and swaps its keys and values.
let obj = { a: 1, b: 2, C: 3 };
function swapKeysAndValues() {
    const swappedObject = {};// stores the swapped key value pairs.
    //for ...in loop
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            swappedObject[obj[key]] = key;
        }
    }
    
    return swappedObject;
}
console.log(swapKeysAndValues());