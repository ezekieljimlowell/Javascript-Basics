Promise.all([
    new Promise(resolve => setTimeout(() => {
        resolve("promise1")
    }, 1000)),
    new Promise(resolve => setTimeout(() => {
        resolve("promise2")
    }, 1000)),
    new Promise(resolve => setTimeout(() => {
        resolve("promise3")
    }, 1000))
]).then(val => val.map(element => console.log(element)));

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
];

let request = urls.map(async (req) => await fetch(req));

Promise.all(request).then(responses => responses.map(response => console.log(response.url, response.status)));






