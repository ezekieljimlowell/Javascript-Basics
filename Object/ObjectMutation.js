const simpleObj = {
    a: 1,
    b: 2,
    c: {
        e: 3
    }
}

const obj1 = simpleObj;
obj1.b = 0;
obj1.c.e = 100;
console.log(simpleObj, obj1) //mutated

const place = {
    name: "kancheepuram",
    famous: {
        value: "silk sarees"
    }
}

const shallowCopy = { ...place };
shallowCopy.name = "Villupuram";
console.log(place, shallowCopy);

shallowCopy.famous.value = "tamarind";
console.log(place, shallowCopy); //mutated
console.log(place.name === shallowCopy.name, place.famous.value === shallowCopy.famous.value);

const animal = {
    name: "Jiraffe",
    weight: {
        kilogram: "20kgs"
    }
}

const deepCopy = JSON.parse(JSON.stringify(animal));
deepCopy.name = "elephant";
deepCopy.weight.kilogram = "1000kgs";

console.log(animal, deepCopy);
console.log(animal.name === deepCopy.name, animal.weight.kilogram === deepCopy.weight.kilogram);

const material = {
    name: "wood",
    color: {
        dark: "brown"
    }
}

Object.freeze(material);
material.name = "stone";
material.color.dark = "ash";

console.log(material); //nested property changed

const deepFreeze = (obj) => {
    Object.keys(obj).forEach(property => {
        if (typeof obj[property] === 'object' && !Object.isFrozen(obj[property])) {
            deepFreeze(obj[property])
        }
    })
    return Object.freeze(obj);
}

deepFreeze(material);
material.color.dark = "red";
console.log(material) //not changed
console.log(Object.isFrozen(material.color.dark)) //true
