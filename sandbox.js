var character = "Muso Umarkulov";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var age = 29;
var isBlackBelt = false;
//age = 'black';
age = 40;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(44));
//Arrays
var names = ["muso", "mehrona", "shukrona"];
names.push("mushtariy");
//names.push(44);
names[3] = "jojo";
var numbers = [11, 22, 33, 44];
numbers.push(24);
console.log(numbers);
var mixedArray = ["ken", 3, "bob", 88, true];
mixedArray.push("jason");
mixedArray.push(5);
mixedArray["bark"];
console.log(mixedArray);
//Objects
var boy = {
    firstName: "Muso",
    lastName: "Umarkulov",
    age: 3,
    favSuperHero: "Spiderman",
    skills: ["running", "jumping", "climbing"],
};
boy.age = 7;
boy.firstName = "Musobobo";
console.log(boy);
