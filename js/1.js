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
lastElementIndex	Индекс последнего элемента масcива fruits через длина_массива - 1
lastElement	Значение последнего элемента массива*/

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

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
