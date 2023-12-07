/*You are working on a currency conversion application. Write a program that has a 
variable which stores the amount in Indian Rupees (INR) and prints the equivalent 
amount in US Dollars (USD). Use the current exchange rate of 1 USD = 82 INR.

850 INR is 10.365853658536585 */

const ps = require("prompt-sync");
const prompt = ps();

let ammountInINR = Number(prompt("Enter amount in Indian Rupees (INR) : "));
let ammountInUSD = ammountInINR/82;
console.log(`${ammountInINR} INR is ${ammountInUSD} USD`);
