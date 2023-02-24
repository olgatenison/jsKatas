/*Задание 1
Запиши условие в инструкции if так, чтобы функция работала правильно. */

function checkAge(age) {
  if (age >= 18) {
    return "You are an adult";
  }

  return "You are a minor";
}
/*Задание 2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line

  let message;

  if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }

  return message;
  // Change code above this line
}

Функция checkPassword получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения.

Проведи рефакторинг кода функции checkPassword используя паттерн «ранний возврат»:

удали переменную message
удали else
код должен работать так же, как и до оптимизации
*/

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";

  if (password === ADMIN_PASSWORD) {
    return "Welcome!";
  }
  return "Access denied, wrong password!";

  // return (password === ADMIN_PASSWORD) ? "Welcome!" : "Access denied, wrong password!";
}

/*Задание3
Функция checkStorage проверяет возможность оформления заказа и возвращает сообщение о результате. Она принимает два параметра, значения которых будут задаваться во время её вызова.

available - доступное количество товаров на складе
ordered - количество единиц товара в заказе
Проведи рефакторинг кода функции checkStorage используя паттерн «ранний возврат».

function checkStorage(available, ordered) {
  // Change code below this line
  let message;

  if (ordered === 0) {
    message = "Your order is empty!";
  } else if (ordered > available) {
    message = "Your order is too large, not enough goods in stock!";
  } else {
    message = "The order is accepted, our manager will contact you";
  }

  return message;
  // Change code above this line
}*/

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty!";
  }

  if (ordered > available) {
    return "Your order is too large, not enough goods in stock!";
  }

  return "The order is accepted, our manager will contact you";
}

/*Задание 4
Объяви переменную fruits и присвой ей массив фруктов - строк "apple", "plum", "pear" и "orange".
 */
const fruits = ["apple", "plum", "pear", "orange"];

/*Задание 5
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.
 */

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[fruits.length - 1];

/*Задание 6
Переопредели значения элементов с индексами 1 и 3. Замени "plum" на "peach", а "orange" на "banana".*/

fruits[1] = "peach";
fruits[3] = "banana";

/*Задание 7
Объяви переменную fruitsArrayLength и присвой ей длину массива fruits используя свойство length.*/

const fruitsArrayLength = fruits.length;

/*Задание 8
Объяви две переменные:
Имя переменной	  Ожидаемое значение
lastElementIndex	Индекс последнего элемента масcива 
                  fruits через длина_массива - 1
lastElement	      Значение последнего элемента массива*/

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

/*Задание 9
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.*/

// function getExtremeElements(array) {
//   return [array[0], array[array.length - 1]];}

/*Задание 10
Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.*/

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }

/*Задание 11
Сервису гравировки украшений нужна функция, которая бы автоматически считала цену гравировки, в зависимости от количества слов и цены за слово.
Объявлена функция calculateEngravingPrice(message, pricePerWord). Эта функция принимает строку, состоящую из слов разделённых только пробелами (параметр message) и цену гравировки одного слова (параметр pricePerWord).
Напиши тело функции, чтобы она возвращала общую стоимость гравировки всех слов в строке.*/

function calculateEngravingPrice(message, pricePerWord) {
  let words = message.split(" ");
  let wordCount = words.length;
  let totalPrice = wordCount * pricePerWord;
  return totalPrice;
}

/*Задание 12
Дополни код функции makeStringFromArray(array, delimiter) так, чтобы она возвращала в переменной string результат соединения элементов массива array c разделителем delimiter - строку.*/

function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);
  return string;
}

/*Задание 13
Термин slug - это человеко-понятный уникальный идентификатор, который используется в веб-разработке для создания читабельных URL-адресов.
Например, вместо того чтобы пользователь увидел в адресной строке mysite.com/posts/1q8fh74tx, можно сделать slug из названия статьи. В результате адрес получится более приятным для восприятия: mysite.com/posts/arrays-for-begginers.

Внимание
Slug это всегда строка в нижнем регистре, слова которой разделены тире.

Напиши функцию slugify(title) которая принимает заголовок статьи, параметр title, и возвращает slug, созданный из этой строки.
Значением параметра title будут строки, слова которых разделены только пробелами
Все символы slug должны быть в нижнем регистре
Все слова slug должна быть разделены тире*/

function slugify(title) {
  let lowerTitle = title.toLowerCase();
  let lowerWords = lowerTitle.split(" ");
  let slug = lowerWords.join("-");

  return slug;

  // return title.toLowerCase().split(" ").join("-");
}

slugify("How to become a JUNIOR developer in TWO WEEKS");

/*Задание 14
Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его. Копия делается от begin и до, но не включая, end - индексы элементов исходного массива.

Если begin и end не указаны, будет создана полная копия исходного массива.
Если не указан end, копирование будет от start и до конца исходного массива.
Если значение start отрицательное, а end не указан, то будут скопированы последние N элементов.


Дополни код так, чтобы переменные содержали частичные копии исходного массива fruits.
firstTwoEls - массив из первых двух элементов
nonExtremeEls - массив из всех элементов кроме первого и последнего
lastThreeEls - массив из трёх последних элементов*/

// const fruits = ["apple", "plum", "pear", "orange", "banana"];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

