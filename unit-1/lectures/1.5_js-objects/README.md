# Lecture: Intro to JS Objects

## Module: Concepts

### Definition

A single collection of zero or more _related_ properties and behaviors (methods). The **properties** are `key:value` pairs (Or dictionaries). Objects are a _structured data type_. The order of properties in an object are _not ordered_ like elements in an array.

- `key`: The identifier and must be a _string_ or _symbol_.
- `value`: An expression that evaluates to a _single_ value (i.e. string, number, boolean, object, function, etc).

> [!NOTE]
> When a function is bound to an object it is called a **method**. These methods can perform actions using the object's properties.

### OOP

- **Object Oriented Programming (OOP)**: Organizing code around concept of objects.

The **browser** window and everything in it (i.e. buttons, images) are represented as objects in JS.

The **appearance** and **behavior** of webpage elements (i.e. color, click, size) are controlled using objects with each element's style and actions being the _properties_ of the object.

**Data submission** (i.e. contact form) is handled as an object on the server. Also when **data retrieved** from a database (i.e. user data) it is stored as an object.

**Primitive types** are converted into objects by JS when calling a method (i.e. `toUpperCase()`) on them. This is called **boxing**.

### Object Literal Notation

Also known as an **Object Initializer**, is making an object literal by setting opening and closing curly braces to a variable.

### Dot Notation

Primary way to _access_, _add_, or _modify_ an object's properties is dot notation.

For example, to add properties to a music object: `music.currentPlaylist = ["Clumsy", "Ahead by a Century", "Closer"];`.

To access new property: `music.currentPlaylist[0];`.

## Module: Object Manipulation

To _update_ a property of an object you assign a new value to one of its keys.

For example: `music.volume = 60;`

To _delete_ or _remove_ a property from an object we use the `delete` operator.

For example: `delete music.currentPlaylist;`

## Module: Methods

A function that is a property of an object is a **method** of the object.

Generally, they define actions/behaviors for an object.

They can be defined at object initialization or if the objects already exists it can be assigned to it.

For example:

```js
arrayName.methodName = function () {
  objectAction.actionName = 0;
};
```

### Calling/Invoking Method

When calling a method it is similar to calling a function except you need to specify the object it belongs to. You use dot notation to access methods. Same as we have done with built-in methods (i.e. `.toUpperCase(), .splice()`).

For example:

```js
arrayName.methodName();
```

## Module: Data Structures

### Sample Object

```js
const music = {
  currentTrack: "Just Ken",
  trackIdx: 0,
  currentPlaylist: [
    "Just Ken",
    "Hey Blondie",
    "What Was I Made For",
    "Dance The Night",
  ],
  volume: 70,
  mute() {
    music.volume = 0;
  },
  // Calling this method increments the trackIdx property value by 1.
  next() {
    music.trackIdx += 1;
    // Keeps the currentTrack property value up to date after next() call.
    music.currentTrack = music.currentPlaylist[music.trackIdx];
  },
};
```

You can use objects and arrays together. Objects are used to group **related** data whereas arrays are used to group **sequential/ordered** data.

If we add more data to the `currentPlaylist` it will convert it into an array of objects rather than an array of strings. We can then access the object properties using dot notation.

For example:

```js
// Update current playlist values.
music.currentPlaylist = [
  {
    title: "Just Ken",
    artist: "Ryan Gosling",
    album: "Barbie The Album",
    length: "3:43",
  },
  {
    title: "Hey Blondie",
    artist: "Dominic Fike",
    album: "Barbie The Album",
    length: "2:21",
  },
  {
    title: "What Was I Made For",
    artist: "Billie Eilish",
    album: "Barbie The Album",
    length: "3:42",
  },
  {
    title: "Dance The Night",
    artist: "Dua Lipa",
    album: "Barbie The Album",
    length: "2:56",
  },
];

// Return properties of this element.
music.currentPlaylist[0].title;
// OR
music.currentPlaylist[music.trackIdx].title;
music.currentPlaylist[0].artist;
music.currentPlaylist[0].album;
music.currentPlaylist[0].length;
```

