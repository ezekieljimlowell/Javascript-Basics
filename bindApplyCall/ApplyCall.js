const tractor = {
    serialNumber: "MEA1121221231223",
    disply: function (rate) {
        return `${this.serialNumber} is sold for ${rate}`;
    }
}

const app = tractor.disply.apply(tractor, ["5 lakhs rupees"]);
console.log(app);
const called = tractor.disply.call(tractor, "10 lakhs rupees");
console.log(called);