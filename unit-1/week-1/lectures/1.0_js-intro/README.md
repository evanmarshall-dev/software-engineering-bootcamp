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
