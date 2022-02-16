//dot property

const material1 = {
    3: "wood",
    'croc-4' : {
        dark: "brown"
    }
}

console.log(material1.croc-4) //NaN
//console.log(material1.3) syntax error

//square bracket
console.log(material1['croc-4'], material1[3])

const birds = {
    name1: "Peacock",
    value: 10
}

const {name1: name2, value} = birds;
console.log(name2, value);

//dynamic property name
const property = "action";

const panda = {
    action: "fly"
}

const {[property]: action} = panda;

console.log(action)

