//1. error outside promise
function errorOutsidePromise() {
    throw new Error("error outside promise");
    return new Promise((resolve, reject) => resolve("resolve"));
}

try {
    errorOutsidePromise().then(val => console.log(val))
        .catch(err => console.log(err))

}
catch (e) {
    console.log(`catch error ${e}`); //error is displayed here
}

//2. error inside promise
function errorInsidePromise() {
    return new Promise((resolve, reject) => {
        throw new Error("error inside promise");
        resolve(10)
    })
}

try {
    errorInsidePromise().then(val => console.log(val))
        .catch(err => console.log(err)) //error is displayed
}
catch (e) {
    console.log(e)
}

//3. calling reject
function callingReject() {
    return new Promise((resolve, reject) => reject("calling Reject"));
}

try {
    callingReject().then(val => console.log(val))
        .catch(err => console.log(err)) //error displayed here
}
catch (e) {
    console.log(e)
}

//4. catch is missed while reject
/*function catchIsMissed() {
    return new Promise((resolve, reject) => reject("catch missed"));
}

try {
    catchIsMissed().then(val => console.log(val)) //Uncaught (in promise) catch missed
}
catch(e) {
    console.log(e)
}*/

//5. no need catch when promise resolved
function noNeedCatch() {
    return new Promise((resolve, reject) => resolve("Promise resolve"));
}

try {
    noNeedCatch().then(val => console.log(val))
}
catch (e) {
    console.log(e)
}

//6. Async function with synchronous error
async function errorInsideAsync() {
    throw new Error("error inside async function");
}

try {
    errorInsideAsync().then(val => console.log(val))
        .catch(err => console.log(err)) //error displayed here
}
catch (e) {
    console.log(e)
}

const inner = () => {
    return new Promise(resolve => resolve("async with no errors"));
}

//7. 
async function withNoErrors() {
    console.log(inner());
    const result = await inner();
    console.log(result);
    return result;
}

try {
    withNoErrors().then(val => console.log(val)) //value displayed here
        .catch(err => console.log(err))
}
catch (e) {
    console.log(e)
}

//8. error inside await
const errorInner = () => {
    throw new Error("error inside await");
    return new Promise(resolve => resolve("async with error inside await"));
}

async function withErrorInsideAwait() {
    const result = await errorInner();
    return result;
}

try {
    withErrorInsideAwait().then(val => console.log(val))
        .catch(err => console.log(err)) //error displayed here
}
catch (e) {
    console.log(e)
}

// error inside await promise


const errorInnerPromise = () => {
    return new Promise(resolve => {
        throw new Error("error inside await's promise");
        resolve("something");
    })
}

async function withErrorInsideAwaitPromise() {
    const result = await errorInnerPromise();
    return result;
}

try {
    withErrorInsideAwaitPromise().then(val => console.log(val))
        .catch(err => console.log(err)) //error displayed here
}
catch (e) {
    console.log(e)
}

//calling reject inside await promise
const innerReject = () => new Promise((_, reject) => reject("reject inside await promise"));

async function callingRejectInsideAwait() {
    const result = await innerReject();
    return result;
}

try {
    callingRejectInsideAwait().then(val => console.log(val))
        .catch(err => console.log(err)) //reject displayed here
}
catch (e) {
    console.log(e)
}



