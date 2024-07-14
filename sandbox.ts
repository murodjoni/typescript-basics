const character = "Muso Umarkulov";

console.log(character);

const inputs = document.querySelectorAll("input");

console.log(inputs);

inputs.forEach(function (input) {
  console.log(input);
});

let age = 29;

let isBlackBelt = false;

//age = 'black';
age = 40;

isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(44));

//Arrays
let names = ["muso", "mehrona", "shukrona"];
names.push("mushtariy");
//names.push(44);
names[3] = "jojo";

let numbers = [11, 22, 33, 44];

numbers.push(24);
console.log(numbers);

let mixedArray = ["ken", 3, "bob", 88, true];
mixedArray.push("jason");
mixedArray.push(5);
mixedArray["bark"];
console.log(mixedArray);

//Objects
let boy = {
  firstName: "Muso",
  lastName: "Umarkulov",
  age: 3,
  favSuperHero: "Spiderman",
  skills: ["running", "jumping", "climbing"],
};

boy.age = 7;
boy.firstName = "Musobobo";
console.log(boy);
