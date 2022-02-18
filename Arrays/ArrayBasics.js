//Array creation

const arrayOfFruits = ["Apple", "Banana", "Guava", "Mango", "Jackfruit"];
const arrayOfBirds = new Array("water crow", "hummingbird", "kingfisher", "eagle");

console.log(arrayOfBirds, arrayOfFruits);

const arrayOfAnimals = Array.of("lion", "tiger", "monkey", "cow", "sheep");
console.log(arrayOfAnimals);

const empty = Array.of();
console.log(empty);

//spread operator
const copiedAnimals = ["dog", ...arrayOfAnimals];

console.log(copiedAnimals);



