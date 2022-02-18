const str = ["calcium", "iron", "lead", "nickel", "ant"];
str.sort();
console.log(str); //mutate

str.reverse();
console.log(str);

const num = [43,12,4,65, 13, 42];
num.sort((a,b) => a-b);
console.log(num);
num.sort((a,b) => b-a);
console.log(num)

console.log(Math.max.apply(null, num));
console.log(Math.max.call(null, 1,2,3,3,4554));

function maximum(arr) {
    let len = arr.length;
    let max = -Infinity;
    while(len--) {
        if(arr[len]>max) {
            max = arr[len];
        }
    }
    console.log(max);
}
maximum(num);

function minimum(arr) {
    let len = arr.length;
    let min = Infinity;
    while(len--) {
        if(arr[len] < min) {
            min = arr[len];
        }
    }
    console.log(min);
}

minimum(num);