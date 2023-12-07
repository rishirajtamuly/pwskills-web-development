/* You are developing a form validation system. Write a program that takes user 
information(such as name, email, age) and uses the typeof operator to check the 
data type of each input. Print appropriate messages like "Name should be a string,"
 "Email should be a string," or "Age should be a number." if any field is not proper. */

const ps = require("prompt-sync");
const prompt = ps();

let name = prompt("Enter your name : ");
let email = prompt("Enter your email : ");
let age = prompt("Enter your age : ");
if (typeof name !== "string") {
    console.log(`Name Should Be A String..`);
} else if (typeof email !== "string") {
    console.log(`Email Should Be A String..`);
} else if (typeof age !== "number") {
    console.log(`Age Should Be A Number..`);
} else {
    console.log(`Yahh!!! All the fields are proper.`);
}
