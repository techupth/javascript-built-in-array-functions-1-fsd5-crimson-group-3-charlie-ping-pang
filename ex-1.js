let words = ["hello", "world"];
let alphabat = [];
function getWordLengths(words) {
  // Start coding here
  alphabat = words.map((word) => word.length);
  return alphabat;
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
