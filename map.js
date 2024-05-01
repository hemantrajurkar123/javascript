/* let arr = [5, 6, 7, 21];

arr.map(function (element, index) {
console.log(element)
  console.log(index);
}); */
let Student = [
  {
    name: "Amit",
    course: "Java",
  },

  {
    name: "Sumit",
    course: "Android",
  },

  {
    name: "Hemant",
    course: "ReactJS",
  },
  {
    name: "Manish",
    course: "Testing",
  },
];

/* let Student = [1, 2, 3, 4];
 */

/* let Student = ["Sachin", "Rahul", "Amit"];
 */ let arr2 = Student.map(function (value) {
  return `My name is ${value.name}. My course is ${value.course} <br/>`;
});
console.log(arr2);
document.getElementById("content").innerHTML = arr2;
