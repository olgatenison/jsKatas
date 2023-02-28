/*For this kata you will have to forget how to add two numbers.
It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016 - 208+248 = 4416
In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)
You may assume both integers are positive integers.
______________________________________________________________________________
padStart() - это метод строк в JavaScript, который добавляет заданный символ в начало строки до указанной длины.
Например:

const str = "5";
const paddedStr = str.padStart(4, "0");
console.log(paddedStr); // "0005"
*/

function add(num1, num2) {
  // делаем из числа строку
  let a = num1.toString();
  let b = num2.toString();

  // b = num2.toString().split("").reverse();
  //   console.log(typeof b);
  //   console.log(typeof a);

  // равная длинна строки
  let paddedA = a.padStart(b.length, "0");
  let paddedB = b.padStart(a.length, "0");
  //    console.log(paddedB);
  //    console.log(paddedA);

  // делаем из строки массив чисел
  let arrA = paddedA.split("");

  let arrB = paddedB.split("");

  // итерииуем по каждому и прибавляем с одинаковым индексом
  let sum = [];

  for (let i = 0; i < arrA.length; i++) {
    // результат пушим в новый масив
    sum.push(Number(arrA[i]) + Number(arrB[i]));
  } // склеиваем массив

  let result = Number(sum.join(""));
  return result;
  console.log(result);
}

//делаем из этого число

add(1222, 30277); //31499
