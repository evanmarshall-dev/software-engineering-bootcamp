# Unit 1

## Lecture 1.2: Intro to JavaScript (JS)

### Concepts

are you repeating something?
should something happen or not?
how to structure your data

spelling, keywords, punctuation, spacing, and indentation

steps to take to solve a problem
how code interacts with other code

we are building software. It will largely by on the web, but we are not just making websites we are making apps.

You can **declare** a variable and **assign** a value or declare and assign value later. Declaring and assigning _on one line_ is called **initialization**.

```javascript
let phrase;
phrase = "YOLO!";
console.log(phrase);
```

With `const` you need to initialize. You _cannot_ declare and then assign on multiple lines.

A variable is considered **defined** when is exists and has a value other than undefined.

When using traditional **concatenation** (quotes and plus) and we want to run an _expression_ we use parenthesis (`console.log("The sum of 1 + 2 is " + (1 + 2) + ".")`).

### Dynamic vs Static Typed Languages

Dynamically-typed languages such as JavaScript, Python, and Ruby allow variables to be assigned different types of data during runtime (as the program executes).

For example, in JavaScript, we can do this:

```javascript
// Declare a variable named data and initialize with a number
let data = 123;
// Reassigning a different type of data is allowed
data = "Hello";
```

However, statically-typed languages such as Java and C++ require a variable’s type to be declared and cannot be changed:

```java
// Declare a variable as an integer and initialize it with an int
int data = 123;
// Assigning anything other than an integer raises an error
data = "Hello";
// NOT ALLOWED
```

> [!TIP]
> In a dynamically-typed language, the type of a variable can change at any time and is assigned a type based on whatever the variable’s value is at the time. In a statically-typed language, once a variable is given a type, that type cannot change.

### Weak vs Strong Typed Languages

Weakly-typed languages such as JavaScript allow implicit conversions between types, which can lead to interesting results. For example:

```javascript
const num = 7;
const sentence = `A week is ${num} days.`;
console.log(sentence);
// Prints: A week is 7 days.
```

From the above, we can see that JavaScript will happily automatically convert the number 7 into a string so that it can be concatenated with the rest of the sentence. That same code in a strongly-typed language would not function. For example, in Python:

```python
num = 7
sentence = "A week is " + num + " days."
# Error! A string and an int cannot be concatenated!
```

To make this valid code, the num must be explicitly converted into a string before it can be concatenated with the other strings surrounding it:

```python
num = 7
sentence = "A week is " + str(num) + " days."
# This works!
print(sentence)
# Prints: A week is 7 days.
```

There is a newer language called TypeScript you might hear about - this language is a superset of JavaScript and adds static and strong typing to JavaScript. Many developers agree that these type-safety features make code less error-prone and are worth the extra effort to code.

> [!TIP]
> In a weakly-typed language, conversions between unrelated data types occur implicitly. Conversions between unrelated data types must be explicitly made in a strongly-typed language.

### Implicit & Explicit Type Conversions

JavaScript is very relaxed when it comes to data types. Contrary to non-dynamic languages, a variable can change its type.

```javascript
let num = 15; // I'm a number
num = "Hey!"; // Now I'm a string!
```

Implicit type conversion is the process of automatically converting one data type to another. JavaScript performs implicit type conversion in various situations, such as when you perform arithmetic operations on values of different types.

JavaScript is friendly and tries to help us whenever it can. However, sometimes this help can backfire if we lack knowledge of these behaviors.

Try adding a string to a number. What did JS do?

Now try comparing a number and a string containing the same digits using the equality (==) comparison operator:

```javascript
13 == "13";
// true!

// This is why we use the strict equality operator (===). It will not perform type conversion.

13 === "13";
// false!
```

Explicit type conversion is the process of manually converting one data type to another. You can use the following methods to perform explicit type conversion:

To convert into strings:

- using the `toString()` method

```javascript
let numOne = 123.456;
let strOne = numOne.toString(); // "123.456"
```

- using the `String()` method

```javascript
let numTwo = 123.456;
let strTwo = String(numTwo); // "123.456"
```

- using the `toFixed()` method

```javascript
let numThree = 123.456;
let strThree = numThree.toFixed(2); // "123.46"

//Note that we must specify the number of decimals we want inside the ()’s.
```

To convert into numbers:

- using the `parseInt()` method

```javascript
let strFour = "1234.567";
let numFour = parseInt(strFour); // 1234

//parseInt() rounds down to the nearest whole number.
```

- using the `parseFloat()` method

```javascript
let strFive = "1234.567";
let numFive = parseFloat(strFive); // 1234.567
```

- using the `Number()` method

```javascript
let strSix = "1234.567";
let numSix = Number(strSix); // 1234.567
```

Implicit type conversion can be convenient but can lead to unexpected results. It’s important to be aware of the situations in which JavaScript will perform implicit type conversion.

> [!TIP]
> In general, it’s best to use explicit type conversion when we need to be sure that a value is of a certain type. For example, if we’re writing a function that expects a number value as a parameter, we should use the `Number()` function to convert the value to a number before using it in the function.
