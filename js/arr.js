// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers) {
//   let arr = numbers.split(" ").map(Number); // Разделите входную строку и преобразуйте в числа
//   let sortedArr = arr.sort((a, b) => b - a); // Отсортируйте массив в порядке убывания
//   let highest = sortedArr[0]; // Получите самое большое число (первый элемент)
//   let lowest = sortedArr[arr.length - 1]; // Получите самое маленькое число (последний элемент)
//   return `${highest} ${lowest}`;
// }

// function highAndLow(numbers){
//     var arr = numbers.split(' ').sort(function(a, b) { return a - b });
//     return arr[arr.length -1] + ' ' + arr[0];
//   }

// highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

// Check if a string is a Palindrome
// Write a function that takes a single string as input and returns T if the string is a palindrome, and F otherwise. A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Allowances may be made for adjustments to capital letters, punctuation, and word dividers.

function processInput(string1) {
  //tolowerCase. delited unnided simbols
  string1 = string1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // the same but revese
  let string2 = string1.split("").reverse().join("");

  //is eaquewell
  return string1 === string2 ? "T" : "F";
}
processInput("A man, a plan, a canal: Panama");

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
// Mind the input validation.

function sumArray(array) {
  if (!array || array.length < 3) {
    return 0;
  }

  // Сортировка массива по возрастанию
  const sortedArray = array.slice().sort((a, b) => a - b);

  // Суммируем элементы массива, исключая первый и последний
  let total = 0;
  for (let i = 1; i < sortedArray.length - 1; i++) {
    total += sortedArray[i];
  }

  return total;
}

function sumArray(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) {
      return a - b;
    });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
}
