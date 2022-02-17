//Object.assign() to create object with another object
const earth = {
    land: "soil and rocks"
}

const world = Object.assign(earth);
world.water = "liquid";
console.log(earth, world);

//Object.create() difference between assign and create is that create make old as prototype in the new object

const planet = Object.create(earth);
planet.air = "wind";
console.log(planet, earth)
console.log(planet.hasOwnProperty("land"))

//Object.seal() 
const shops = {
    place: "chennai",
    action: "went"
}

delete shops.action;
console.log(shops, shops.hasOwnProperty("place"))

Object.seal(shops);
delete shops.place;

shops.action = "run";
console.log(shops);
delete shops.action;
console.log(shops);

console.log(Object.isSealed(shops))

//Object.freeze()
const freezers = {
    preserve: "fridge",
    makeSurroundsCooling: {
        coolAir: "Air conditioner"
    }
}

Object.freeze(freezers);
freezers.preserve = "washing machine";
console.log(freezers);
freezers.wind = "fan";
console.log(freezers);
freezers.makeSurroundsCooling.coolAir = "neem tree";
console.log(freezers);
freezers.makeSurroundsCooling.wall = "clock";
console.log(freezers)
console.log(Object.isFrozen(freezers), Object.isFrozen(freezers.makeSurroundsCooling))

//entries, keys, values
console.log(Object.entries(freezers));
console.log(Object.keys(freezers));
console.log(Object.values(freezers));

//Object.fromEntries()
const entries = new Map([["Tiger", "Lion"], ["Peacock", "Duck"]]);
const obj = Object.fromEntries(entries);
console.log(obj)

//defineProperty and defineSetter
const m = {};
//Object.__defineGetter__ is deprecated
/*
m.__defineGetter__("children", function() {
    return 55;
})

*/ 
Object.defineProperty(m, "color", {
    get: function() {
        return "blue";
    }
});
console.log(m);

//Object.__defineSetter__ is deprecated
/*
m.__defineSetter__("character", function(v) {
    this.val = v;
})
m.character = "100";
*/

Object.defineProperty(m, "measurements", {
    set: function(val) {
        this.weight = val;
    }
})

m.measurements = "tons";
console.log(m, m.weight, m.measurements);

//Object.__lookupGetter__ is also deprecated
const greetings = {
    get subject() {
        return "Society"
    }
}

/*
greetings.__lookupGetter__("subject")
*/

console.log(Object.getOwnPropertyDescriptor(greetings, "subject").get)

const movies = {
    /**
     * @param {any} value
     */
    set poster(value) {
        this.movie = value
    }
}

console.log(movies.__lookupSetter__("poster")); //Object.__lookupSetter__() is also deprecated
console.log(Object.getOwnPropertyDescriptor(movies, "poster").set);

//Object.defineProperties()
const obj12 = {};
Object.defineProperties(obj12, {
    "important": {
        value: 10,
        writable: true
    },
    "notNeeded": {
        value: 45,
        writable: false
    }
})

console.log(obj12.important, obj12.notNeeded)

obj12.important = 32331;
console.log(obj12.important, obj12);
obj12.notNeeded = "231223s";
console.log(obj12.notNeeded, obj12);

//getOwnPropertyDescriptors
const descriptors = Object.getOwnPropertyDescriptors(freezers);
console.log(descriptors, descriptors.preserve.value, descriptors.preserve.writable, descriptors.preserve.enumerable);
console.log(descriptors.makeSurroundsCooling.value, descriptors.makeSurroundsCooling.writable)


//getOwnPropertyNames
console.log(Object.getOwnPropertyNames(freezers))

const b = {}
//difference between Object.keys() and Object.getOwnPropertyNames()
Object.defineProperties(b, {
    one: {
        value: 100,
        writable: true,
        enumerable: false
    },
    two: {
        value: "hello",
        writable: true,
        enumerable: true
    }
})

console.log(Object.keys(b), Object.getOwnPropertyNames(b), Object.hasOwnProperty("one"))

//Object.getOwnPropertySymbols()
const sym = {}
const l = Symbol("hello");
const n = Symbol("welcome");
sym[l] = "firstPerson";
sym[n] = "nextPerson";
const sym1 = Object.getOwnPropertySymbols(sym);
console.log(sym1, sym1.length, sym1[1]);

sym.__proto__.favour = "fish";
console.log(sym);
Object.prototype.player = "parthiv";
sym.__proto__.food = "cheese";
Object.prototype.plants = "tomato";
console.log(sym);
//Object.getPrototypeOf()
console.log(Object.getPrototypeOf(sym))

//Object.isPrototypeOf()
function Hi() {}
function Hello() {}

Hello.prototype = Object.create(Hi.prototype);
const greet1 = new Hello();
console.log(Hi.prototype.isPrototypeOf(greet1));
console.log(Hello.prototype.isPrototypeOf(greet1));
console.log(greet1, Hi, Hello);

const properties1 = {
    prop1() {
        return "number";
    },
    spec: "you"
}

const property2 = {
    name1: "lowell"
}

Object.setPrototypeOf(property2, properties1);

console.log(property2.prop1(), property2.spec)

//Object.is()
console.log(Object.is("1", 1), Object.is(3,3))

//extensible and preventExtensible
console.log(Object.isExtensible(property2));

Object.preventExtensions(property2);
console.log(Object.isExtensible(property2))

property2.change = "dinesh";
console.log(property2);

//PropertyIsEnumearable
console.log(properties1.propertyIsEnumerable("prop1"), properties1.propertyIsEnumerable("spec"), property2.propertyIsEnumerable("spec"));
console.log(properties1.propertyIsEnumerable("valueOf"));

//toLocaleString
const num = 1131;
console.log(num.toLocaleString("ar-EG"))

//ValueOf
function Currency(m) {
    this.m = m;
}

Currency.prototype.valueOf = function() {
    return this.m;
}

const display1 = new Currency(2);

console.log(display1, display1 + 332)

function Num(t) {
    this.t = t;
}

const num3 = new Num(345);
Num.prototype.toString = function() {
    return `${this.t}`;
}

console.log(num3, typeof (num3.toString()))
