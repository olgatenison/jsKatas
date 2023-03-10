// class Train {
//   constructor(color, lightsOn) {
//     this.color = color;
//     this.lightsOn = lightsOn;
//   }
// }

// class Train {
//   constructor(color, lightsOn) {
//     this.color = color;
//     this.lightsOn = lightsOn;
//   }
//   toggleLights() {
//     this.lightsOn = !this.lightsOn;
//   }
//   lightsStatus() {
//     console.log("Lights on?", this.lightsOn);
//   }
//   getSelf() {
//     console.log(this);
//   }
//   getPrototype() {
//     var proto = Object.getPrototypeOf(this);
//     console.log(proto);
//   }
// }

// new Train();
// var myFirstTrain = new Train("red", false);

// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}

// var mySecondTrain = new Train("blue", false);
// var myThirdTrain = new Train("blue", false);

// console.log(mySecondTrain);
// console.log(myThirdTrain);

// var train4 = new Train("red", false);

// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// class HighSpeedTrain extends Train {
//   constructor(passengers, highSpeedOn, color, lightsOn) {
//     super(color, lightsOn);
//     this.passengers = passengers;
//     this.highSpeedOn = highSpeedOn;
//   }
//   toggleHighSpeed() {
//     this.highSpeedOn = !this.highSpeedOn;
//     console.log("High speed status:", this.highSpeedOn);
//   }
//   toggleLights() {
//     super.toggleLigths();
//     super.lightsStatus();
//     console.log("Lights are 100% operational.");
//   }
// }

// function testBracketsDynamicAccess() {
//   var dynamicKey;
//   if (Math.random() > 0.5) {
//     dynamicKey = "speed";
//   } else {
//     dynamicKey = "color";
//   }

//   var drone = {
//     speed: 15,
//     color: "orange",
//   };

//   console.log(drone[dynamicKey]);
// }
// testBracketsDynamicAccess();

// Task 1

var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];
function logDairy() {
  for (let item of dairy) {
    console.log(item);
  }
}

logDairy();

// Task 2

const animal = {
  canJump: true,
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

function birdCan() {
  for (let prop of Object.prop(bird)) {
    console.log(prop + ":" + bird[prop]);
  }
}
birdCan();

// Task 3

function animalCan() {
  for (let key in bird) {
    console.log(key + ":" + bird[key]);
  }
}

animalCan();

//
const h1 = document.querySelector("h1");
const arr = ["Example Domain", "First Click", "Second Click", "Third Click"];
function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
  }
}
h1.addEventListener("click", handleClicks);
