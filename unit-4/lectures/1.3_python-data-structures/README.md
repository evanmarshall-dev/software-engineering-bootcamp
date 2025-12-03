# Python Data Structures

## References

[Complex Math with Sets](https://realpython.com/python-sets/)

## Fundamentals

### Python Dictionaries

Similar to collections of _properties_ (**objects**) in JavaScript (JS), dictionaries are collections of _items_.

Dictionaries have a class type of `dict`.

### Dictionary Literal Syntax

```python
favourite_subject = 'calculus'
# Dictionary.
student = {
    # name is a key.
    # Maria is a value.
    # Both are an item or key:value pair.
    'name': 'Maria',
    'favourite_integer': 5,
    favourite_subject: 'algorithms' # No quotes for key.
}
print(student) # prints: {'name': 'Maria', 'favourite_integer': 5, 'calculus': 'algorithms'}

name = student['name']
print(name)
```

> [!NOTE]
> Any immutable type (eg. number) can be used as a key. Unlike in JS, when a string is used as a key they must be surrounded in quotes. The value held by a variable can also be used as a key.

### Accessing Items in Dictionaries

We use square brackets to get an item's value. You _cannot_ use dot notation due to them being exclusively used to invoke methods on dictionaries.

When attempting to access a key that does not exist in a dictionary a `KeyError` will be raised. To avoid this you can use the `get` method:

```python
favorite_food = student['favorite_food']
# error: KeyError: 'favorite_food'

print(student.get('favorite_food'))
# prints: None
```

Or you can use the `in` operator to check if a dictionary contains a key:

```python
if 'course' in student:
    print(f"{student['name']} is enrolled in {student['course']}")
else:
    print(f"{student['name']} is not enrolled in a course")
    # prints: Maria is not enrolled in a course
```

### Dictionary Mutation

Dictionaries are _mutable_. The values assigned to a key _can_ be changed, additional items _can_ be added, and existing items _can_ be deleted.

We _also_ use square brackets to set an item's value (not just get an item's value):

```python
student['name'] = 'Mariana'
print(student['name'])
# prints: Mariana
```

We can assign to a key that does not exist to create a new item in the dictionary:

```python
student['age'] = 25
```

The `del` statement is used to delete an item from a dictionary:

```python
del student['calculus']
# verify that the item was deleted
print('calculus' in student)
# prints: False
```

### Number of Items

We use the built-in len function to retrieve the number of items in a dictionary:

```python
print(student)
# prints: {'name': 'Maria', 'favorite_integer': 5, 'age': 25}
print(len(student))
# prints: 3
print(len({}))
# prints: 0
```

### Iterating Through Dictionaries

