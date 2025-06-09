# Lecture: Intro to JS Objects

## Module: Concepts

A single collection of zero or more _related_ properties and behaviors (methods). The **properties** are `key:value` pairs (Or dictionaries). Objects are a _structured data type_. The order of properties in an object are _not ordered_ like elements in an array.

- `key`: The identifier and must be a _string_ or _symbol_.
- `value`: An expression that evaluates to a _single_ value (i.e. string, number, boolean, object, function, etc).

> [!NOTE]
> When a function is bound to an object it is called a **method**. These methods can perform actions using the object's properties.

- **Object Oriented Programming (OOP)**: Organizing code around concept of objects.

The **browser** window and everything in it (i.e. buttons, images) are represented as objects in JS.

The **appearance** and **behavior** of webpage elements (i.e. color, click, size) are controlled using objects with each element's style and actions being the _properties_ of the object.

**Data submission** (i.e. contact form) is handled as an object on the server. Also when **data retrieved** from a database (i.e. user data) it is stored as an object.

**Primitive types** are converted into objects by JS when calling a method (i.e. `toUpperCase()`) on them. This is called **boxing**.