/*Задание 15
Дополни код так, чтобы в переменной allClients получился массив всех элементов массивов oldClients и newClients.
const allPlanets = firstArray.concat(secondArray, thirdArray);
*/

const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
const newClients = ["Peach", "Houston"];
const allClients = oldClients.concat(newClients);

/*Задание 16
Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.

Если количество элементов нового массива больше maxLength, функция должна вернуть копию массива длиной maxLength элементов. В противном случае функция должна вернуть новый массив целиком.
*/

function makeArray(firstArray, secondArray, maxLength) {
  const newArr = firstArray.concat(secondArray);
  if (newArr.length > maxLength) {
    return newArr.slice(0, maxLength);
  } else {
    return newArr;
  }
}

/*Задание 17
Дополни цикл for так, чтобы он логировал все целые числа в диапазоне от start до end включительно.
*/

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

/*Задание 18
Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа. Например, если number равно 3, то сумма это 1 + 2 + 3, то есть 6.
*/

function calculateTotal(number) {
  let total = 0;
  for (let i = 1; i <= number; i++) {
    total += i;
  }
  return total;
}
/*Задание 19
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.
*/

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

/*Задание 20
Напиши функцию calculateTotalPrice(order), которая принимает один параметр order - массив чисел, и рассчитывает общую сумму его элементов. Общая сумма элементов должна сохраняться в переменной total, которая возвращается, как результат работы функции.
*/

function calculateTotalPrice(order) {
  let total = 0;
  for (let i = 0; i < order.length; i += 1) {
    const item = order[i];
    total += item;
  }
  return total;
}

/*Задание 21
Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
*/
findLongestWord("Google do a roll");

function findLongestWord(string) {
  let words = string.split(" ");
  let longerstWord = "";
  for (let i = 0; i < words.length; i += 1) {
    const word = words[i];
    console.log(word);
    longerstWord = longerstWord.length > word.length ? longerstWord : word;
  }

  return longerstWord;
}

/*Задание 22
Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов. 
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.
*/

function createArrayOfNumbers(min, max) {
  const numbers1 = [];
  for (let i = min; i <= max; i++) {
    numbers1.push(i);
  }

  return numbers1;
}

/*Задание 23
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив, в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
*/

function filterArray(numbers, value) {
  const newNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      newNumbers.push(numbers[i]);
    }
  }
  return newNumbers;
}

/*Задание 24
Метод includes(value) проверяет есть ли в массиве элемент со значением value и возвращает true или false соответственно. Область применения этого метода сводится к ситуациям, когда необходимо проверить есть ли элемент в массиве и не важна его позиция (индекс).

Функция checkFruit(fruit) принимает строку с названием фрукта (параметр fruit), и проверяет есть ли такой фрукт в массиве fruits.
Дополни код функции так, что если:
фрукт есть в массиве, то функция возвращает true;
фрукта нет в массиве, то функция возвращает false.
*/

function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit);
}

/*Задание 25
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
*/

function getCommonElements(array1, array2) {
  let newArr = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
}

/*Задание 26
Инструкция for...of объявляет цикл, перебирающий итерируемые объекты, такие как массивы и строки. Тело цикла будет выполняться для значения каждого элемента. Это хорошая замена циклу for, если не нужен доступ к счётчику итерации.
for (const variable of iterable) {
  // тело цикла
}
variable — переменная, которая будет хранить значение элемента на каждой итерации, iterable — коллекция, которая имеет перечислимые элементы, например массив

Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.
*/

function calculateTotalPrice(order) {
  let total = 0;

  for (const item of order) {
    total += item;
  }

  return total;
}

/*Задание 27
Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
  // Change code above this line
}
*/

function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  return filteredNumbers;
}

/*Задание 28
Дополни выражения остатка от деления так, чтобы код проходил тесты.
*/

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

/*Задание 29
Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).
*/

function getEvenNumbers(start, end) {
  const evenNumbers = [];

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }

  return evenNumbers;
}

/*Задание 30
Прервать выполнение цикла можно в любой момент. Для этого существует оператор break, который полностью прекращает выполнение цикла и передаёт управление на строку за его телом.
В примере ищем число 3. Как только выполнится условие if, цикл прекратит своё выполнение (будет прерван).
for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое делится на 5 без остатка.
*/

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

/*Задание 31
Если цикл находится в теле функции, то оператор break не прекращает выполнение функции, а только прервёт цикл. Для того чтобы прерывать выполнение сразу цикла и функции есть оператор return.
В примере ищем число 3. Как только выполнится условие if, делаем возврат, который прервёт выполнение цикла и функции.

function fn() {
  for (let i = 0; i <= 5; i += 1) {
    console.log(i);

    if (i === 3) {
      console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
      return i;
    }
  }

  // Этот console.log не выполнится
  console.log("Лог после цикла в теле функции");
}
const result = fn();
console.log("Лог после выхода из функции");
console.log(`Результат выполнения функции ${result}`);


Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:
возвращала первое число от start до end, которое делится на divisor без остатка
не использовала оператор break
не использовала переменную number
*/

function findNumber(start, end, divisor) {
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      return number;
    }
  }

  return number;
}

/*Задание 32
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.
При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).*/

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
