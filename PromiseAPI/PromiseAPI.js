Promise.all([
    new Promise(resolve => setTimeout(() => {
        resolve("promise1")
    }, 1000)),
    new Promise((resolve, reject) => setTimeout(() => {
        resolve("promise2")
    }, 1000)),
    new Promise(resolve => setTimeout(() => {
        resolve("promise3")
    }, 1000))
]).then(val => val.map(element => console.log(element))).catch(err => console.log(err));

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let request = urls.map(req => fetch(req));

Promise.all(request).then(responses => responses.map(response => console.log(response.url, response.status)));

let names = ['iliakan', 'remy', 'jeresig'];
let request1 = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(request1).then(responseArray => responseArray.map(data => console.log(data.url, data.status)))

let URL2 = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'http://no-such-url',
];

let requestArray1 = URL2.map(responseURL => fetch(responseURL));

Promise.allSettled(requestArray1).then(responses => responses.map(response => console.log(response.value.url)).catch(err => console.log(err)));




