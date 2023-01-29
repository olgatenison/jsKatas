/*1 Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
Constraint:
1 <= month <= 12

const quarterOf = (month) => {....}
*/

const quarterOf = (month) => {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else {
    return 4;
  }
};
/* 2 Introduction
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.

Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20

function century(year) {
  // Finish this :)
  return;
}
 */

function century(year) {
  return Math.ceil(year / 100);
}

/*3 Task Overview
  Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
  to_binary(1)  should return 1 
  to_binary(5); should return 101 
  to_binary(11); should return 1011 
  Example: toBinary(1);  should return 1 
  toBinary(5); should return 101 
  toBinary(11);  should return 1011
  
  function toBinary(n){
    return n;
  } 
  */

function toBinary(n) {
  return parseInt(n.toString(2));
  // return Number(n.toString(2));
}

/*4 Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }

  //  return number % 2 ? "Odd" : "Even"
}

/* 8 Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string*/

function fakeBin(x) {
  let result = "";
  for (let i = 0; i < x.length; i++) {
    result += x[i] < 5 ? 0 : 1;
  }
  return result;
}

/*
let result = '';
for (let i = 0; i < x.length; i++) {
if (x[i] < 5) {
result += '0';
} else {
result += '1';
}
}
return result; 
*/
