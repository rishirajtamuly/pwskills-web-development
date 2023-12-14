/*   As a web developer, you need to create a function that takes a user name string as input 
and checks if it contains only unique characters.  Use a Set to implement this efficiently. */


/*
const ps = require("prompt-sync");
const prompt = ps();

function uniqueCharactersCheck(username) {
    let len = username.length;
    for(let i = 0; i < len - 1; i++) {
        for(let j = i + 1; j < len; j++) {
            if(username[i] === username[j]) {
                console.log(`The input string contains duplicates.`);
                return;
            }
        }
    }
    console.log(`The input string contains unique characters.`);
}

let username = String(prompt("Enter a name : "));
uniqueCharactersCheck(username);
*/


function uniqueCharactersCheck(inputString) {
    const charSet = new Set();

    for (const char of inputString) {
        if (charSet.has(char)) {
            console.log("The input string contains duplicates.");
            return false;
        }
        charSet.add(char);
    }
    console.log("The input string contains only unique characters.");
    return true;
}

uniqueCharactersCheck("mithun")
// OUTPUT: The input string contains unique characters.

uniqueCharactersCheck("anurag")
// OUTPUT: The input string contains duplicates.



