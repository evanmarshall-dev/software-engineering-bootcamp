// Inventors
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// People
const people = [
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];

// Travel Methods
const travelMethods = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

// Devs
const devs = [
  { name: "Alex", year: 1988 },
  { name: "Dani", year: 1986 },
  { name: "Matt", year: 1970 },
  { name: "Wes", year: 2015 },
];

// Comments
const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

/*
 **************************************************************************************************
 */

/*
Exercise 1: Array.prototype.filter()

Filter the array of inventors into a new array containing only the inventors
born in the 1500's.

- You have an array of inventors, each with a birth year listed by the property
  'year'.
- Use the Array.prototype.filter() method to create a new array.
- The new array, 'veryOldInventors', should only include inventors born between
  the years 1500 and 1599.
*/

let veryOldInventors = [];

// Complete the exercise in the space below:
veryOldInventors = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

// Check your work:
console.log("Exercise 1 my result: ", veryOldInventors);
console.log("Exercise 1 correct result: ", [
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
]);

/*
 **************************************************************************************************
 */

/*
Exercise 2: Array.prototype.map()

Map the array of inventors into a new array. This new array should only contain
objects with the inventors' first and last names.

- For each inventor, return an object in this format:
  { first: "First Name", last: "Last Name" }.
- The new array should be a collection of these objects, each representing an
  inventor with only their first and last names.

Hint: Return a new object literal from the callback that looks like:
      { first: "First Name", last: "Last Name" }
*/

let inventorNames = [];

// Complete the exercise in the space below:
inventorNames = inventors.map((inventor) => {
  return { first: inventor.first, last: inventor.last };
});

// Check your work:
console.log("Exercise 2 my result: ", inventorNames);
console.log("Exercise 2 correct result: ", [
  { first: "Albert", last: "Einstein" },
  { first: "Isaac", last: "Newton" },
  { first: "Galileo", last: "Galilei" },
  { first: "Marie", last: "Curie" },
  { first: "Johannes", last: "Kepler" },
  { first: "Nicolaus", last: "Copernicus" },
  { first: "Max", last: "Planck" },
  { first: "Katherine", last: "Blodgett" },
  { first: "Ada", last: "Lovelace" },
  { first: "Sarah E.", last: "Goode" },
  { first: "Lise", last: "Meitner" },
  { first: "Hanna", last: "Hammarström" },
]);

/*
 **************************************************************************************************
 */

/*
Exercise 3: Array.prototype.sort()

Sort the inventors by birth date in ascending order (from those born furthest in
the past to those born most recently).
*/

let sortedByBirthYear = [];

// Complete the exercise in the space below:
// Decided to use the spread syntax on inventors array so that the original array would not be mutated.
// Sot takes two values. The output of the expression a - b is either a positive, negative or zero. If positive it means the b value comes first, if negative it means the a value comes first, and if zero it means their positions can remain as is.
sortedByBirthYear = [...inventors].sort((a, b) => a.year - b.year);

// Check your work:
console.log("Exercise 3 my result: ", sortedByBirthYear);
console.log("Exercise 3 correct result: ", [
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
]);

/*
 **************************************************************************************************
 */

/*
Exercise 4: Array.prototype.find()

Use Array.prototype.find() to identify the inventor with the first name 'Ada'
from an array of inventor objects

- You have an array of objects, each representing an inventor with various
  properties including their first name.
- Utilize the Array.prototype.find() method to locate the object for the
  inventor with the first name 'Ada'.
- Assign the found inventor object to the variable inventorNamedAda
*/

let inventorNamedAda = {};

// Complete the exercise in the space below:
// Inventor represents iteration over object and find returns the first instance of the first property equal to "Ada".
inventorNamedAda = inventors.find((inventor) => inventor.first === "Ada");

// Check your work:
console.log("Exercise 4 my result: ", inventorNamedAda);
console.log("Exercise 4 correct result: ", {
  first: "Ada",
  last: "Lovelace",
  year: 1815,
  passed: 1852,
});

/*
 **************************************************************************************************
 */

/*
Exercise 5: Array.prototype.map()

Use the Array.prototype.map() method to reformat each name in the 'people'
array. The goal is to convert names from "Last, First" format to "First Last"
format.

Hint: Use the String.prototype.split() method to separate the first and last
      names. You can split the string using ', ' as the separator.
      After splitting the names, rearrange them to the "First Last" format.
*/