The `for` loop is used to iterate over items in a dictionary. To just use a `for` loop is considered an **anti-pattern** so it is preferred to use in conjunction with `items()` method to obtain a [dictionary view object](https://docs.python.org/3/library/stdtypes.html#dictionary-view-objects).

Use a `for in` loop to iterate over the view object:

```python
for key, val in student.items():
    print(f"{key} is {val}")
    # prints:
    # name is Mariana
    # favorite_integer is 5
    # age is 25
```

> [!NOTE]
> The for statement assigns values for multiple variables (`key, val`) through a mechanism called `tuples`.

## Lists in Python

Lists are similar to arrays in JS. They hold zero or more elements, they can obtain any data type, are zero-based, and grow/shrink in size dynamically.

They have a class type of `list`. They are considered a _sequence type_ or ordered collection. Other sequence types include `strings` and `tuples`.

### Syntax of a List

```python
# colors is the list name.
# List indicators are the square brackets.
# List elements are within square brackets, separated by commas, and a list can be initialized with empty brackets.
colors = ['red', 'green', 'blue']
```

### Accessing Items

Similar to JS, we access items by using square brackets with an expression that evaluates to an integer representing the item index.

_Unlike_ JS, we can use negative integers to index from the _end_ of the list.

> [!NOTE]
> With negative integers, we do not need to get the length of the list to find the end (eg. `colors[len(colors) - 1]`).

### List Mutation

Lists are also _mutable_. Existing items in a list can be _replaced_, additional items can be _added_, and existing items can be _removed_.

We also use square brackets to target an item of a list for assignment:

```python
colors[-1] = 'brown'
print(colors)
# prints: ['red', 'green', 'brown']
```

Unlike with JavaScript arrays, assigning to a non-existing index results in an error:

```python
colors[10] = 'yellow'
# error: IndexError: list assignment index out of range
```

The equivalent to JavaScript’s `push()` method is `append()`, but `append()` can only add one item and does not return a value.:

```python
colors.append('purple')
print(colors)
# prints: ['red', 'green', 'brown', 'purple']
# purple was added to the end of the list
```

For adding multiple items, use the `extend()`:

```python
colors.extend(['orange', 'black'])
print(colors)
# prints: ['red', 'green', 'brown', 'purple', 'orange', 'black']
# orange and black were added to the end of the list
```

To add an item anywhere within a list, use the `insert()` method:

```python
colors.insert(1, 'yellow')
print(colors)
# prints: ['red', 'yellow', 'green', 'brown', 'purple', 'orange', 'black']
# yellow was added at the 1 index; no elements were replaced
```

Python lists have a `pop()` method, but it’s more flexible in Python because you can specify the index of the item to remove and return:

```python
green = colors.pop(2)
print(colors)
# prints: ['red', 'yellow', 'brown', 'purple', 'orange', 'black']
# green was removed at the 2 index and is in the green variable
```

There’s also a `remove()` method that removes the first item that matches what you pass in. No value is returned by the `remove()` method:

```python
colors.remove('orange')
print(colors)
# prints: ['red', 'yellow', 'brown', 'purple', 'black']
```

The `clear()` method empties a list:

```python
colors.clear()
print(colors)
# prints: []
```

### Iterating Over Items in a List

The `for in` loop is used to iterate over the items in a list:

```python
colors = ['red', 'green', 'blue']
for color in colors:
    print(color)
    # prints:
    # red
    # green
    # blue
```

If we need to access the index of the item while iterating over a list, we use the built-in `enumerate()` function to provide the index and the value to a `for` loop:

```python
for idx, color in enumerate(colors):
    print(idx, color)
    # prints:
    # 0 red
    # 1 green
    # 2 blue
```

## Tuples

Tuples in Python are very similar to Python lists.

A tuple can hold zero or more items. Tuples can contain any data type and have a class (type) of `tuple`.

Tuples are commonly classified based on the number of items they contain. For example, a 2-tuple would likely contain two items, such as (`key, value`).

### Tuple Syntax

They can be defined a few different ways, but below is the basic syntax:

```python
# Colors is the name of the tuple.
# Tuples indicated by parenthesis. These are optional unless you are creating an empty tuple.
# Tuples items are placed within the parenthesis, separated by commas.
# A comma is necessary even when declaring a 1-tuple.
colors = ('red', 'green', 'blue')

hello_tuple = ('Hello',)
print(type(hello_tuple)) # prints <class 'tuple'>
```

### Differences Between Tuples and Lists

The main difference between tuples and lists is that tuples are _immutable_. Since tuples can’t be changed after being created, they are great for protecting data you don’t want to be changed. Because they are immutable, tuples can even be used as _keys_ for _dictionaries_.

Generally, you’ll find that tuples contain heterogeneous (different) data types and lists for homogeneous (similar) data types.

Although tuples can’t be modified like lists, we can retrieve their items in the same way using square brackets:

```python
colors = ('red', 'green', 'blue')
print(colors[1])
# prints: green
```

Sequences (lists, tuples, and strings) also have an `index()` method that returns the index of the first match:

```python
colors = ('red', 'green', 'blue')
blue_idx = colors.index('blue')
print(blue_idx)
# prints: 2
```

The items in tuples are iterated over by using `for` loops, as we saw previously with lists:

```python
for idx, color in enumerate(colors):
    print(idx, color)
    # prints:
    # 0 red
    # 1 green
    # 2 blue
```

Tuples (and other sequences) have a convenient feature called _unpacking_. This performs multiple variable assignments in a single line of code:

```python
colors = ('red', 'green', 'blue')
r, g, b = colors
print(r, g, b)
# prints: red green blue
```

_Functions_ and _methods_ often return tuples in Python, which is often the preferred method of accessing them.

For Example, with for in loops and dictionaries:

```python
for key, val in student.items():
    print( f"{key} is {val}" )
```

## Sets

A set is an unordered collection of unique items called _elements_. Unlike lists and tuples, sets do not allow duplicate elements. Sets are not indexed. Elements in a set can be added and removed but cannot be changed.

Sets are commonly used for mathematical operations like union, intersection, and difference. This makes them useful for tasks such as removing duplicates and finding common elements in multiple collections.

There are two ways to define a set in Python - using curly braces (`{}`) or the `set()` function:

```python
integer_set = {1, 2, 3, 4, 5}

# OR

another_int_set = set([5, 6, 7, 8, 9])

chips = ['potato', 'computer', 'fish and']
chips_set = set(chips)
```

### Operations on Sets

Sets support various operations such as adding elements, removing elements, and performing mathematical set operations:

```python
# Adding elements to a set
chips_set.add('paint')
print(chips_set)
# prints: {'paint', 'fish and', 'potato', 'computer'}
# remember, sets are not ordered - your elements may print in a different order

# Removing elements from a set
chips_set.remove('fish and')
print(chips_set)
# prints: {'potato', 'paint', 'computer'}
# remember, sets are not ordered - your elements may print in a different order
```

## List Comprehensions

List comprehensions are a powerful feature in Python.

They provide a concise way to create and work with lists. They’ll likely seem confusing at first, but they are a favorite of Python fans, and you will probably come across them when googling.

> [!NOTE]
> List comprehensions always return a new list, leaving the original list unmodified.

### Numerical Example

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = []

# we want 'n * n' for each 'n' in nums
for n in nums:
    squares.append(n * n)

print(squares)
# prints [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Now using list comprehension to reduce code:
squares = [n * n for n in nums]
```

### Basic Syntax

```python
# [<expression> for <item> in <list>]
# This reads as: I want <expression> for each <item> in <list>
```

As you can see, a list comprehension is basically a modified for in loop within square brackets, which returns a new list.

### Filtering the Items

We just saw how list comprehensions are an excellent way to map a list, but they can be used for _filtering_ too:

```python
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_squares = []

# we want 'n * n' for each 'n' in nums  if 'n * n' is even
for n in nums:
    square = n * n
    if square % 2 == 0:
        even_squares.append(square)

print(even_squares)
# prints: [4, 16, 36, 64, 100]

# Now using list comprehension to reduce code:
even_squares = [n * n for n in nums if (n * n) % 2 == 0]
```