## Module: `this`

A keyword that refers to the object that is executing the code. Useful when the object name is not known or changes.

For example:

```js
const music = {
  currentTrack: "Just Ken",
  trackIdx: 0,
  volume: 70,
  mute() {
    this.volume = 0;
  },
};
```

## Module: Getters and Setters

Allow you to treat methods as properties that you can access without a function call/invoking.

## Module: Iterating Over Properties

Using a `for in` loop is one way to iterate over an object's properties.

For example:

```js
const movie = {
  name: "Inception",
  year: 2010,
  director: "Christopher Nolan",
  rating: 8.8,
};

for (let key in movie) {
  console.log(`${key}: ${movie[key]}`);
}
```

ES2017 came out with methods to iterate over an object's _own_ keys and values. Each returns an array that can be iterated over:

- `Object.keys()`
- `Object.values()`
- `Object.entries()`

For example:

```js
Object.values(movie).forEach((value) => {
  console.log(value);
});
```

## Module: Shorthand Property Syntax

Sometimes you will want to have values of a variable to be passed in as properties of an object. When the variable name matches the property name.

For example:

```js
const title = "Inception";
const year = 2010;
const director = "Christopher Nolan";
const rating = 8.8;

const movie = {
  title: title,
  year: year,
  director: director,
  rating: rating,
};

// Can be written as:
const movie = {
  title,
  year,
  director,
  rating,
};
```

## Module: How Variables Reference Objects

Variables are slots in _memory_ that hold a value. All non-object or primitive data types hold a _single_ value.

Objects (i.e. functions, arrays) can hold _multiple_ pieces of data. They are stored in a separate part of the _memory_ called the **heap**. A variable for an object's value is a **reference** or pointer.

## Module: Square Bracket Notation

We use _square_ bracket notation to access, add, update, and delete object properties _dynamically_ at runtime (We do not know the property that needs to be accessed).

For example:

```js
const voteArr = [
  "yes",
  "no",
  "yes",
  "no",
  "no",
  "no",
  "yes",
  "yes",
  "no",
  "no",
];

// NOT USING SQUARE BRACKET NOTATION.
function voteTallyDot(arr) {
  // Object that accumulates vote tallies.
  const tally = { yes: 0, no: 0 };
  // Loop through array passed to function.
  // Assign iterated element to variable vote.
  for (let i = 0; i < arr.length; i++) {
    const vote = arr[i];
    // Vote can be yes or no.
    if (vote === "yes") {
      // Look in tally object for key matching yes then increment value by 1.
      tally.yes += 1;
    } else if (vote === "no") {
      // Look in tally object for key matching no then increment value by 1.
      tally.no += 1;
    }
  }
  // Returned out of function.
  return tally;
}
// The above function accepts voteArr array as its argument.
console.log(voteTallyDot(voteArr));

// USING SQUARE BRACKET NOTATION
function voteTallySquare(arr) {
  const tally = {};
  for (let i = 0; i < arr.length; i++) {
    const vote = arr[i];
    // Does tally object have property matching vote.
    if (tally[vote]) {
      tally[vote] = tally[vote] + 1;
    } else {
      tally[vote] = 1;
    }
  }
  return tally;
}

console.log(voteTallySquare(voteArr));
```

## Module: Prototyping and Inheritance

String and array methods are built into the **object prototype** for each. Prototypes are how objects inherit from one another. Every object has a _built in_ property (prototype), which is an object itself (So prototype object has its own prototype). This is a **chain** of prototypes.

> [!NOTE]
> Anything that is not a primitive is an object.

Whenever you access a method JS searches up the chain to find it. For example, the array method `join()` is _inherited_ from the `Array.prototype` object.

> [!NOTE]
> JS also _converts_ primitives to an equivalent type object.
> This allows us to call methods on strings (i.e. `.length`, `split()`).
