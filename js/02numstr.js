// Reverse words
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  let words = str.split(" ");
  let reversedWords = [];

  for (let word of words) {
    let reversedWord = word.split("").reverse().join("");
    reversedWords.push(reversedWord);
  }
  return reversedWords.join(" ");
}

reverseWords("The quick brown fox jumps over the lazy dog.");
