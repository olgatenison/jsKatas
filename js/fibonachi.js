// DESCRIPTION:
// I love Fibonacci numbers in general, but I must admit I love some more than others.
// I would like for you to write me a function that, when given a number n (n >= 1 ), returns the nth number in the Fibonacci Sequence.
// For example:
//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.
// For reference, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two.

function nthFibo(n) {
  let first = 0;
  let second = 1;
  let fibonacciSequence = [first, second];

  if (n <= 0) {
    return "Invalid input";
  } else if (n === 1) {
    return first;
  } else if (n === 2) {
    return second;
  } else if (n > 2) {
    for (let i = 2; i < n; i++) {
      // вираховуємо значення наступного як суму двох попередніх
      let nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      // додаємо в масив
      fibonacciSequence.push(nextNumber);
    }
  }
  let last = fibonacciSequence[fibonacciSequence.length - 1];
  return last;
}

console.log(nthFibo(14));
console.log(nthFibo(4));

// 1
// function nthFibo(n) {
//   return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }

// 2
// function nthFibo(n) {
//   let [prev, curr] = [0, 1];
//   for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
//   return prev;
// }
