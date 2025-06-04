# Lecture: JS Control Flow

## Module: Concepts

Control flow is the order in which code is executed within a program. It is important when we want our code to behave differently based on certain conditions or user input.

### Types of Control Flow

**_Sequence_**

Statements execute one at a time in succession (_Default_ behaviour).

**_Branching_**

Different code paths are executed based on a _conditional_ expression.

**_Looping_**

Code loops repeatedly while a condition is _truthy_.

Control flow allows us to _make decisions_ based on conditions, _Repeat_ tasks until a condition is met (looping), _Interact with users_ by responding when the user interacts with the program, and _handle errors_ gracefully by directing the program to take specific actions when something goes wrong. Running code top to bottom or in sequence does not always work in real world apps.

## Module: Boolean Logic

We often need to perform **comparisons** between values in coding. We use special symbols called **operators** in order to do so. Operators tell the computer to perform _mathematical_, _relational_, or _logical_ operations.

The items we compare using the said operators are called **operands**.

### Equality Operators

**_Strict Equality_** (`===`) - Compares operands for if they are equal in both value and data type.

**_Loose Equality_** (`==`) - Compares operands for if they are equal in value.

### Relational Operators

- `<` - Less than.
- `>` - Greater than.
- `<=` - Less than or equal to.
- `>=` - Greater than or equal to.

### Logical Operators

Logical operators are used when you need to make decisions based on the **truthiness** or **falsiness** of values. They can help you evaluate multiple conditions at once.

- `||` - The logical **OR** operator allows you to evaluate multiple conditions and if _any_ of the conditions evaluate to `true` then the operator resolves to `true`.
- `&&` - The logical **AND** operator also evaluates multiple conditions, but in order to have the operator resolve to `true` _every_ condition must evaluate to `true`.

### The Not Operator

- `!` - The **not** (`!`) operator or **bang** operator flips a `true` or `false` expression to the opposite boolean value.
- `!==` - The **strict inequality** operator evaluates to true when the expression is _not_ strictly equal.

## Module: Branching

Branching is a type of control flow that allows for different code paths to run based on specific conditions.

### The `if` Statement

The if statement or **single path** branching checks a condition. If the condition is met or `true` then the code within the block will run.

### The `if-else` Statement

The if-else statement or **dual paths** branching checks a condition. If the condition is `true` the code within the block will run. If the condition is not met or `false` then the code within the `else` block will run.

For example:

```javascript
const val = 2;

if (val === 1) {
  console.log("The value is 1.");
} else {
  console.log("The value is not 1.");
}

// Can also be written with ternary operators.
val === 1 ? console.log("The value is 1.") : console.log("The value is not 1.");
)
```

### The `if-else`, `else-if` Statements

The three or more code paths or multiple if-else statements can use as many else if statements you need and end with an else statement.

## Module: Looping

Looping is a control flow type that _repeats_ a set of actions or code blocks. These actions are repeated until a _condition_ is no longer or for a certain amount of _iterations_.

### The `for` Loop

The for loop repeats until a condition is false.

It is broken down into the following steps:

1. **Initialization** - Starts a counter variable before loop runs (`let i = 0;`).
2. **Condition** - Evaluates an expression before each iteration. It is the condition checked to be true/false (i.e. `i <= 10;`).
3. Code Block or Statement - Actions to be repeated each loop iteration (i.e. `console.log(i);`).
4. **Afterthought** - Expression evaluated at the end of each iteration. Updates the loop counter and evaluated after code block runs (i.e. `i++`).

For example:

```javascript
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
```

> [!TIP]
> It is not required to use `i` as the loop counter. It is often better to use descriptive counters such as `number`.

## Module: Truthy and Falsy

Truthy and Falsy are a concept that treats non-boolean (`true`/`false`) as boolean during runtime (i.e. Evaluating conditionals).

Most things in JS are truthy (i.e. objects or arrays and functions). Falsy values are:

- `null`: Intentional absence of value.
- `undefined`: Variable not defined.
- `false`: Boolean value of false.
- `0`: Number zero.
- `NaN`: Not a number, which is not a valid number.
- `""`: Empty string.

> [!NOTE]
> Truthy/Falsy allows us to write a condition that checks truthiness/falsiness without explicitly writing it out.

For example:

```javascript
let string = "non empty or truthy string";

if (string) {
  console.log("Truthy");
}

// Instead of...

if (string !== "") {
  console.log("Truthy");
}
```

## Module: Single Line `if`

When you have a simple condition that has a single action you can remove curly braces and write the action right after the condition. These are used to keep your code clean and readable.

```javascript
if (val === 1) console.log("The value is 1.");
```

## Module: Nested Branching Statements

Sometimes one condition relies on another so you nest them. With these we place `if` statements within `if` or `else` blocks.

Multiple nests can become too complex and confusing so use sparingly.

## Module: Ternary Operator

Used when carrying out one or two actions based on a condition. We can only use expressions or code that evaluates to a single output in ternary operators.

For example:

```javascript
if (val === 1) {
  console.log("The value is 1.");
} else {
  console.log("The value is not 1.");
}

// Versus with a ternary operator...
val === 1 ? console.log("The value is 1.") : console.log("The value is not 1.");

// Or...

let num;

if (val === 1) {
  num = "The value is 1.";
} else {
  num = "The value is not 1.";
}

// With ternary operator used...
let num = val === 1 ? "The value is 1." : "The value is not 1.";

console.log(num);
```

## Module: `switch` Statements

If you have more than three code paths and your conditional always checks the same variable, then instead of using `if` `else` it would be better to use a `switch` statement.

For example:

```javascript
const mealType = "breakfast";

if (mealType === "breakfast") {
  console.log("It's breakfast time!");
} else if (mealType === "lunch") {
  console.log("It's lunch time!");
} else if (mealType === "dinner") {
  console.log("It's dinner time!");
} else if (mealType === "snacks") {
  console.log("It's snack time!");
} else {
  console.log("Invalid meal type!");
}

// Versus with a switch statement...
switch (mealType) {
  case "breakfast":
    console.log("It's breakfast time!");
    break;
  case "lunch":
    console.log("It's lunch time!");
    break;
  case "dinner":
    console.log("It's dinner time!");
    break;
  case "snacks":
    console.log("It's snack time!");
    break;
  default:
    console.log("Invalid meal type!");
}
```

> [!NOTE]
> Make sure you have the `break` between each statement in order to allow a break of execution is condition is truthy.

## Module: `while` Loops

When we are not sure how many times we need to repeat an action we would use a `while` loop. The `while` loop only specifies the condition.

```javascript
for (let number = 1; number <= 10; number++) {
  console.log(number);
}

// Versus with a while loop...
let number = 1;

while (number <= 10) {
  console.log(number);
  number++;
}
```

> [!WARNING]
> Do not forget the increment number in a `while` loop or you could run into an infinite loop.

## Module: `do-while` Loops

Similar to `while` loops except they **require** the code block to execute at least once regardless of the condition being truthy or falsy.

```javascript
let num = 120;

do {
  console.log(`${num} is even`);
  num += 2;
} while (num <= 10);
```

## Module: Logical Operators

Logical OR (`||`) and Logical AND (`&&`).

**Logical OR** (`||`): Checks each expression left to right and returns the _first_ **truthy** value. If all falsy, it returns the last falsy value.

**Logical AND** (`&&`): Checks each expression left to right and returns the _first_ **falsy** value. If all truthy, it returns the last truthy value.

> [!TIP]
> The logical AND operator is often used for _conditionals_. Both logical operators can be used to handle _default_ values.
