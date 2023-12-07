/* You are developing a booking application for a cinema. The ticket price depends on the type 
of the viewer("child", "adult", or "senior"). Write a program which calculates the price 
accordingly and prints the total price to be paid. Let’s assume the ticket price for a child 
is Rs. 100, adult ticket price is Rs. 150 and ticket price for a senior is Rs. 120.
*/


const ps = require("prompt-sync");
const prompt = ps();

let numberOfChilds = Number(prompt("Enter number of childs : "));
let numberOfAdults = Number(prompt("Enter number of adults : "));
let numberOfSeniors = Number(prompt("Enter number of seniors : "));
let childTicketPrice = Number(prompt("Enter ticket price of child : "));
let adultTicketPrice = Number(prompt("Enter ticket price of adult : "));
let seniorTicketPrice = Number(prompt("Enter ticket price of senior : "));

let totalPrice = 
    numberOfChilds * childTicketPrice +
    numberOfAdults * adultTicketPrice +
    numberOfSeniors * seniorTicketPrice;

console.log(`The total ticket price is ${totalPrice}`);
