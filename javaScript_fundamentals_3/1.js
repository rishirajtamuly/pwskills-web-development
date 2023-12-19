/*  Create an object representing a car with properties like "make," "model," and "year." Write a 
function to display all the properties of the car.  */

// car object
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

// Function to display all properties of the car
function displayCarProperties(car) {
    for(const property of Object.keys(car)) {
        console.log(`${property} : ${car[property]}`);
    }
}

// function call
displayCarProperties(car);

/*
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2022
};

function displayCarProperties(car) {
    for(const property in car) {
        console.log(`${property} : ${car[property]}`);
    }
}

displayCarProperties(car);
*/
