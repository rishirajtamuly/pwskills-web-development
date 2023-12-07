/* Suppose you are building a payment checkout page and must display the final price 
after the discount. Create a simple discount calculator that takes two values from 
the variables - the total price and the discount percentage - and prints the 
discounted value. 

let totalValue = 2000;
let discountPercentage = 20;

Expected Output: The final price after discount is: Rs. 1600
*/


const ps = require("prompt-sync");
const prompt = ps();

let totalValue = Number(prompt("Enter the total price : "));
let discountPercentage = Number(prompt("Enter the discount percentage : "));
let discountedAmount = discountPercentage/100 * totalValue;
let discountedPrice = totalValue - discountedAmount;
console.log(`The final price after discount is: ${discountedPrice}`);


