//Globall
console.log(this);
console.log(window === this);
console.log(globalThis);
console.log(globalThis === window, this === globalThis)

var b = 10;
console.log(window.b, this.b, globalThis.b);

let c = 30;
console.log(window.c, this.c, globalThis.c); //for let and const are not stored in window object like var, 
//they are stored in the declarative environment record associated with the global lexical environment object
//inside regular functions
function some() {
    console.log(this);
}
some();

function some1() {
    "use strict";
    console.log(this)
}
some1();

//function expression
var fun = function() {
    console.log(this);
}
fun();
var fun1 = function fun1() {
    "use strict";
    console.log(this);
}
fun1();

//IIFE
(function immediate() {
    console.log(this)
})();

(function immed() {
    "use strict";
    console.log(this)
})();

//arrow function
const arrow = () => {
    console.log(this);
}
arrow();
const arrow1 = () => {
    "use strict";
    console.log(this);
}
arrow1();

//nested function 
function outer() {
    "use strict";
    function inner() {
        console.log(this)
    }
    inner()
}
outer()

const arrowOuter = () => {
    "use strict";
    const arrowInner = () => {
        console.log(this);
    }
    arrowInner()
}
arrowOuter()

const obj = {
    name1: "kannan",
    display: function() {
        console.log(this, this.name1);
    }
}
obj.display();

const objArow = {
    name1: "brightlin",
    display: () => {
        console.log(this, this.name1)
    }
}
objArow.display();

const innerArrow = {
    name1: "star",
    display: function() {
        return () => console.log(this, this.name1)
    }
}
innerArrow.display()();

const outerArrow = {
    name1: "watch",
    print: () => {
        (function() {
            console.log(this, this.name1);
        })();
    }
}

outerArrow.print();


