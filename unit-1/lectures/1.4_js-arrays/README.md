# Lecture: JS Arrays

## Module: Concepts

Arrays contain **ordered** list of **elements**. Each element has an index and they can hold any data type.

Arrays are technically an **object** in JavaScript. They provide a way to model a collection of ordered data in one place for easy manipulation.

### Creating an Array

You should always use constant (`const`) to create an array in literal notation. The `name` of the array should be **plural**.

## Module: Accessing Elements in an Array

To access elements in an array you use **square bracket notation** as well as the element's position or index within the array.

### `length` Property

The `length` property can be used to determine how many elements are in an array.

To access the **last** element in an array you can use the length property minus one (`arrayName.length - 1`).

## Module: Array Manipulation

### Updating Array Elements

To update an array element we use the square bracket notation and the assignment operator (`arrayName[index] = newValue`).

> [!NOTE]
> You can update or reassign an `element` in an array even though it is declared with a `const`. You still cannot reassign the array itself.

### Adding/Removing Array Elements

- `push()`: Adds _one or more_ elements to the **end** of an array.
- pop(): Remove a _single_ element from the **end** of an array. This method takes no arguments and **returns** the removed element.

## Module: Array Looping

### For Loop

1. Usually we initialize a loop by assigning a variable to the index of zero (i.e. `idx = 0`) and ending the loop at the last index.
2. The `idx` receives elements from the array.
3. Executes the code block.
4. Then `idx` is iterated after code block execution.
5. Process repeats until `idx` hits the last index or `idx < arrayName.length` condition is no longer `true`.

For example:

```js
for (let idx = 0; idx < arrayName.length; idx++) {
  // List out array elements.
  console.log(arrayName[idx]);
  // Number listed array elements.
  console.log(`${idx + 1}. ${arrayName[idx]}`);
}
```

### For Of Loop

While the `for` loop is **imperative** (We tell the program each step to take to get the desired outcome), the `for` `of` loop is **declarative** in that it is more concise and tells the program the desired outcome.

For example:

```js
for (let element of arrayName) {
  // List out array elements.
  console.log(element);
  // Number listed array elements.
  console.log(`${idx + 1}. ${element}`);
}
```

## Module: `forEach()` Iterator Method

Another **declarative** approach to iterate over all elements in an array.

> [!NOTE]
> Functions that are assigned to a variable, passed as an argument to a function, returned from a function, and stored in arrays or objects are called **higher-order functions** or **first-class citizens**.

When functions are used in this way they do _not_ require a name and are therefore called **anonymous functions**. These functions are also called **callback functions** because they are executed for each item in the array.

For example:

```js
arrayNames.forEach((arrayName, idx) => {
  // forEach also outputs the index of each array element.
  console.log(`${idx + 1}. ${arrayName}`);
  // List out array elements.
  console.log(arrayName);
});
```

> [!TIP]
> It is common practice to name the first parameter of the callback function as a _singular_ form of the array's name.

### More on `forEach()`

You can also used **named** functions with the `forEach()`, which is useful when carrying out the same task multiple times.

```js
const namedFxns = (namedFxn) => {
  console.log(namedFxn);
};

arrayNames.forEach(namedFxns);
arrayNames2.forEach(namedFxns);
```

You can also use function **declarations** with `forEach()`:

```js
arrayNames.forEach(function (arrayName) {
  console.log(arrayName);
});
```

When creating a variable within the callback function of a `forEach()` they are scoped to that function and cannot be retained during iterations. It is better to scope variables globally in this scenario.

```js
const sumNums = [1, 2, 3, 4, 5];
let sum = 0; // retained each iteration and available outside cb.

sumNums.forEach((sumNum) => {
  // let sum = 0; // not retained each iteration and not available outside cb.
  // sum = sum + sumNum;
  sum += sumNum;
});

console.log(sum); // Undefined with sum var within cb, but 15 will be output if sum var is global.
```

## Module: `join()` Method

The `join()` method combines all string elements of an array and returns a single string. By default each element of the combined string are separated by a comma, but you can pass in a custom separator to the join method.

## Module: `at()` Method

JS does _not_ support negative indexing unlike other programming languages and will result with an `undefined`.

The `at()` method can _directly_ access array elements by their index. Similar to square bracket notation except that it accepts _negative_ indexes.

Example on how to access last array element:

`const lastElement = arrayName.at(-1);`

## Module: `shift()` and `unshift()` Methods

### `unshift()`

Like the `push()` method `unshift()` allows us to _add_ one or more elements to an array, but at the **beginning** of the array.

### `shift()`

Like `pop()` we can _remove_ an element from an array, except with `shift()` we remove from the **beginning** of the array. Also, there are _no arguments_ taken with `shift()` and it **returns** the removed element.

> [!TIP]
> The methods with longer names _add_ to an array (`unshift() -> [...] <- push()`).
> Methods with shorter names _remove_ from an array (`shift() <- [...] -> pop()`).