let firstLast = [];

// Complete the exercise in the space below:
firstLast = people.map((person) => {
  // 1. Split "Last, First" into ['Last', 'First']
  const [lastName, firstName] = person.split(", "); // Creates array containing first and last name separated by a comma.
  // 2. Return "First Last"
  return `${firstName} ${lastName}`; // Returns first name, space, last name using the destructured variables from above.
});

// Check your work:
console.log("Exercise 5 my result: ", firstLast);
console.log("Exercise 5 correct result: ", [
  "Carl Becker",
  "Samuel Beckett",
  "Mick Beddoes",
  "Henry Beecher",
  "Ludwig Beethoven",
  "Menachem Begin",
  "Hilaire Belloc",
  "Saul Bellow",
  "Robert Benchley",
  "Peter Benenson",
  "David Ben-Gurion",
  "Walter Benjamin",
  "Tony Benn",
  "Chester Bennington",
  "Leana Benson",
  "Silas Bent",
  "Lloyd Bentsen",
  "Ric Berger",
  "Ingmar Bergman",
  "Luciano Berio",
  "Milton Berle",
  "Irving Berlin",
  "Eric Berne",
  "Sandra Bernhard",
  "Yogi Berra",
  "Halle Berry",
  "Wendell Berry",
  "Erin Bethea",
  "Aneurin Bevan",
  "Ken Bevel",
  "Joseph Biden",
  "Ambrose Bierce",
  "Steve Biko",
  "Josh Billings",
  "Frank Biondo",
  "Augustine Birrell",
  "Elk Black",
  "Robert Blair",
  "Tony Blair",
  "William Blake",
]);

/*
 **************************************************************************************************
 */

/*
Exercise 6: Array.prototype.some()

Determine if there is at least one person in the devs array who is 18 years
old or older.

- You have an array of people with their respective ages.
- Use the Array.prototype.some() method to check if any person in the array is
  18 years old or older.
- Store the result (true or false) in the variable 'isAdultPresent'.
*/

let isAdultPresent = null;

// Complete the exercise in the space below:
isAdultPresent = devs.some((dev) => {
  // Assign the current year to variable currentYear using the Date method.
  const currentYear = new Date().getFullYear();
  // Return condition for year of birth subtracted from current year is greater than or equal to 18.
  return currentYear - dev.year >= 18;
});

// Check your work:
console.log("Exercise 6 my result: ", isAdultPresent);
console.log("Exercise 6 correct result: ", true);

/*
 **************************************************************************************************
 */

/*
Exercise 7: Array.prototype.every()

Use Array.prototype.every() to determine if every person in the devs array is
19 years old or older.

- You have an array of individuals, each with their year of birth represented
  by the 'year' property.
- Use the Array.prototype.every() method to verify if every individual in the
  array is at least 19 years old.
- Store the result (true or false) in the variable 'isEveryone19OrOlder'.
*/

let isEveryone19OrOlder = null;

// Complete the exercise in the space below:
// Same as Exercise 6 except we changed the years old to 19 and use the every method to check the whole array meets the condition versus at least one element meeting the condition.
isEveryone19OrOlder = devs.every((dev) => {
  currentYear = new Date().getFullYear();
  return currentYear - dev.year >= 19;
});

// Check your work:
console.log("Exercise 7 my result: ", isEveryone19OrOlder);
console.log("Exercise 7 correct result: ", false);

/*
 **************************************************************************************************
 */

/*
Exercise 8: Array.prototype.find()

Use Array.prototype.find() to identify and retrieve the comment object with
a specific ID 823423 from an array of comment objects.

- Assign the found comment object to the variable 'commentById'.
*/

let commentById = {};

// Complete the exercise in the space below:
commentById = comments.find((comment) => {
  return comment.id === 823423;
});

// Check your work:
console.log("Exercise 8 my result: ", commentById);
console.log("Exercise 8 correct result: ", { text: "Super good", id: 823423 });

/*
 **************************************************************************************************
 */

/*
Exercise 9: Array.prototype.findIndex()

Determine the index of the comment that has a specific ID 123523 in an array
of comment objects.

- Store the index in the variable 'idx'.
*/

let idx = null;

// Complete the exercise in the space below:
idx = comments.findIndex((index) => {
  return index.id === 123523;
});

// Check your work:
console.log("Exercise 9 my result: ", idx);
console.log("Exercise 9 correct result: ", 3);

