/***
 * 
 * Create a function sumArray that takes an array of numbers and returns
their sum.
 * 
 */
function sumArray(number1, number2) {
    return number1 + number2;
}
console.log(sumArray(2, 7));

//With Arrow function
const sumArrayTwo = (a, b) => {
    return a + b;
}
console.log(sumArrayTwo(4, 6));

// Function expression
const sumArrayThree = function (x, y) {
    return x + y;
}
console.log(sumArrayThree(10, 20));