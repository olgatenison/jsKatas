/*Arrow style Functions
Come here to practice the Arrow style functions Not much else to say good luck!
Details
You will be given an array of numbers which can be used using the String.fromCharCode() (JS), method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
Examples
These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) 


var ArrowFunc = function (arr) {
  return arr.map((num) => String.fromCharCode(num)).join("");
};
*/

/*DESCRIPTION:
You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.
Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
Examples (input -> output)
* [1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
* [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]


function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b)
}
*/

function mergeArrays(arr1, arr2) {
  const oneArr = [...arr1, ...arr2]; // merge both arrays
  const sortedArr = oneArr.sort((a, b) => a - b); // sort
  const clearArr = [...new Set(sortedArr)]; // remove duplicates
  return clearArr;
}

const arr1 = [1, 3, 5, 7, 9];
const arr2 = [10, 8, 6, 4, 2];
const result = mergeArrays(arr1, arr2);

console.log(result); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
