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

const URL = "https://jsonplaceholder.typicode.com/users";
const divElement = document.getElementById("userData");
const subElement = document.createElement("ol");
divElement.appendChild(subElement);

fetch(URL).then(response => response.json()).then(data => {
    data.map(element => {
        const liElement = document.createElement("li");
        subElement.appendChild(liElement);
        liElement.textContent = element.name;
    });
})


