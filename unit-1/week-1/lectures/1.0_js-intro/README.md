# Lecture: Intro to JavaScript (JS)

## Introduction

### What is JavaScript (JS)

JS is the only programming language used in the browser. It is designed to make the web interactive.

## Variables

### Concepts

We use the `let` or `const` **keywords** or **declarations** to _declare_ a variable.

The name or **identifier** of the variable follows the declaration. `let identifier`.

We can also assign a **value** to the variable using the equals or **assignment operator** (`=`). The declaration and assignment can happen on _one_ line or _multiple_ lines unless we use `const`. With const we have to declare and assign on one line, which is called **initialization**. `let identifier = value`.

> [!NOTE]
> We can change a variables value later (if using `let`), but we _cannot_ re-declare a variable.

### Naming Rules

The rules for identifiers are as follows:

- They are case sensitive.
- They cannot begin with a number.
- They can contain letters, digits, underscores, and dollar signs.
- They cannot contain spaces.
- They cannot be **reserved words** or **keywords**. [List of Reserved Words](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).

## Primitive Data Types

JS has seven primitive data types:

- String
- Number
- Boolean
- Undefined
- Null
- Symbol
- BigInt

### The `typeof` Operator

The typeof operator returns a string describing the data type.

## Dynamic vs Static Typed Languages

JavaScript, Python, and Ruby are **dynamically typed** languages. This means that they allow variables to be assigned different types during runtime.

Java and C++ are **statically typed** languages. They require a variables type to be declared and not changed.

```javascript
// JS

let data = 246; // typeof data is number.
data = "Howdy!"; // typeof data is string.
```

## Weak vs Strong Typed Languages

JavaScript is a **weakly-typed** language. Meaning, it allows for _implicit_ conversions between types. For example, if we assign a variable with a numerical value and then console log it within a string then JS will auto convert the number to a string.

Python is a **strongly-typed** language. If we tried the same thing as above in Python it would throw an error. In order to accomplish this in a strongly typed language we would have to _explicitly_ convert the number to a string (`profile = "I am " + str(age) + " years old."`).

```javascript
// JS

const age = 24; // typeof number.
const profile = "I am ${age} years old."; // typeof string.
```

> [!NOTE]
> There is a newer language called **TypeScript**, which is a superset of JavaScript that adds static and strong typing to JS (type-safety).

## Implicit & Explicit Type Conversion

### Implicit Type Conversion

JavaScript _automatically_ converts one data type into another such as when you perform arithmetic operations on values of different types.

When tend to use the **strict equality operator** (`===`) when we don't want implicit type conversion to occur.

### Explicit Type Conversion

Explicit type conversion is when you _manually_ convert one data type to another. The following **methods** allow you to perform explicit type conversions.

**_Convert to Strings_**

- `toString()` - `numVar.toString(); // Outputs a number as a string.`.
- `String()` - `String(numVar); // Outputs a number as a string.`.
- `toFixed()` - `decimalNumVar.toFixed(2); // Outputs a decimal number to a string with 2 decimal places.`.

**_Convert to Numbers_**

- `parseInt()` - Rounds down to the nearest whole number. `parseInt(strVar); // Outputs a string as a whole number.`.
- `parseFloat()` - `parseFloat(strVar); // Outputs a string as a number.`.
- `Number()` - `Number(strVar); // Outputs a string as a number.`.
