function fn() {
  console.log("Hello");
}

//pass a function in settimeout

setTimeout(fn, 1000);

//another way is to crate a function in setTimeout function

setTimeout(() => {
  console.log("I made a delay of 3 seconds");
}, 3000);
