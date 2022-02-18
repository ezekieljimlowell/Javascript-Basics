//toString() js supports automatic toString() when display using dom

const minerals = ["calcium", "iron", "lead", "nickel"];
console.log(minerals.toString());
console.log(minerals);
document.getElementsByClassName("automatic")[0].innerHTML = minerals;

//join method
console.log(minerals.join(","));

//mutating methods
const pushIndex = minerals.push("earth");
console.log(minerals, pushIndex);
const poppedItem = minerals.pop();
console.log(minerals, poppedItem);

const removedFirst = minerals.shift();
console.log(minerals, removedFirst);
const unshiftIndex = minerals.unshift("venus");
console.log(unshiftIndex, minerals);

//using length
console.log(minerals.length);
minerals[minerals.length] = "baxite";
console.log(minerals);

//don't use delete it makes undefined holes in the array
delete minerals[0];
console.log(minerals, minerals[0]);
document.getElementsByClassName("automatic")[1].innerHTML = minerals;

//shallow prevent mutation concat
const cats = ["tiger", "lion", "puma", "jaguar"];
const mediumCat = ["leaopard", "cheetah"];
const concate = mediumCat.concat(cats, "cat", "lynx");
console.log(cats, mediumCat, concate);

//splice will mutate
const places = ["ooty", "chennai", "delhi", "tirunelveli"];
const splice1 = places.splice(1, 1, "koyambedu", "bangalore");
console.log(places, splice1);
const splice2 = places.splice(3, 1);
console.log(places, splice2);

//slice shallow mutation
const str1 = ["red", "blue", ["black", "white"]];
const slice1 = str1.slice(1);
console.log(str1, slice1);
slice1[0] = "sky";
slice1[1][0] = "less";
console.log(slice1, str1); //deeply mutated
const slice2 = str1.slice(1, 2);
console.log(slice2, str1);
const slice3 = str1.slice(-3, -1);
console.log(str1, slice3);

//Array destructuring
const nature = ["sea", "sky", "mountains"];
const [water, img, stone] = nature;
console.log(water, img, stone);

const musicalInstrument = ["tabela", "piano", "drums"];
const [old, , solid, stringInstrument = "violin"] = musicalInstrument;
console.log(old, solid, stringInstrument);

let b = "mills";
let c = "skills";
[b, c] = [c, b];
console.log(b, c); //swap
console.log([...nature, ...musicalInstrument]);

//Array.isArray()
console.log(Array.isArray(musicalInstrument), Array.isArray(0));

const emotions = ['🙂', '😍', '🙄', '😟'];
emotions.sort();
console.log(emotions, Array.isArray(emotions));

//fill
musicalInstrument.fill("guitar", 2, 3);
console.log(musicalInstrument);

//includes
console.log(musicalInstrument.includes("guitar"), musicalInstrument.includes("veena"));

//indexOf and lastIndexOf
const seaCreatures = ["fish", "starfish", "fish", "octopus"]
console.log(seaCreatures.indexOf("fish"));
console.log(seaCreatures.lastIndexOf("fish"));
console.log(seaCreatures.indexOf("donkey"));

//Array.from() is static method in Array
console.log(document.getElementsByTagName("li"));
const li = document.getElementsByTagName("li");
const arrayOfLi = Array.from(li);
console.log(arrayOfLi);

const duplicate = ["meter", "cm", "mm", "mm", "meter", ["100", 12333]];
console.log(Array.from(new Set(duplicate)));

function* generator() {
    yield 3;
    yield 4;
    yield 2;
}

console.log(Array.from(generator()))

const str12 = "you are welcome";
console.log(Array.from(str12));

const dup1 = Array.from(duplicate);
console.log(dup1 === duplicate);

console.log(Array.from(li, li => li.textContent = "dreamer"));

const amp = Array.from({ length: 5}, n => 2);
console.log(amp);

//Array.of
const arrayOf = Array.of("rectangle", "square", "rhombus", "pyramid", "hexagon");
console.log(arrayOf);