## Module: `break` and `continue`

The `break` statement lets you _exit_ a loop early based on a condition.

```js
// bestMovies = ["Inception", "Batman Begins", "The Green Mile", "Pulp Fiction"];

for (let movie of bestMovies) {
  if (movie === "The Green Mile") break;
  console.log(movie); // Inception & Batman Begins
}
```

Similar to `break`, the `continue` statement _stops_ loop execution, but not entirely. It only stops the **current** iteration of the loop.

Using the same example of the `break` statement we see below that whichever element is compared on the condition followed by `continue` will never print, but the loop will continue on to the next iteration.

```js
// bestMovies = ["Inception", "Batman Begins", "The Green Mile", "Pulp Fiction"];

for (let movie of bestMovies) {
  console.log("Iteration");
  if (movie === "Inception") continue;
  if (movie === "The Green Mile") break;
  console.log(movie); // Iteration & Iteration & Batman Begins & Iteration & Iteration
}
```

## Module: Copying Arrays

Sometimes instead of modifying the array you will want to make a copy or simply retain a copy of the original. The methods for copying will depend on whether you want to copy the _whole_ array or just a _segment_.

### Spread (`...`) Syntax

A concise way to copy a _whole_ array or duplicate.

```js
const original = ["LMFAO", "G2G", "LOL", "ROFL"];
const copy = [...original];
console.log(copy); // ["LMFAO", "G2G", "LOL", "ROFL"]
```

### `slice()` Method

If you only want to copy a portion of the original array you would use `slice()`. It returns a new array and does _not_ mutate the original.

Syntax for `slice()`:

- `slice();`
- `slice(start);`: Inclusive of start index. If only passing in _start_ it will copy the rest of the array.
- `slice(start, end);`: Exclusive of end index. It will copy start index and up to end index.

> [!NOTE]
> You can also copy and array and add a new element to the beginning of the array: `const moreMovies = ["007: Casino Royale", ...bestMovies"];`

## Module: `splice()` Method

The `splice()` method can add or remove any number of elements inside an array. You can even take both actions simultaneously with a single line of code!

Syntax is:

```js
splice(start);
splice(start, deleteCount);
splice(start, deleteCount, item0);
splice(start, deleteCount, item0, item1);
splice(start, deleteCount, item0, item1, /* …, */ itemN);
```

## Module: Shallow vs Deep Copy

The above methods of copying an array are **shallow** copies. If there are objects within the array then the new copy will only contain a **reference** to said object(s).

A **deep copy** or **deep clone** creates a new array (or object) and also creates a copy of every element even if they are an object or an array themselves.

> [!NOTE]
> The old way to do a **deep clone** was to use `JSON.stringify()` method combined with `JSON.parse()`, but it retain all types of data in its original form.

The current way to perform a **deep clone** is to use the `structuredClone()` _global function_.

```js
let deepCopy = structuredClone(original);

deepCopy[1] = "BFF4E";

console.log(original); // ["LMFAO", "G2G", "LOL", "ROFL"]
// Retained original and changed element.
console.log(deepCopy); // ["LMFAO", "BFF4E", "LOL", "ROFL"]
```

> [!WARNING]
> Use **deep copying** sparingly because it _doubles_ memory consumed by the data and can decrease performance.

## Module: `map()`, `filter()`, `reduce()` Methods

Similar to `forEach()` except that they return a **new** array that does not modify the original array.

You can circumvent this issue (Modifying original array) with `forEach()` by creating a new empty array and pushing the changed elements to it, but this requires a **push** each time you make a change.

### Map Array Method

The **map** method takes a **callback** (cb) function with three parameters (Current value, Index, and Array), but we usually only need the _first_ parameter. The new array has the original array's elements _transformed_ based on the cb function passed into the map method as well as its **return** value.

The **map** method _iterates_ over each element in an array, the cb function passed into map runs for each element in the array, and new array created from the cb function's **return** value. The return value creates each element of the new array.

> [!NOTE]
> The new array is the **same** size or length of the original array.

> [!TIP]
> If the cb function only contains a return statement and one parameter then we can simplify the code by removing the _curly braces_, the _return keyword_, and the _parenthesis_.

You can map over an object and return an exact copy using the **spread operator**, _simplify_ an object to a single array of strings, and _add_ new properties to each element of and array (See below).

For example:

```js
// Map Method
const numbers = [1, 2, 3, 4];

const newArr = numbers.map((number) => {
  return number * number;
});

console.log(newArr); // [1, 4, 9, 16]
```

