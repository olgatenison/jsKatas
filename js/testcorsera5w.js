const dishData = [
  {
    name: "Italian pasta",

    price: 9.55,
  },

  {
    name: "Rice with veggies",

    price: 8.65,
  },

  {
    name: "Chicken with potatoes",

    price: 15.55,
  },

  {
    name: "Vegetarian Pizza",

    price: 6.45,
  },
];

const tax = 1.2;

// Implement getPrices()

function getPrices(taxBoolean) {
  for (menu of dishData) {
    let finalPrice;

    if (taxBoolean == true) {
      finalPrice = menu.price * tax;
    } else if (taxBoolean == false) {
      finalPrice = menu.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");

      return;
    }

    console.log(`Dish: ${menu.name} Price: $${finalPrice}`);
  }
}

// Implement getDiscount()

function getDiscount(taxBoolean, guest) {
  getPrices(taxBoolean);

  if (typeof guest === "number" && guest > 0 && guest < 30) {
    let discount = 0;

    if (guest < 5) {
      discount = 5;
    } else if (guest >= 5) {
      discount = 10;
    }

    console.log("Discount is: $" + discount);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
} // Call getDiscount()

getDiscount(true, 4);

getDiscount(false, 10);

/*week 5 final test


Вопрос 1
What will be the output of the following JavaScript?
const a = 10;
const b = 5;
if(a == 7 || b == 5) {
    console.log("Green");
} else {
    console.log("Blue");
}

answer:Green
____________________
2.
Вопрос 2
What will be the output of the following JavaScript?
var message = "Hello";
message += " World!";
message = "Goodbye!";
console.log(message);

answer: Goodbye!
____________________
3.
Вопрос 3
What is the data type of the x variable in the following code?
var x = "Hello";

answer:String
____________________
4.
Вопрос 4
What will the following JavaScript code output?
var x = 20;

if(x >= 10) {
    console.log("Apple");
} else if(x <= 5) {
    console.log("Pear");
} else {
    console.log("Orange");
}

answer:Apple
____________________
5.
Вопрос 5
What will the following JavaScript code output?
var result = 0;

for(var i = 0; i < 5; i++) {
    result += 2;
}

console.log(result);

answer:10
____________________
6.
Вопрос 6
What will the following JavaScript code output?
console.log(result);
var result = 7;

answer:undefined
____________________
7.
Вопрос 7
What will be the output of this JavaScript code snippet?
function addTwo(a,b) {
    return a + b
}
addTwo(5,"10")

answer:510
____________________
8.
Вопрос 8
What is the output of the code below?
var car = { mileage: 200 }
var carMileage = 100
console.log(car.mileage)

answer:200
____________________
9.
Вопрос 9
What is the output of the code below?
var veggies = []
veggies.push('parsley')
veggies.push('carrot')
console.log(veggies[2])

answer:undefined
____________________
10.
Вопрос 10
Which of the following HTML attributes is used to handle a click event?

answer:onclick
____________________
11.
Вопрос 11
How can you add an HTML attribute to an HTML element using JavaScript?

answer:By invoking the  setAttribute  method on a given element.
____________________
12.
Вопрос 12
Is the code below missing a  .js  after the  ./addFive ?
const addFive = require('./addFive')

answer: false
*/
