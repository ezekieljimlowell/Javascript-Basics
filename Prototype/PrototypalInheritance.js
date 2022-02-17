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
