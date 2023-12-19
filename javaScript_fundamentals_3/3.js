/* Write a program that takes an object as input and returns the number of properties it has. */

/*
let countProperties = (obj) => {
    let count = 0;
    for(let property in exampleObject) {
        if(exampleObject.hasOwnProperty(property)) count++;
    }
    return count;
};

const exampleObject = {a: 1, b: 2, c: 3};
console.log(countProperties(exampleObject));
*/

function countProperties(obj) {
    return Object.keys(obj).length;
}
    
const exampleObject = { a: 1, b: 2, c: 3 };
console.log(countProperties(exampleObject));
