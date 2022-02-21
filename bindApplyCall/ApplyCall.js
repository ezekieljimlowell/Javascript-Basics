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
const binded1 = tractor.disply.bind(tractor);
console.log(binded1("2 lakhs rupees"));

const display = {
    print: function(rate, weight) {
        return `${this.parts} has rate of ${rate} and weight is ${weight}`;
    }
}

const materialName = {
    parts: "bush"
}

const applyWithAnother = display.print.apply(materialName, ["300 rupees", "1 kg"]);
console.log(applyWithAnother);
const callWithAnotherObj = display.print.call(materialName, "100 rupees", "500 grams");
const binded2 = display.print.bind(materialName);
console.log(binded2("2 rupees", "5 grams"));