```js
// Another example.
const prices = [4, 8, 15, 16, 23, 42];
// Using forEach()
const discountedPrices = [];

// Calculate a 50% discount for each prices element.
prices.forEach((price, i, arr) => {
  discountedPrices.push(price * 0.5);
});

console.log(discountedPrices); // [2, 4, 7.5, 8, 11.5, 21]

// Using map()
// Only need the first param (price), which represents the current value.
const newPrices = prices.map((price) => {
  // Do not need to push anything. Instead we return the value.
  return price * 0.5;
});

// New array.
console.log(discountedPrices); // [2, 4, 7.5, 8, 11.5, 21]
// Original array stays unmodified.
console.log(prices); // [4, 8, 15, 16, 23, 42]
```

```js
// Another example.
const products = [
  {name: "Laptop", price: 499, color: "white"}
  {name: "Smartphone", price: 899, color: "black"}
  {name: "Headphones", price: 50, color: "white"}
  {name: "Tablet", price: 199, color: "grey"}
  {name: "Keyboard", price: 210, color: "blue"}
]

const discounts = products.map((product) => {
  // return product.price * 0.5;
  // We want to copy everything to the new array except for the price.
  // To do this we will use the spread operator.
  return {
    // Spread to copy all props from original product object.
    ...product,
    // override price prop with a discounted price.
    // This keeps the same structure, copy entire object and only change the price.
    price: product.price * 0.5
  }
})

console.log(discounts); // [249.5, 449.5, 25, 99.5, 105]

// You can also use map to simplify a list.
// Returning a list of object into a list of string like below:
const productNames = products.map((product) => {
  return product.name;
});

console.log(productNames); // ["Laptop", "Smartphone", "Headphones", "Tablet", "Keyboard"]

// Or the opposite and add to object.
const categorizedProducts = products.map((product) => {
  let category;
  if (product.price < 100) category = "Budget";
  else if (product.price < 500) category = "Mid-range";
  else category = "Premium";
  return {
    // Still copy all other props from original with spread, but adding new props to every item element in the array (category).
    ...product,
    category
  }
});

console.log(categorizedProducts);
```

### Filter Array Method

Useful for filtering categories or a search input on a website.

The `filter` method allows you to filter out elements of an array based on a _condition_. It iterates over an array, returns a _new_ array with **only** items that _pass_ the condition you return.

The `filter` method takes a callback function with **params**, value, index, and array. It goes through each element of an array and checks it against a condition. If true we keep element in new array and we do not keep it for false.

The condition can be anything. Checking for a string with `includes()` method, a property equal to something (i.e. color), which would all be useful for a search filter on a site. You can also _combine_ conditions.

For example:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Returns a new array with only even numbers.
numbers.filter((number) => {
  return number % 2 === 0;
}); // [2, 4, 6, 8, 10]

// OR returns a new array of prime numbers.
numbers.filter(isPrimes); // [2, 3, 5, 7]
```

Example using the products array from above:

```js
// ... previous code ...

// Create new array with products less than $200.
const affordableProducts = products.filter((product) => {
  return product.price < 200;
});
console.log(affordableProducts);
```

### Reduce Array Method

Reduce turns a list of values into one **single** value. The value could be a _sum_, _text_ or a new _object/array_ (i.e. a number or a string usually).

Unlike filter and map it does not return an array unless we specify it with an _empty square bracket_ at the end.

Reduce takes a callback function with two params, the **accumulator** and the **current value**. It iterates over the array and calls the cb function for each element. The return statement within the cb function **reassigns** the accumulator variable every time and we add the current value to the accumulator each time. Next, we need to initialize the accumulator. This is done in the _second_ param of the reduce method, which is the starting value of the accumulator.

> [!NOTE]
> If we do not specify the starting value of the accumulator (second reduce param) then the method will take the first value of the array as its initial value.

For example:

```js
const prices = [4, 8, 15, 16, 23, 42];

// Determine the total price of all items in a shopping cart.
// Use reduce method on the prices array, which reduces all numbers into a single value.
const totalPrice = prices.reduce((total, currentPrice) => {
  // Show the breakdown.
  console.log(`${total} + ${currentPrice} = ${total + currentPrice}\n`);
  // What is returned will be the total for the next iteration.
  // Each iteration we add the current price to the total so it updates the total each time.
  return total + currentPrice;
  // We need to initialize the accumulator, the starting value of the total.
}, 0);
// On the first iteration we add 4 to 0, then second we add 8 to 4, and so on.
console.log(totalPrice); // 108
```

Example where the reduce method returns a **string** instead of a **number**:

```js
const words = ["Hello", " ", "World"];
// Return a string of the combined string elements.
const sentence = words.reduce((result, word) => {
  return result + word;
  // Initial value would be empty string.
}, "");
console.log(sentence); // Hello World"
```

Example using the reduce method to return an object:

```js
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Tally up how many of each fruit there are and return as an object.
const count = fruits.reduce((tally, fruit) => {
  tally[fruit] = (tally[fruit] || 0) + 1;
  return tally;
}, {});

console.log(count); // {apple: 3, banana: 2, orange: 1}
```
