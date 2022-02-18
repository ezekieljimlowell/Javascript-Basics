const arrayOfPlanets = ["asteroids", "jupitor", "saturn", "uranus", "neptune"];

const mutatedCopyOfPlanets = arrayOfPlanets;
mutatedCopyOfPlanets[3] = "pluto";
console.log(arrayOfPlanets, mutatedCopyOfPlanets); //mutated

//shallow copy
const arrayOfMaterials = ["water", "land", "ocean", ["mountains", "river"]];
const shallowCopied = [...arrayOfMaterials];
shallowCopied[2] = "5";
console.log(shallowCopied, arrayOfMaterials); //not mutated

shallowCopied[3][1] = "oasis";
console.log(shallowCopied, arrayOfMaterials); //deeply mutated

shallowCopied[3] = "fish";
console.log(shallowCopied, arrayOfMaterials);

//deep copy
const arrayOfCountries = ["india", "singapore", "malaysia", ["japan", "america", "russia"]];
const deeplyCopied = JSON.parse(JSON.stringify(arrayOfCountries));

deeplyCopied[1] = "israel";
console.log(deeplyCopied, arrayOfCountries); //not mutated

deeplyCopied[3][2] = "mexico";
console.log(deeplyCopied, arrayOfCountries); //not mutated

const arrayOfPlants = ["neem", "tamarind", ["fig", "banana", "banyan"]];

//freeze shallow
Object.freeze(arrayOfPlants);
arrayOfPlants[1] = "jacktree";
console.log(arrayOfPlants);

arrayOfPlants[2][1] = "mango";
console.log(arrayOfPlants); //changed

const deepFreeze = (arr) => {
    Object.keys(arr).forEach(property => {
        if(typeof arr[property] === 'object') {
            deepFreeze(arr[property]);
        }
    });
    return Object.freeze(arr);
}

const arrayOfNumbers = [12, 34, 53, ["32", "242", "545"]];
deepFreeze(arrayOfNumbers);
arrayOfNumbers[0] = 1333333333;
arrayOfNumbers[3][0] = 1333333334222222222222222222222;
console.log(arrayOfNumbers); //deeply not changed
