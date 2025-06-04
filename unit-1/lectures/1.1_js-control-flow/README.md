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
