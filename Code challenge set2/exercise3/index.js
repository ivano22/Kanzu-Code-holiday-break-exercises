/**
 * 
 * Write a function isEven that checks if a given number is even.
 */

function isEven(number) {
    if (number % 2 == 0) {
        console.log(`${number} is an even number`);
    }
    else {
        console.log(`${number} is not an even number`);
    }
}
console.log(isEven(20));