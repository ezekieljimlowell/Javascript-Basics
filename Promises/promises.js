function promiseFunction1() {
    return new Promise((resolve) => resolve(100));
}

promiseFunction1().then(val => console.log(val));

function promiseRejectFunction1() {
    return new Promise((_, reject) => reject("error!"));
}

promiseRejectFunction1().catch(err => console.log(err));

const promise1 = new Promise(resolve => resolve("promise1"));
const promise2 = new Promise((_, reject) => reject("rejected"));

promise1.then(val => console.log(val));
promise2.catch(err => console.log(err));