/* ----------------------------
  NOTES
---------------------------- */
// Built in utility functions.
// Imperative code tells logic how to accomplish a task.
// Declarative code ...
// The map method specifically returns a new array and does not mutate the original array. Main difference between this array method and others like forEach.

// Below is imperative code.
// ? let result;

// ? for (let i = 0; i < array.length; i++) {
//   ? if (array[i] === targetValue) {
//     ? result = array[i];
//     ? break;
//   ? }
// ? }

// Below is declarative code.
const animals = ["cat", "dog", "fish", "bird"];

const result = animals.find((animal) => {
  return animal === "dog";
});

// ? console.log("Example #1 Output:", result); // dog
// ? console.log("-------------------------");

// Another example showing a callback (cb) function passed into forEach().
animals.forEach((animal, index) => {
  // ? console.log(animal);
  // ? console.log(index);
  // ? console.log(`${animal} is at index ${index}`);
  // Assign an id to each animal using built in index parameter when used in an iterator method like forEach.
  const animalObject = {
    name: animal,
    id: index,
  };
  // ? console.log(animalObject);
});

// To show difference between map and forEach.
const numbers = [1, 2, 3, 4, 5];

// forEach just does something for each element in an array. It does not provide anything back.
numbers.forEach((number) => {
  // ? console.log(number * 2);
});

// Using return within forEach does not work. It cannot replace a map. Can be hacked to work by using the .push() method to add the returned values to an array.
const doubledNums = [];

// ? const newNums = numbers.forEach((number) => {
numbers.forEach((number) => {
  // ? return number * 2;
  doubledNums.push(number * 2);
});
// ? console.log(newNums); // Undefined error.
// ? console.log("New Array Created by forEach (Not Ideal):", doubledNums);

// Using return with map, which creates a new array with each element having the return statement expression performed on it.
const doubled = numbers.map((number) => {
  return number * 2;
});

// ? console.log("New Array Created by Map:", doubled);
// ? console.log("-------------------------");
// Original stays the same.
// ? console.log("Original Stays the Same:", numbers);

// Accidental mutation with forEach.
const graduates = [];

const students = [
  { name: "Alison", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 78 },
];

students.forEach((student) => {
  // This next line is where we mutate the original array.
  // ? student.grade = student.grade + 5;
  // To hack a way to do this instead of using map.
  // Spread operator will copy student and also add student.grade + 5.
  const updatedStudent = { ...student, grade: student.grade + 5 };
  // Cannot do the below because you cannot reassign an object. You can only reassign its props. If the original object was let instead of const then the below line would not be a new object but rather just a reference to the original.
  // ? student = updatedStudent;
  // ? graduates.push(student);
  graduates.push(updatedStudent);
});

// ? console.log("Original Students Array:", students);
// ? console.log("Graduates Array:", graduates);
// ? console.log("-------------------------");

// Filter Method
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

const evenFruits = fruits.filter((fruit, index) => {
  // Return only if index is even.
  if (index % 2 === 0) {
    return fruit;
  }
});

// ? console.log("Original:", fruits);
// ? console.log("Filtered:", evenFruits);
// ? console.log("-------------------------");

// Now to do the same as above with map. It will return a copy of all elements even the ones filtered out using filter, but those that do not meet the condition are copied as undefined in the new array.
const evenFruitsMap = fruits.map((fruit, index) => {
  if (index % 2 === 0) {
    return fruit;
  }
});

// ? console.log("Original:", fruits);
// ? console.log("Filtered:", evenFruitsMap);
// ? console.log("-------------------------");

// Using the powerful reduce method.
// One thing it does is takes all values of an array and reduces it to one.

// Fine method
// Returns the first element in an array that matches the condition you give it. It stops after the first match even if there are multiples.

const cats = [
  { name: "Mocha", isSleepy: false },
  { name: "Whiskers", isSleepy: true },
  { name: "Tiger", isSleepy: false },
  { name: "Pudding", isSleepy: true },
];

// Find the first cat that has isSleepy set to true.
// If you want all sleepy cats you would use filter.
const sleepyCat = cats.find((cat) => cat.isSleepy === true); // Could also be written as: (cat) => cat.isSleepy
console.log(sleepyCat); // { name: 'Whiskers', isSleepy: true }
