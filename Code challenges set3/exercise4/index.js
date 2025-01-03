/**
 * Check if the number 5 exists in the array [1, 2, 3, 4, 5]using the
includes()method.
 * 
 * 
 */

let arr = [1, 2, 3, 4, 5]
function check() {
    if (arr.includes(5)) {
        console.log(`The '${arr}' array includes 5`);
    }
    else {
        console.log(`The '${arr}' array does not contain 5`);
    }
}
console.log(check());