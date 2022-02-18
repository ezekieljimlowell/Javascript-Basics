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

const arr1 = [1, 2, 3, 5, [6, 7, 8, 9]];
const mixedArr = Array.from(arr1);
mixedArr[0] = "456";
mixedArr[4][0] = "red";
console.log(mixedArr, arr1); //also prevents mutation shallow

//fill with same value
const sameElement = new Array(5).fill("1");
console.log(sameElement);

const nestedArray = ["animal", "plants", ["fish", "birds"]];
const concatenated = [].concat(nestedArray);
concatenated[0] = "sea";
concatenated[2][0] = "load";
console.log(concatenated, nestedArray); //also prevent mutation shallow
