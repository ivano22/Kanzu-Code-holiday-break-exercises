/**
 * Write a program that checks if a number is positive, negative, or zero.
 * 
 * Used Math.sign() method for the signs.
 */

let number = prompt('Enter number');
number = Math.sign(number);

if (number === -1 ) {
    console.log("It's a negative number");
}
else if (number === 1) {
    console.log("It's  a positive number");
}
else if (number === 0) {
    console.log('Its a zero');
}
else {
    console.log('Enter a valid number')
}



