console.log(add(2,5));
function add(a,b) {
    return a+b;
}

//console.log(subtract(3,89)); //subtract is not a function
var subtract = function subtract(a,b) {
    return b-a;
}

//console.log(multiply(3,4)) //can't access lexical declaration 'multiply' before initialization for let and const 
var multiply = (a,b) => a*b; //for var multiply is not a function