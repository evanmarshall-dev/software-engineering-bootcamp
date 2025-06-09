/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];

console.log("Exercise 1 result:", foods);

/*********************************************************************************************************************************
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array.

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/

// push adds items to the end of array so use push with strings pizza and cheeseburger passed as parameters in order.
foods.push("pizza", "cheeseburger");

console.log("Exercise 2 result:", foods); // ['pizza', 'cheeseburger']

/*********************************************************************************************************************************
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/

// unshift inserts at the beginning of an array so arrayName.unshift("element/string").
foods.unshift("taco");

console.log("Exercise 3 result:", foods); // ['taco', 'pizza', 'cheeseburger']

/*********************************************************************************************************************************
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in the array.

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/

// pizza is at index 1 so square brackets notation of 1 assigned to variable favFood.
const favFood = foods[1];

console.log("Exercise 4 result:", favFood); // pizza

/*********************************************************************************************************************************
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

// Splice added before element at index 2, removes 0 element(s), adds 1 element (tofu).
foods.splice(2, 0, "tofu");

console.log("Exercise 5 result:", foods); // ['taco', 'pizza', 'tofu', 'cheeseburger']

/*********************************************************************************************************************************
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

// Splice added before element at index 1, removes 1 element (pizza), adds two elements at splice (sushi, cupcake).
foods.splice(1, 1, "sushi", "cupcake");

console.log("Exercise 6 result:", foods); // ['taco', 'sushi', 'cupcake', 'tofu', 'cheeseburger']

/*********************************************************************************************************************************
Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/

// slice created and including element at index 1 (sushi), ends and not including element at index 3 (tofu).
// Result assigned to variable of yummy (sushi, cupcake).
const yummy = foods.slice(1, 3);

console.log("Exercise 7 result:", yummy); // ['sushi', 'cupcake']

/*********************************************************************************************************************************
Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the `foods` array.

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

// indexOf with tofu passed in returns index # of tofu in foods array.
// Assign index of tofu to variable soyIdx.
const soyIdx = foods.indexOf("tofu");

console.log("Exercise 8 result:", soyIdx); // 3

/*********************************************************************************************************************************
Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '.

2) Assign the result to a variable called `allFoods`.

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

// Assign resulting string of all elements in the foods array to variable called allFoods. Pass in separator as argument to join method.
const allFoods = foods.join(" -> ");

console.log("Exercise 9 result:", allFoods); // taco -> sushi -> cupcake -> tofu -> cheeseburger

/*********************************************************************************************************************************
Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string 'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

// Initialize variable hasSoup with includes method looking for string of soup within foods array.
const hasSoup = foods.includes("soup");

console.log("Exercise 10 result:", hasSoup); // false

/*********************************************************************************************************************************
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = [];

// Using the for loop for this exercise.
// Setting the iterator to num and initialize num at 0.
// Condition to evaluate will be as long as num is less than length of nums array it will be true.
// Iterate by 1 each time loop runs unless the condition becomes false.
for (let num = 0; num < nums.length; num++) {
  // Set condition to check if an element (num) in the nums array is an odd number.
  // Condition checks if modulo 2 (even) is not equal to 0. If any number except 0 then element is odd.
  if (nums[num] % 2 !== 0) {
    // Add odd numbers to the currently empty odds array using push method.
    // Add in nums[num] which is the elements of the array meeting if statement conditions of being odd.
    odds.push(nums[num]);
  }
}

console.log("Exercise 11 result:", odds); // [5, 23, 15, 21, 9, 45, 7, 81]

/*********************************************************************************************************************************
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array.

2. As you loop, sort the numbers into new arrays based on the following rules:

  - Push any number evenly divisible by 3 to an array called `fizz`.
  - Push any number evenly divisible by 5 to an array called `buzz`.
  - Push any number that is evenly divisible by 3 and 5 to an array called `fizzbuzz`.

  Note: A single number may meet more than one of the above rules. If it does, it should be placed in multiple arrays. For example, the number `15` will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

// Create three empty arrays to contain the conditional data.
const fizz = [];
const buzz = [];
const fizzbuzz = [];

// Using forEach method for this exercise.
// Assign the iterator to num and code will run for each element in the nums array.
// Using three different if statements versus if and if else because the conditions need to be able to lead to elements that can be in more than one of the new arrays.
nums.forEach((num) => {
  // First condition checks to see if element is evenly divisible by 3 and 5.
  // If true then we add elements to fizzbuzz array using the push method.
  if (num % 3 === 0 && num % 5 === 0) {
    fizzbuzz.push(num);
  }
  // Second condition checks to see if element is evenly divisible by 3.
  // If true then we add elements to fizz array using the push method.
  if (num % 3 === 0) {
    fizz.push(num);
  }
  // Third condition checks to see if element is evenly divisible by 5.
  // If true then we add elements to buzz array using the push method.
  if (num % 5 === 0) {
    buzz.push(num);
  }
});

console.log("Exercise 12 Results:");
console.log("  fizz:", fizz); // [15, 21, 72, 9, 45, 66, 81, 90]
console.log("  buzz:", buzz); // [100, 5, 15, 45, 90]
console.log("  fizzbuzz:", fizzbuzz); // [15, 45, 90]

/*********************************************************************************************************************************
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
  `numList`. As you do this, also fulfill these goals:

  - Assume you don't know how many nested arrays `numArrays` contains.
  - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90],
];

// The last index in the numArray would be the last array which can be found using array.length - 1.
// To select an index in an array you use square bracket notation.
// Using length - 1 and adding that as the index in a numArrays selection works even if we do not know how many elements or nested arrays are within numArrays.
const numList = numArrays[numArrays.length - 1];

console.log("Exercise 13 result:", numList); // [7, 81, 90]

// Console logged numArrays to make sure the original array was not altered.
console.log(numArrays);

/*********************************************************************************************************************************
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array. As part of this process do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

// Referenced numArrays 3rd element and within the 3rd element we referenced the 2nd element which is number 66.
const num = numArrays[2][1];

console.log("Exercise 14 result:", num); // 66
// Check that original numArrays not modified.
// ? console.log(numArrays);

/*********************************************************************************************************************************
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within `numArrays` nested arrays.

2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0;

numArrays.forEach((innerArray) => {
  innerArray.forEach((number) => {
    total += number;
  });
});

console.log("Exercise 15 result:\n", total); // 534
