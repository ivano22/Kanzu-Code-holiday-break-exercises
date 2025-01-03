/***
 * Create a function that accepts a string and counts how many vowels (a,
e, i, o, u) it contains.
 * 
 * 
 * 
 */
function countVowels() {
    let str = prompt('Enter a sentence');
    // Use a regular expression to match vowels
    const vowelPattern = /[aeiou]/gi;

    // Use the match method to find all vowels in the string
    const results = str.match(vowelPattern);


    // Return the count of vowels or 0  if there are none
    return results ? `The number of vowels in '${str}' sentence is ${results.length}` : `There is no vowel in '${str}' sentence.`;



}
console.log(countVowels());