//the function which is passes as an argument to another function is called as a callback function
//it helps to do async things in sync language such as JS
//the function in which the callback function is passed is called as a higher order function

//create a first callback function

function sayHello() {
  document.write("Say Hello");
}

//create a second callback fucntion

function sayHi() {
  document.write("Say Hi");
}

//creating a function definition for the higher order function

function add(num1, num2, callback) {
  document.write(num1 + num2);
  callback();
}

//calling the function

add(4, 5, sayHi);
add(5, 5, sayHello);
