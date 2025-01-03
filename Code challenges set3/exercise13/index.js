/***
 * Create a function multiplyNumbersthat takes an array of numbers and multiplies all the numbers 
 * together. Write a program that calculates
the frequency of each character in a string and returns the result as an object.
Example input: "hello". Output: { h: 1, e: 1, l: 2, o: 1 }.
 * 
 * 
 * 
 * 
 */
// Function that mutltiplies all numbers in an array
let arrNumbers = [1,2,3,4]
function multiplyNumbers() {
    return arrNumbers.reduce(function (accumulator, currentValue) {
        return (accumulator * currentValue);
    })
    
}
console.log(multiplyNumbers());


//Frequency of each character in a string
// Its tricky for me.