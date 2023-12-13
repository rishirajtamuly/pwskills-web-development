/* Imagine you are working for a social media company. You have a list of all the users. 
Your job is to create a function that checks if a specific username is in that list.
The function should take the username as input and tell you whether it's present in the 
list of users or not. */

/*
const ps = require("prompt-sync");
const prompt = ps();

let noOfUsers = Number(prompt("Enter number of users : "));
let allUsers = [];
for(let i = 0; i < noOfUsers; i++) {
    let userName = String(prompt(`Enter name of user${i + 1} : `));
    allUsers.push(userName);
}


function isUserPresent(user) {
    let isAbsent = true;
    for (let name of allUsers) {
        if(name === user) {
            console.log(`Yes, ${name} is a valid user.`);
            isAbsent = false;
           break;
        } 
    }
    if(isAbsent) console.log(`No, Someone is not a valid user.`);
}


let userName = String(prompt("Enter user name : "));
isUserPresent(userName);
*/

const allUsers = [
    "Anurag",
    "Mithun",
    "Alka",
    "Prabir",
    "Vinay",
    "Shubham",
    "Shivan",
    "Farman",
  ];

  function isUserPresent(user) {
    if (allUsers.includes(user)) {
      console.log(`Yes, ${user} is a valid user.`);
      return true;
    } else {
      console.log(`No, ${user} is not a valid user.`);
      return true;
    }
  }
  
  isUserPresent("Mithun");
  
  // OUTPUT: Yes, Mithun is a valid user.
  
  isUserPresent("Someone");
  
  // OUTPUT: No, Someone is not a valid user.
