# Intro to Python

## Fundamentals of Python Programming

### References

- [Data Types in Python](https://docs.python.org/3/library/stdtypes.html)
- [String Methods in Python](https://docs.python.org/3/library/stdtypes.html#string-methods)

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

JavaScript uses implicit type conversion (coercion) to convert between data types, while Python is more explicit about type conversion.

```python
num_tacos = 25
msg = "There are " + num_tacos + " tacos."
# TypeError: can only concatenate str (not "int") to str
```

When the time comes to convert one data type into another, Python provides us with several global functions or predefined classes to do so:

```python
str(item)        # Converts `item` to a string
int(item, base)  # Converts `item` to an integer with the provided `base`
float(item)      # Converts `item` to a floating-point number
hex(int)         # Converts `int` to a hexadecimal string
oct(int)         # Converts `int` to an octal string
tuple(item)      # Converts `item` to a tuple
list(item)       # Converts `item` to a list
dict(item)       # Converts `item` to a dictionary
```

## Performing Operations in Python

Python has the normal math operators that you are used to from JavaScript:

- Addition (+)
- Subtraction (-)
- Multiplication (\*)
- Division (/)
- Modulo (remainder) (%)
- Exponentiation (\*\*)

All work as you would expect. However, there are a few special operations worth mentioning.

### Integer Division

By default, when you divide two numbers (whether they are ints, floats, or a combination of the two), the result is a float, even if there is no remainder:

```python
result = 4 / 2
print(result)
# prints: 2.0
print(type(result))
# prints: <class 'float'>
```

You’re able to force the result of division to an integer by using `//` instead of `/`:

```python
result = 4 // 2
print(result)
# prints: 2 because the decimal ".0" is truncated
```

This will always round down - everything after the decimal is removed, similar to using the `Math.floor()` method in JavaScript.

### Shortcut Assignment Operators

As we saw in JavaScript, reassigning the result of an operation on a variable to the same variable is common. It is so common that several shortcut operators exist to make these types of operations easier to write.

Python has the same operators:

```python
# this line of code:
num = num + 1
# can be written with this shortcut operator:
num += 1

# it also works for any of the other math operations:
num = num / 5
# can be rewritten like this:
num /= 5

# and this line:
num = num * 3
# can be written as this:
num *= 3
# and so on with the other operators
```

> [!NOTE]
> A couple of our favorite operators in JavaScript, increment (`++`) and decrement (`--`), do not exist in Python. Use `+= 1` and `-= 1` instead.

## Working with Strings in Python

Like JavaScript, Python has strings for holding text. You can also create multiline strings using triple quotes (`"""` or `'''`).

### Concatenating Strings

One or more strings can be combined into a single string in the same way we do it in JavaScript by using the + operator:

```python
little_string = "bad"
medium_string = "super"
long_string = medium_string + little_string
print(long_string)
# prints: superbad
```

### String Interpolation

You might recall using string template literals in JavaScript, which allow embedding expressions in strings using backticks and `${}`.

Python’s approach is similar but has a key difference: you must prefix the string with an `f` to indicate it’s an f-string (formatted string literal).

```python
state = "Hawaii"
year = 1959
message = f"{state} was the last state to join the U.S. in {year}."
print(message)
# prints: Hawaii was the last state to join the U.S. in 1959.
```

### Useful String Methods

Like JavaScript, Python has several string methods we can use for string manipulation.

Some are familiar, like split(), but others have different names:

```python
print("ace of spades".split(" "))
# prints: ['ace', 'of', 'spades']

# however, this won't work:
print("abcd".split(""))
# ValueError: empty separator

# instead, use the list() function like this:
print(list("abcd"))
# prints: ['a', 'b', 'c', 'd']

# get the index of a substring:
print("abcd".index("c"))
# prints: 2
# this method raises an error if the substring is not found:
print("abcd".index("e"))
# ValueError: substring not found

# .find() is similar to .index() but returns -1 if the substring is not found
# this behavior may be preferable to raising an error:
print("abcd".find("e"))
# prints: -1

print("boo".upper())
# prints: 'BOO'

print("WHY???".lower())
# prints: 'why???'

print("Then I went to the store I like".replace("I", "you"))
# prints: 'Then you went to the store you like'
```

Want to know if a string contains a substring? You don’t even need a method for that! You can use the in operator to quickly find out if one string appears in another.

```python
print("eggs" in "green eggs and ham")
# prints: True
```

Use the built-in global len() function on a string to find its length.

```python
print(len("Tacos"))
# prints: 5
```
