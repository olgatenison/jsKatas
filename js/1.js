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
lastElement	      Значение последнего элемента массива

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];*/

/*Задание 9
Напиши функцию getExtremeElements(array) которая принимает один параметр array - массив элементов произвольной длины. Функция должна возвращать массив из двух элементов - первого и последнего элемента параметра array.

function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
}*/

/*Задание 10
Дополни код функции splitMessage(message, delimiter) так, чтобы она возвращала в переменной words результат разделения строки message по разделителю delimiter - массив строк.

function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);
  return words;
}*/

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

/*Задание 32
Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если есть и false в противном случае.

При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение). */

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
