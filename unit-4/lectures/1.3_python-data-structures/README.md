# Python Data Structures

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

### Mutation

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
