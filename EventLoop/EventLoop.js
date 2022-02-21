const foo = () => console.log("foo");

const bar = () => console.log("bar");

const baz = () => {
    console.log("I am the first one");
    setTimeout(bar, 0);
    new Promise((resolve) => resolve("I am promise")).then(val => console.log(val));
    console.log("check")
    foo();;
}

baz();