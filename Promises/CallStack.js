console.log("first");
const numbers = () => console.log("number one");
setTimeout(() => {
    console.log("setTimeout one")
}, 0);
const promise3 = new Promise(resolve => setTimeout(() => {
    resolve(1)
}, 0));
promise3.then(val => console.log(val));
setTimeout(() => {
    console.log("second timeout")
}, 0);
numbers();
console.log("check second or third");
const promise4 = new Promise(resolve => resolve("second promise"));
promise4.then(val => console.log(val));
