/**
 * Use a for loop to calculate the factorial of a number n
 * 
 * 
 */
function factorialOf(n) {
    if (n < 0) {
        console.log('Its a negative number');
    }
    else {
        let factorial = 1 //we start calculating from 1,so we initialize a variable that holds the factorial to 1
        // Loop from 1 to n to calculate factorial
        for (let i = 1; i <= n; i++) {
            factorial *= i;// Multiply factorial by the current value of i
        }

        return factorial;
    }
}
console.log(factorialOf(5));
console.log(factorialOf(10));
console.log(factorialOf(0));
console.log(factorialOf(-2));