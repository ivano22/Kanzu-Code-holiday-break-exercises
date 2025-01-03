/***
 * Write a program that ﬁlters out all numbers greater than 10 from an
array and returns the result.
 * 
 * 
 */
let numbers = [4, 6, 8, 9, 10, 12, 20, 30, 40];
function numGreaterThanTen() {
    // used the filter method.
    return numbers.filter(function(num) {
        return num > 10;
    });

}


console.log(numGreaterThanTen());