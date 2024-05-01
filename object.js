//crete an object

let laptop = {
  name: "Lenovo",
  price: 400,
  ram: "8 GB",
};

// It will show [object][object]
/* document.write(laptop);
 */
//to display it properly we have to use for in

/* let p;
 */ for (var p in laptop) {
  document.write(p + ":" + laptop[p] + "<br>");
}
