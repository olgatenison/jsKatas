// -------------------------------------
// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// function reverseWords(str) {
//   let words = str.split(" ");
//   let reversedWords = [];

//   for (let word of words) {
//     let reversedWord = word.split("").reverse().join("");
//     reversedWords.push(reversedWord);
//   }
//   return reversedWords.join(" ");
// }

// ----------------------------------
// reverseWords("The quick brown fox jumps over the lazy dog.");
// Implement a function which convert the given boolean value into its string representation.
// Note: Only valid inputs will be given.

// function booleanToString(b) {
//   return b + "";
// }

// function boolToString(value) {
//   return value.toString();
// }

// function boolToString(value) {
//   if (value === true) {
//     return "true";
//   } else {
//     return "false";
//   }
// }
// console.log(boolToString(true));
// console.log(boolToString(false));

// ----------------------------------
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// function makeNegative(number) {
//   return number >= 0 ? -number : number;
// }

// console.log(makeNegative(15));

// -Math.abs(number); Math.abs(num) вычисляет абсолютное значение входного числа num. Абсолютное значение - это положительное значение числа, независимо от его исходного знака.

// -----------------------------------
// Write function bmi that calculates body mass index (bmi = weight / height2).
// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   let b = weight / (height * height);

//   if (b <= 18.5) {
//     return "Underweight";
//   } else if (b <= 25.0) {
//     return "Normal";
//   } else if (b <= 30.0) {
//     return "Overweight";
//   } else {
//     return "Obese";
//   }
// }

// function bmi(weight, height) {
//   let b = weight / (height * height);
//   let category = "";

//   switch (true) {
//     case b <= 18.5:
//       category = "Underweight";
//       break;
//     case b <= 25.0:
//       category = "Normal";
//       break;
//     case b <= 30.0:
//       category = "Overweight";
//       break;
//     default:
//       category = "Obese";
//       break;
//   }
//   return category;
// }

// console.log(bmi(175, 150));

// -------------------------------------
// DESCRIPTION:
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)
// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  let strL = str.toLowerCase();
  for (let i = 0; i < strL.length; i++) {
    if (strL.slice(i + 1).includes(strL[i])) {
      return false;
    }
  }
  return true;
}

// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }
// str.toUpperCase() - Здесь мы приводим всю строку к верхнему регистру. Это делается для того, чтобы игнорировать регистр букв при проверке на изограмму.
// new Set(...) - Затем мы создаем новый объект Set из букв строки в верхнем регистре. Объект Set хранит только уникальные элементы, и он автоматически удаляет повторяющиеся элементы из коллекции.
// .size - Свойство size объекта Set показывает количество уникальных элементов в нем.
// str.length - Длина исходной строки.

// --------------------------------
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// Examples
// "312" should return "333122"
// "102269" should return "12222666666'

function explode(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].repeat(Number(s[i]));
    // Повторяем цифру 's[i]' 'Number(s[i])' раз
  }
  return result;
}

console.log(explode("312")); // Вывод: "333122"
console.log(explode("102269")); // Вывод: "12222666666"

// function explode(s) {
//   return s.split("").map((e) => e.repeat(+e)).join("");
// }

// s.split(""): Этот метод разбивает строку s на массив отдельных символов. Таким образом, строка "312" становится массивом ["3", "1", "2"].
// .map((e) => e.repeat(+e)): Это метод массива, который применяет указанную функцию (в данном случае, стрелочная функция) к каждому элементу массива. В данной функции e представляет отдельный символ из массива.
// e.repeat(+e): Здесь для каждого символа e, мы используем метод repeat(), чтобы повторить символ e определенное количество раз. Оператор + перед e преобразует символьную цифру в числовое значение, так что '3' становится 3.
// .join(""): После применения map, у нас есть массив строк, каждая из которых состоит из повторяющихся символов. Метод join("") объединяет все элементы массива обратно в строку, без разделителей.
