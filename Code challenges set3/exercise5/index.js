/**
 * 
 * Write a function findMax that returns the largest number from an array
of numbers.
 * 
*Used the spread operator to turn the numbers into individual arguments.

 */
const arrOfNumbers = [10, 20, 30, 40, 50, 60];
function findMax() {
    const maxValue = Math.max(...arrOfNumbers);
    return maxValue;
}
console.log(findMax());

 