const m = {
    val: "train",
    print: function() {
        return this.val;
    }
}

const unbound = m.print;
console.log(unbound());

const binded = m.print.bind(m);
console.log(binded());

const b = {
    member: "ovan",
    display: function(mark) {
        console.log(this.member, mark);
    }
}

const bindedB = b.display.bind(b, 10);
setTimeout(bindedB, 1000);
