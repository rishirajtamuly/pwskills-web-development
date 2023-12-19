/* Develop a program that accepts an object and a property name, and checks if the object 
has the specified property. */

function  hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
}

const exampleObject = { name: "Alice", age: 25 };

hasProperty(exampleObject, "age")
    ? console.log("Object has the specified property")
    : console.log("Object doesn't has the specified property");

hasProperty(exampleObject, "email")
    ? console.log("Object has the specified property")
    : console.log("Object doesn't has the specified property");
