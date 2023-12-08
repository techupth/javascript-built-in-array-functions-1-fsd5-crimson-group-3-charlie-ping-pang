const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let total = students.map((students) => students.score);

  function sum(accumulator, currentValue) {
    return accumulator + currentValue;
  }

  let result = total.reduce(sum, 0);

  return result / students.length;
}

getAverageStudentScore(students); // Output: 87.5
console.log(getAverageStudentScore(students));
