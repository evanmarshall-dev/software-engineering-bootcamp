/***********************************
  JS ARRAYS
***********************************/

/***********************************
  NOTES
***********************************/
// Arrays are basically an ordered list. It is a non-primitive data type in JS, but technically it is a data structure/object.
// What is added to an array are elements which are separated by commas. These elements can be any data type (i.e. numbers, strings, objects (functions, arrays)). All elements are usually the same data type.
// Best practice is to declare an array with const.
// Since we use const we cannot reassign the whole array, but we can change an element of an array.

// The type of an array is object.
// There is a method for checking if an object is an array (Array.isArray()).

// The ordered list aspect of an array means that each item is indexed starting at 0.
// To access elements in an array we use square brackets with the index number of element.

// Arrays have a length property. It tells how many items are in the array and can be accessed using dot notation.

// The array class has a lot of methods that can be used on it.
// join() takes all elements of an array and joins them into one string. You can specify the separator of elements in the string as well.
// .push() adds an element to the end of an array. You can push more than one element separated by a comma.
// .shift() removes from the beginning of an array. The opposite of .pop() which removes from the end of an array.
// .unshift() is similar to push but adds to beginning of the array.
// .splice() changes the contents of an array by removing/replacing elements or adding new elements in place. It takes two arguments, the first is where we start deletion and second is how many elements to remove. If we pass in a third argument it is the element to replace the first on removed.

// Multi-dimensional Arrays. Arrays can contain other arrays as elements.
// Two dimensional arrays are useful for modeling grid-like data.

/***********************************
  FOUNDATIONS
***********************************/
const arr = [];
console.log(arr); // []

// Array of strings.
const furniture = ["chair", "table", "lamp", "sofa", "bed"];
console.log(furniture);

// Array of numbers.
const numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

// Type.
const num = 0;
const str = "Word";
const bool = true;

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof numbers); // object

// Check if data structure is an array.
console.log(Array.isArray(furniture)); // true

/***********************************
  ACCESSING ELEMENTS
***********************************/
const faveFood = ["nachos", "wings", "sushi", "ramen"];
console.log(faveFood); // ["nachos", "wings", "sushi", "ramen"]

console.log(faveFood[0]); // nachos
console.log(faveFood[2]); // sushi
console.log(`My favorite food is ${faveFood[2]}.`); // My favorite food is sushi.

// Another array.
const ghostBusters = [
  "Venkman",
  "Spengler",
  "Stantz",
  "Zeddermore",
  "Melnitz",
  "Barrett",
  "Tully",
];

// Access third element.
console.log(ghostBusters[2]); // Stantz
// Access the fourth element.
console.log(ghostBusters[3]); // Zeddermore
// We want to get an element back, but we do not know where it is in the array.
console.log(ghostBusters.indexOf("Tully")); // 6
// Now that we have the index we can call the item.
console.log(ghostBusters[6]); // Tully
// OR, even if we don't have the index.
console.log(ghostBusters[ghostBusters.indexOf("Tully")]); // Tully

/***********************************
  ARRAY LENGTH
***********************************/
console.log(faveFood.length); // 4
console.log(ghostBusters.length); // 7
// Can be done directly.
console.log([1, 2, null, Infinity, "hello", false].length); // 6
console.log(`My favorite food list has ${faveFood.length} items in it.`); // My favorite food is sushi.

// We don't just need to add number to square brackets. You can use any expression whose value is a number as an array index.
// We can print the last element of the array using length - 1.
const gbLast = ghostBusters.length - 1;
// Get the last index.
console.log(gbLast); // 6
// Get last element name.
console.log(ghostBusters[gbLast]); // Tully

/***********************************
  CHANGE ARRAY ELEMENTS
***********************************/
const veggies = ["pepper", "leek", "cauliflower", "carrot"];

// You can change an element by accessing it and using the assignment operator (=).
// i.e. Change leek to spinach.
veggies[1] = "spinach";
console.log(veggies); // ['pepper', 'spinach', 'cauliflower', 'carrot']
// Change the last element to brocoli.
const lastVeg = veggies.length - 1;
console.log(veggies[lastVeg]); // carrot
veggies[lastVeg] = "brocoli";
console.log(veggies); // ['pepper', 'spinach', 'cauliflower', 'brocoli']

// We can use any expression to access elements.
console.log(veggies.length); // 4
console.log(veggies[1 * 3]); // brocoli

// If I want to access the element to the right of the middle.
console.log(faveFood[faveFood.length / 2]); // sushi

/***********************************
  LOOPING ARRAY ELEMENTS
***********************************/
// Use loop to access an array in order is called iterating.
const kitchenSink = ["dirty spoon", "sponge", "messy plate", "soap", "water"];

// Print every element in array using a for loop. Used most often.
// i++ can also be written as i = i + 1.
for (let i = 0; i < kitchenSink.length; i = i + 1) {
  // ? console.log(i);
  // ? console.log(kitchenSink[i]);
  console.log(`${i}: ${kitchenSink[i]}`);
}

//
// Using a for of loop. Not commonly used.
for (const item of kitchenSink) {
  console.log(item);
}

// Using for each loop. It is a method on the array so we use dot notation.
kitchenSink.forEach((item) => {
  console.log(item);
});

/***********************************
  ARRAY METHODS
***********************************/
// Add element to end of kitchenSink array.
kitchenSink.push("faucet");
console.log(kitchenSink);
// You can pass more than one argument to push method.
kitchenSink.push("bowl", "cup", "rag");
console.log(kitchenSink);

// Remove element from end of array.
kitchenSink.pop();
console.log(kitchenSink); // Removes rag.

// .join()
console.log(kitchenSink.join());
// Determine separator as argument to join method.
console.log(kitchenSink.join(" | "));

// .shift()
kitchenSink.shift();
console.log(kitchenSink);

// .unshift
kitchenSink.unshift("fork");
console.log(kitchenSink);

// .splice()
const returnedSplice = kitchenSink.splice(4, 2, "water bottle"); // Returns spliced elements.
// ? kitchenSink.splice(4, 2);
console.log(kitchenSink); // Removes water and faucet and added water bottle.
console.log(returnedSplice);

// .indexOf()
const theIndex = kitchenSink.indexOf("water bottle");
console.log(theIndex);

/***********************************
  MULTI-DIMENSIONAL ARRAYS
***********************************/
const pairs = [
  ["Snoopy", "Linus"],
  ["Woodstock", "Peppermint Patty"],
];
console.log(pairs.length); // 2

// Print out "Peppermint Patty"
console.log(pairs[1][1]); // Peppermint Patty
// The pairs[1] is an array and pairs[1][0] is an element.
