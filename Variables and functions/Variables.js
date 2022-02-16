

let weather = "winter";
console.log(window, weather)
//undefined


let a = 10;
{
    let a = 20;
    console.log(a)
}
console.log(a)

var b = 1;
console.log(b)
{
    var b = 2;
    console.log(b)
}
console.log(b)

var c = 40;
function some() {
    var c = "train";
    console.log(c)
}
console.log(c)

