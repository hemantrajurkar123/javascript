// source procodrr youtube if else video
const name = prompt("Enter your name");
const age = +prompt("Enter your age");

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

if (age >= 18 && age <= 24) {
  console.log("I am a Student");
} else if (age >= 25 && age <= 60) {
  console.log("I am a working professional");
} else if (age > 60) {
  console.log("I am a retired person");
}

console.log("Program Ended");

// basically the values of name and age are taken from the prompt and stored in the variables nama and age
// Now based on the value of these varibles, if else conditions will be evaluated
// If we write only if statements insted of else if, the execution will check every if condition even if it finds the true condition
// When we write else if, it will check only till the true condition is found
