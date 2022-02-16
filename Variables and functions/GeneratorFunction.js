function* adder(m) {
    yield m;
    yield m + 10;
    yield m + 3;
    return m;
}

var sum = adder(2);

console.log(sum, sum.next(), sum.next().value, sum.next().value, sum.next(), sum.next().value, sum.next().value)

function* innerGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
    return i + 5;
}

function* outerGen(a) {
    yield a;
    yield* innerGenerator(a);
    yield a + 30;
    return ++a;
}

const result = outerGen(20);

console.log(result.next().value, result.next().value, result.next().value, result.next().value, result.next().value, result.next().value, result.next().value)

//passing arguments to generators
function* arg() {
    console.log(1);
    console.log(2, yield);
    console.log(3, yield);
}

var argumentsPassed = arg();

console.log(argumentsPassed.next(), argumentsPassed.next("India"), argumentsPassed.next("chennai"), argumentsPassed.next("turkey"))

//generators as a method in object
class Obj {
    *generator() {
        yield 3;
        yield 1;
        yield 0;
    }
}

const obj1 = new Obj();
const gen1 = obj1.generator();

console.log(gen1.next().value, gen1.next().value, gen1.next().value, gen1.next().value)