/*
 **************************************************************************************************
 */

/*
Level Up exercise 1: Array.prototype.reduce()

Calculate the combined lifespan of all the inventors using
Array.prototype.reduce()

- Each object in the array includes these properties:
  'first', 'last', 'year' (birth year), and 'passed' (year of death).
- Use the Array.prototype.reduce() method to calculate the sum of the total
  years lived by all the inventors.
- Store the total sum in the variable 'totalYearsLived'.

Hints:

- Inside the reduce callback function, calculate the lifespan of each inventor
  (passed - year).
- Accumulate this lifespan in the 'totalYearsLived' variable.
- Remember, reduce takes a callback function and an initial value for the
  accumulator.
*/

let totalYearsLived = 0;

// Complete the exercise in the space below:
// Reduce takes two arguments, accumulator (total) and current value from array (inventor cb function).
totalYearsLived = inventors.reduce((total, inventor) => {
  // Assign age calculation as date of death minus date of birth.
  const age = inventor.passed - inventor.year;
  // Return accumulator (initially 0 as seen in second argument below) + age. As this iterates over array it builds up a total sum by adding on the next age to the accumulator (total) value.
  return total + age;
}, 0);

// Check your work:
console.log("Level Up 1 my result: ", totalYearsLived);
console.log("Level Up 1 correct result: ", 861);

/*
 **************************************************************************************************
 */

/*
Level Up exercise 2: Array.prototype.reduce()

Tallying travel methods using Array.prototype.reduce().

Count the number of times each travel method appears in the 'travelMethods'
array.

- The resulting object should have keys as the travel methods
  ('car', 'truck', 'bike', etc.) and values as their respective counts.
- Store this object in the variable 'travelMethodCounts'.

Hints:
- Inside the reduce function, check if the travel method already exists as a key
  in your accumulator object. If it does, increment its count. If not, add it
  to the object and give it a value of 1.
- Since you want to return an object, be sure to pass an empty {} for the
  initial value of the "accumulator".
*/

let travelMethodCounts = {};

// Complete the exercise in the space below:
// Use tally for the accumulator because that is what we are doing and method is the current string.
travelMethodCounts = travelMethods.reduce((tally, method) => {
  // Check if a key for the current method exists on our tally object.
  // We are using square bracket notation to access the object property which is a string (i.e. "car").
  // This is better here because we do not know what the key name will be. It also works because "method" is a variable that holds the current value in the object (i.e. "car"). You cannot pass in a variable as a value of the property using dot notation.
  // 1. It looks at the value of the method variable (e.g., "car").
  // 2. It then looks for a property on the tally object with that exact key (e.g., the car property).
  if (tally[method]) {
    // If it exists, increment its count.
    tally[method]++;
  } else {
    // If it doesn't exist, create it and set its count to 1.
    tally[method] = 1;
  }

  // Return the accumulator object for the next iteration.
  return tally;
  // Start with an empty object. This is the accumulator (tally) and is the key. We are building up this object with each iteration.
}, {});

// COULD ALSO BE WRITTEN AS...
// ? travelMethodCounts = travelMethods.reduce((tally, method) => {
//   // If tally[method] exists, use it. Otherwise, use 0. Then add 1.
//   ? tally[method] = (tally[method] || 0) + 1;
//   ? return tally;
// ? }, {});

// MY NOTES:
/*
Iteration 1:
- tally starts as {}.
- method is "car".
- The if (tally[method]) check becomes if (tally['car']). This property doesn't exist yet, so it's undefined (which is falsy).
- The else block runs: tally[method] = 1; becomes tally['car'] = 1;.
- The tally object is now { car: 1 }. This object is returned for the next iteration.

Iteration 2:
- tally is now { car: 1 }.
- method is "car".
- The if (tally[method]) check is if (tally['car']). This property exists and its value is 1 (which is truthy).
- The if block runs: tally[method]++;. This is where your question lies. This line means:
    - Access the property on tally whose key matches the value of method (which is 'car').
    - The current value is 1.
    - Increment that value by one (++).
    - The result is that tally['car'] is now 2.
- The tally object is now { car: 2 }. This object is returned.
*/

// Check your work:
console.log("Level Up 2 my result: ", travelMethodCounts);
console.log("Level Up 2 correct result: ", {
  car: 5,
  truck: 3,
  bike: 2,
  walk: 2,
  van: 2,
});
