const birds = {
    fly: true,
    action: function() {
        return "I am dancing";
    }
}

const hummingBird = {
    sings: true
}

hummingBird.__proto__ = birds;
console.log(hummingBird.fly)

const giraffe = {
    walk: true,
    __proto__: hummingBird
}

console.log(giraffe.sings, giraffe.fly);

const peacock = {
    feather: true,
    __proto__: giraffe
}

console.log(peacock.walk, peacock.sings, peacock.fly, peacock.action())
console.log(hummingBird.feather);

let parent = {
    firstName: "Daniel",
    lastName: "Victory",
    set fullName(value) {
        [this.firstName, this.lastName] = value.split(" ");
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let child = {
    healthy: true,
    __proto__: parent
}

console.log(child.fullName);
console.log(child.firstName);
child.fullName = "Stephen William";
console.log(child.fullName);
console.log(parent.fullName);

const obj = {}

console.log(obj.__proto__ === Object.prototype);
console.log(obj.saturn === Object.prototype.saturn);
console.log(obj.saturn === obj.__proto__.saturn, obj);

const arr = [1,2,3,3,4,3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);

const words = {
    0: "engine",
    1: "train",
    length: 2
}

words.join = Array.prototype.join;

console.log(words.join(","))

const train = {
    electric: "current"
}

function Train(name1) {
    this.name1 = name1;
}

Train.prototype = train;

const train1 = new Train();
console.log(train1.electric);

function Animal(name5) {
    this.name5 = name5;
}

const animal1 = new Animal("Dindikal");
console.log(animal1.constructor == Animal)


