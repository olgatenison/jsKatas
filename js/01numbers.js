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
/* 9 Determine the area of the largest square that can fit inside a circle with radius r.*/

function areaLargestSquare(r) {
  const d = r + r;
  return Math.pow(d, 2) / 2;
  // return ((r + r) * (r + r)) / 2;
}

/*Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.*/

function digits(n) {
  return n.toString().length;
}

/*Very simple, given an integer or a floating-point number, find its opposite.
Examples:
1: -1
14: -14
-34: 34*/

function opposite(number) {
  return number * -1;
}
/*You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.
Considering these factors, write a function that tells you if it is possible to get to the pump or not.
Function should return true if it is possible and false if not*/
/*const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (fuelLeft * mpg >= distanceToPump) {
    return true;
  } else {
    return false;
  }
};
*/

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  result = fuelLeft * mpg >= distanceToPump ? true : false;
  return result;
};

/*You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.*/

function otherAngle(a, b) {
  return 180 - (a + b);
}

/*Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
This function should return a number (final grade). There are four types of final grades:
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases*/

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

/*This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.*/

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}

//  return n % 2 == 0 ? n * 8 : n * 9
/*Perimeter sequence The first three stages of a sequence are shown.
blocks The blocksize is a by a and a ≥ 1.
What is the perimeter of the nth shape in the sequence (n ≥ 1) ?*/

function perimeterSequence(a, n) {
  let result = n * a * 2 + 2 * n * a;
  return result;
}
//return 4 * n * a;
