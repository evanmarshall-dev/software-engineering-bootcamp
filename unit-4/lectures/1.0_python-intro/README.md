# Intro to Python

## Fundamentals of Python Programming

### References

- [Data Types in Python](https://docs.python.org/3/library/stdtypes.html)

### Overview

Python can be used for a variety of tasks beyond web development including: software, data analysis, artificial intelligence, scientific computing, and more. It is highly readable and has a simple syntax, making it easy to learn for beginners. It is cross-platform, open-source, and has a robust community and extensive libraries.

Python is a **high level** programming language so developers can write code without worrying about low-level details like memory management.

It is a dynamic language, meaning that it does not have to be compiled before it is run. This allows for faster development and testing. IT is also interpreted, meaning that code is executed line by line, which can make debugging easier.

Frameworks like Django and Flask make it easy to build web applications quickly. Beyond the web, libraries like NumPy, Pandas, and TensorFlow make it useful for data analysis, machine learning, and artificial intelligence.

### Changes with Python 3

Python 3 introduced several changes and improvements over Python 2, including:

- Fixed fundamental design flaws and improved consistency in syntax and behavior.
- The changes were not backward compatible, meaning that code written in Python 2 may not run correctly in Python 3 without modification.

### Comments

A single line comment starts with a `#` symbol. Everything after the `#` on that line is ignored by the interpreter.

```python
# This is a single line comment
print("Hello, World!")  # This comment is after code
```

For multi-line comments, you can use triple quotes (`'''` or `"""`), although this is technically a multi-line string that is not assigned to any variable.

```python
'''
This is a multi-line comment.
It can span multiple lines.
'''

"""This is another way to write
multi-line comments.
"""

# Also, you can use multiple single line comments
# to achieve the same effect.
```

### Printing to the Console

To print output to the console in Python, you use the `print()` function.

```python
print("Hello, World!")
```

Any python script can be run from the command line using the `python` command followed by the script name.

```bash
python <filename>.py
```

## Python Variables

### Declaring Variables

In Python, you can declare a variable by simply assigning a value to it using the `=` operator. Python is dynamically typed, so you do not need to specify the data type of the variable nor use `let` or `const` keywords.

```python
name = "Alice"        # String variable
age = 30              # Integer variable
height = 5.5          # Float variable
is_student = False    # Boolean variable
```

Since there is no undefined data type in python you cannot declare a variable without assigning to it.

### Naming Conventions

Variables are case sensitive, so `myVariable` and `myvariable` would be considered different variables.

When you have a variable name of multiple words, it is common practice to use snake_case (all lowercase letters with underscores between words).

```python
first_name = "John"
last_name = "Doe"
```

### Variable Reassignment

We can freely assign a new value to a variable after it has been declared. Reassignment replaces the previous value with the new one.

```python
counter = 10
print(counter)  # Output: 10

counter = 20
print(counter)  # Output: 20
```

### Constant Variables

Python does not have built-in support for constant variables like some other languages. However, by convention, variables that are intended to be constants are written in all uppercase letters with underscores separating words (This is called `SCREAMING_SNAKE_CASE`). It does not prevent reassignment, but it signals to other developers that the variable should not be changed.

```python
PI = 3.14159
GRAVITY = 9.81
```

## Data Types in Python

Python is a true object oriented programming language (OOP) and every piece pf data is an object that is an instance of class. A class is a blueprint for creating objects.
This means that a string object will have attributes and methods associated with it that are defined in the string class whereas an integer object will have different attributes and methods defined in the integer class.

Python data types are similar to JavaScript (JS) there are just more of them. Unlike JS, Python has a specific data type for integers and floating point numbers. Even if there is no number after the decimal point, it is still considered a float if it has a decimal point. For boolean we have true and false values represented by `True` and `False` (capitalized).

Nothingness (`<class 'NoneType'>`) in Python is represented by the `None` keyword (Similar to null in JS).

### Checking Data Types (Classes)

We use the `type()` function to check the data type of an object, for example:

```python
print(type("Hello, World!"))   # Output: <class 'str'>
print(type(42))                # Output: <class 'int'>
print(type(3.14))              # Output: <class 'float'>
print(type(True))              # Output: <class 'bool'>
print(type(None))              # Output: <class 'NoneType'>
```

### Converting Between Data Types
