/* You are working for an e-commerce client, and they provide you with an array of objects containing
product names and their prices. Your task is to create a function that finds the product with the 
maximum amount (the highest price) and the product with the minimum amount (the lowest price) and prints 
them to the console. */


const products = [
    { name: "Laptop", price: 120000 },
    { name: "Mobile", price: 70000 },
    { name: "Laptop Bag", price: 20000 },
    { name: "Watch", price: 20000 },
    { name: "Mobile Charger", price: 1500 },
];

/*
let maxAmount = Number.MIN_VALUE;
let minAmount = Number.MAX_VALUE;

for(let product of products) {
    if(product.price > maxAmount) maxAmount = product.price;
}

for(let product of products) {
    if(product.price <  minAmount) minAmount = product.price;
}

for(let product of products) {
    if(product.price ===  maxAmount) {
        console.log(
            `The product with maximum amount is ${product.name} which is priced at Rs. ${product.price}`
        );
    }
    if(product.price ===  minAmount) {
        console.log(
            `The product with minimum amount is ${product.name} which is priced at Rs. ${product.price}`
        );
    }
}
*/


let maxProduct = {name: "", price: Number.MIN_VALUE};
let minProduct = {name: "", price: Number.MAX_VALUE};

for(let product of products) {
    if(product.price > maxProduct.price) {
        maxProduct = product;
    }
    if(product.price < minProduct.price) {
        minProduct = product;
    }
}

console.log(
    `The product with maximum ammount is ${maxProduct.name} which is priced at Rs. ${maxProduct.price}`
);
console.log(
    `The product with minimum ammount is ${minProduct.name} which is priced at Rs. ${minProduct.price}`
);
