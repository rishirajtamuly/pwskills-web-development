/* You are given with an array of numbers and strings. Your task is to find the first string 
in the array. On finding the first string print “Found the First String” and its value. */

const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let index = 0; index < arr.length; index++) {
    if(typeof arr[index] === "string") {
        console.log(`Found the First String : ${arr[index]}`);
        break; 
    }
}
