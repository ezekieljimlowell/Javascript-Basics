//singleton pattern

var singleton = new function() {
    this.favourite = "chips"
}
console.log(singleton, singleton.favourite);

singleton.marks = 20;
console.log(singleton)

/*var singleton1 = new singleton();
console.log(singleton1)*/ //cannot be instantiated after first instantiation

//By function constructor
function Student(name, rollNumber, marks) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.marks = marks;
}

var robert = new Student("Robert", 1232424, 80);
console.log(robert)
var jane = new Student("Jane")
console.log(jane)

//ES6 class
class Food {
    constructor(variety, rate, quantity) {
        this.variety = variety;
        this.rate = rate;
        this.quantity = quantity;
    }
}

const food1 = new Food("rice", "50rupees", "1kgs");
console.log(food1)

//Object literal
const vehicles = {
    land: "2 wheelers",
    water: "ship",
    air: "plane"
}

console.log(vehicles)

//Object.create
const otherVehicles = Object.create(vehicles);
otherVehicles.display = function() {
    return this.land;
}

console.log(otherVehicles, otherVehicles.display());

//Object.assign
const vehicle1 = Object.assign(vehicles);
vehicle1.print = function() {
    return this.water;
}

console.log(vehicle1, vehicle1.print());