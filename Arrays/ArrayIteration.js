let students = [
    {
        'id': 001,
        'f_name': 'Alex',
        'l_name': 'B',
        'gender': 'M',
        'married': false,
        'age': 22,
        'paid': 250,
        'courses': ['JavaScript', 'React']
    },
    {
        'id': 002,
        'f_name': 'Ibrahim',
        'l_name': 'M',
        'gender': 'M',
        'married': true,
        'age': 32,
        'paid': 150,
        'courses': ['JavaScript', 'PWA']
    },
    {
        'id': 003,
        'f_name': 'Rubi',
        'l_name': 'S',
        'gender': 'F',
        'married': false,
        'age': 27,
        'paid': 350,
        'courses': ['Blogging', 'React', 'UX']
    },
    {
        'id': 004,
        'f_name': 'Zack',
        'l_name': 'F',
        'gender': 'M',
        'married': true,
        'age': 36,
        'paid': 250,
        'courses': ['Git', 'React', 'Branding']
    }
];

//filter
const filtered = students.filter((element) => element.age > 30);
console.log(filtered);

//map
const mapped = students.map((element) => element.courses);
console.log(mapped);

//reduce
const reduced = students.reduce((accumulator, student, currentIndex, array) => {
    accumulator = accumulator + student.paid;
    return accumulator;
}, 0)
console.log(reduced);

//some
let some = students.some(element => element.paid > 300);
console.log(some);

//every
let every = students.every(element => element.age > 30);
console.log(every);

//find
let findElement = students.find(element => element.age > 30);
console.log(findElement);

//findIndex
let findIndex = students.findIndex(element => element.age > 35);
console.log(findIndex);

//at is used to access array by using negative index
const arrayOfPlaces = ["Dubai", "Australia", "Tibet", "Thailand"];
console.log(arrayOfPlaces.at(-1));
console.log(arrayOfPlaces.at(-4));

//foreach does not mutate unless 
arrayOfPlaces.forEach((element) => console.log(element));
arrayOfPlaces.forEach((element, index) => element[index] = "hello", arrayOfPlaces);
console.log(arrayOfPlaces);
