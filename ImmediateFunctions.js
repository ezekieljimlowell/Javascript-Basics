'use strict';
var temp = function emp() {
    console.log("temperature")
}()
//temp() cannot be called globally 

function ad() {
    return 1;
}

{
    function ad() {
        return 2;
    }
}

console.log(ad(), ad() === 1, ad() === 2)

//case 1: modify internal variable using closure

var printName = (() => {
    let value = "router";
    return {
        getValue: () => value,
        setValue: newValue => value = newValue
    }
})()

console.log(printName.getValue());
printName.setValue("modem");
console.log(printName.getValue())

//case 2: Alias global variables if there are 2 symbols with 2 different library say $ we can use IIFE to make differ

//case 3: use IIFE inside for loop to prevent wrong result
for (var i = 0; i <= 4; i++) {
    setTimeout(() => console.log(i), 1000)
}

for (var i = 0; i <= 4; i++) {
    ((index) => setTimeout(() => console.log(`after IIFE ${index}`), 1000))(i)
}

for (let i = 0; i <= 4; i++) {
    setTimeout(() => console.log(`using let ${i}`), 1000)
}





