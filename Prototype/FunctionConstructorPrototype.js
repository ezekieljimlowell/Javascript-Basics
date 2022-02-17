function Student(person, rollNumber, marks) {
    this.person = person;
    this.rollNumber = rollNumber;
    this.marks = marks;
}

const karthick = new Student("Karthick", "2342mdsf", 80);

/*If you need to create additional properties to function constructor prototype is the way to add
Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
How prototype chains work, and how a prototype for an object can be set.
*/

Student.prototype.status = "pass";

console.log(Student, karthick)

const planets = {
    jupitor: "large"
}

planets.__proto__.saturn = "has rings";
Object.prototype.moon = "small";
console.log(planets)
Object.setPrototypeOf(planets, {
    mars: "red"
})

console.log(planets)
