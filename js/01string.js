/* 5 Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).

Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty. 

function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}
*/
function capitalizeWord(word) {
  word = word[0].toUpperCase() + word.substring(1);
  return word;
}
/* 6 We need a function that can transform a number (integer) into a string.
What ways of achieving this do you know?
Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"

function numberToString(num) {
  // Return a string of the number here!
}
*/

function numberToString(num) {
  return num.toString();
}

/* 7
DESCRIPTION:
Note: This kata is inspired by Convert a Number to a String!. Try that one too.
Description
We need a function that can transform a string into a number. What ways of achieving this do you know?
Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.
Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7

const stringToNumber = function(str){
  // put your code here
  return null;
}
 */

const stringToNumber = function (str) {
  return Number(str);
  // return parseInt(str);
};

function toBinary(n) {
  return Number(n.toString(2));
}
