let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  // console.log(words.length);
  // for (let i = 0; i < words.length; i++) {
  //   console.log(words[i]);
  //   console.log(words[i].length);
  //   console.log(words.length);
  //   let aaa = words[i].length
  //   console.log(aaa);
  // }
  return words.map(words => words.length)
}

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
