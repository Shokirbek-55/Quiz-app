// const animal = {
//  age: 20;
//  name: "Reks",
//  eat() {
//   console.log(`${this.name} is eating...`);
//  },

// };


// const age = animal.age;
// const name = animal.name;
// const eat = animal.["eat"];



// // const {age, name, eat} = animal;
// // const person = { name:"shokirbek"};
// // const {name} = person;

// Object Destructuring
const animal = {
	age: 20,
	name: "Reks",
	eat() {
		console.log(`${this.name} is eating...`);
	},
};

// const age = animal.age;
// const name = animal.name;
// const eat = animal["eat"];

// const { name, eat, age } = animal;

const animalAge = animal.age;
const { age: animalAge } = animal;

const myName = "arslonbek";
const person = { name: myName };