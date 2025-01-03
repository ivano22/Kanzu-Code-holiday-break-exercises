/***
 * Write a program that takes a string and capitalizes the ﬁrst letter of
each word.
Example input: "hello world". Output: "Hello World".
 * 
 * Used slice() and index of the character to capitalize.
 * 
 */
let text = 'hello ivan';
let capitalizing = text[0].toUpperCase() + text.slice(1, 5) +  " " + text[6].toUpperCase() + text.slice(7, 11);
console.log(capitalizing);
