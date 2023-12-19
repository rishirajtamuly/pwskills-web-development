/*  Define an object that represents a student's information including name, age and grade.
 Implement a method to update the student's grade. */

let student = {
    name: "John",
    age: 18,
    grade: 'C'
};
console.log(`Initial grade of ${student.name} is ${student.grade}`);

// Method to update the student's grade
function updateGrade(student, grade) {
    for(let info of Object.keys(student)) {
        if(info === 'grade') student[info] = grade;
    }
}

let grade = 'A';
updateGrade(student, grade);
console.log(`Updated grade of ${student.name} is ${student.grade}`);

/*
const student = {
name: "John",
age: 18,
grade: "A"
};

// Method to update the student's grade
function updateGrade(newGrade) {
student.grade = newGrade;
}

updateGrade("B");
console.log(student);
*/
