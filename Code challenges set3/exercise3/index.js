/*
 * Write a loop to log all key-value pairs of the object {a: 1, b: 2, c: 3}
 * 
 * I used the for...in loopvto iterate through the object.
 */
let theObject = { a: 1, b: 2, c: 3 };
for (const key in theObject) {
    if (theObject.hasOwnProperty(key)) {
        console.log(` ${key} : ${theObject[key]}`);

    }
    else {
        console.log(`The property is no listed in this object`);
    }


}