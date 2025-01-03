/***
 * Write a program that counts how many times the letter "a" appears in
the string "JavaScript is amazing!"
 * 
 * 
 */
let str = prompt('Enter text');
str = str.toString();
let pattern = /a/g; // global search for letter a using regular expression.
let results = str.match(pattern);
results = results.length;

if (str.includes('a') == true) {
    console.log(`letter 'a' appears in '${str}' ${results} times.`);
} else if (str.includes('a') == true && results == 1) {
    console.log(`letter 'a' appears in '${str}' ${results} time.`);
} else {
    console.log(`The '${str}'Sentence does not contain letter 'a'`);
}
