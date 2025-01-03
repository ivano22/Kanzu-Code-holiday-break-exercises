/***
 * Create a function that removes duplicate values from an array.
Example input: [1, 2, 2, 3]. Output: [1, 2, 3].
 * 
 * 
 * 
 */
let arr1 = [1, 2, 2, 3];
 
function removeDuplicate() {
    //we use the new Set to convert the array into a set that holds unique values and the 
    // spread operator converts the set to an array.
    return [...new Set(arr1)];

}
console.log(removeDuplicate());