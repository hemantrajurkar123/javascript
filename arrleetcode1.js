/* Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.

Example 1:

Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order. */

/* let arr1 = [3, 2, 6, 5, 4];
arr1.sort((x, y) => x - y);
console.log(arr1); */

let ages = [20, 25, 35, 10, 8];

let adult = ages.filter(isAdult);

function isAdult(age) {
  return age >= 18;
}

console.log(adult);
