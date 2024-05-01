function firstName(fname) {
  return function (lname) {
    console.log(`${fname} ${lname}`);
  };
}

/* firstName("Hemant")("Rajurkar");
 */

var x = firstName("Hemant");
x("Raj"); //x will return the child function
