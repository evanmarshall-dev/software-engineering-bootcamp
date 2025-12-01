# Control Flow in Python

## References

[PEP8 Style Guide](https://peps.python.org/pep-0008/)
[Python Ranges](https://docs.python.org/3/tutorial/controlflow.html#the-range-function)

## Fundamentals of Control Flow

Control flow is the order in which individual statements, instructions, or function calls are executed or evaluated in a programming language.

There are three basic control flow types:

- **sequence**: the default mode where statements are executed one after another.
- **branching**: decision-making structures that allow different paths of execution based on conditions (eg. In JavaScript, this is done with if-else statements and switch statements).
- **looping**: repeating a block of code multiple times (eg. In JavaScript, this is done with for loops and while loops).

Python shares these control flow types with JavaScript, but the syntax differs.

## Truthy and Falsy in Python

Like JavaScript, every piece of data in Python is considered either _truthy_ or _falsy_.

Conditional expressions used to construct branching and looping code rely on an expression evaluating to `True`/truthy or `False`/falsy to determine which path the code will follow.

`falsy` in Python:

- `False`
- `None`
- Zero in any numeric type: `0` `0.0`
- Empty sequences or collections:
  - `''` (empty string)
  - `[]` (empty list)
  - `()` (empty tuple)
  - `{}` (empty dictionary)
  - `range()` (empty range)

> [!NOTE]
> The first thing you might notice here is how closely this aligns with what is falsy in JavaScript. Note that `[]` and `{}` in JavaScript are truthy, but falsy in Python.

## Boolean Logic in Python

Python has two logical boolean values: `True` and `False`.

Most logical operations result in one of these two values. They work the same as in JavaScript but are always written with a starting capital letter in Python.

### Equality Operators

Equality operators `==` 'equal to' and `!=` 'not equal to.' Python has one type of equality operator `==`, which is equivalent to JS `===`.

**For Example**:

```python
print(7 == 7)
# prints: True
# 7 is equal to 7

print(7 == "7")
# prints: False
# 7 is an integer, and "7" is a string

print(7 != 7)
# prints: False
# 7 is equal to 7

print(7 != "7")
# prints: True
# 7 is an integer, and "7" is a string; therefore, they cannot be equal
```

### Comparison Operators

Python has all the same comparison operators as JavaScript:

| Operator | Description              |
| -------- | ------------------------ |
| `>`      | greater than             |
| `<`      | less than                |
| `>=`     | greater than or equal to |
| `<=`     | less than or equal to    |

**For Example**:

```python
print(8 > 8)
# prints: False
# 8 is not greater than 8

print(8 >= 8)
# prints: True
# 8 is greater than or equal to 8 (equal)

print(8 < 8)
# prints: False
# 8 is not less than 8
```

### Logical Operators

Logical operators we used in JavaScript work the same way in Python, except Python uses English words instead of symbols:

- `and` logical AND same as `&&` in JavaScript.
- `or` logical OR same as `||` in JavaScript.

Because they behave identically to their JavaScript counterparts, they always return either the first or the second operand as follows:

- `or` - Returns the first truthy operand, or the last operand.
- `and` - Returns the first falsy operand, or the last operand.

**For Example**:

```python
# or
# returns the first truthy operand, or the last operand

print(True or False)
# prints: True

print(False or True)
# prints: True

print(False or False)
# prints: False

print('hello' or 0)
# prints: 'hello'

print(0 or 'hello')
# prints: 'hello'

print('hello' or 'tacos')
# prints: 'hello'

# and
# returns the first falsy operand, or the last operand

print(True and False)
# prints: False

print(False and True)
# prints: False

print('hello' and 0)
# prints: 0

print(0 and 'hello')
# prints: 0

print('hello' and 'tacos')
# prints: 'tacos'
```

### The `not` Operator

Just like the not operator in JavaScript (`!`), the `not` operator in Python flips a truthy expression to a boolean value of `False`, and a falsy expression to a boolean value of `True`.

**For Example**:

```python
print(not False)
# prints: True

print(not 'hello')
# prints: False
```

## Indentation in Python

Instead of curly braces, Python uses indentation to define code blocks.

### Single Path `if` Statement

```python
floor = "sticky"
walls = "clean"

# notice the colon ':' after the conditional expression
# it indicates the start of the if block
if floor == "sticky":
    print("Clean the floor! It's sticky!")
    # this is where you would add more lines of code related to the condition
    # each line must be indented to be part of the 'if' block

# unindented code indicates that we have returned to normal code execution
print("This will always print, it's not inside of an if block!")

# parentheses are not required around the conditional expression
if walls == "sticky":
    print("Clean the walls! They're sticky!")
```

### Dual Path `if...else` Statement

```python
val = 3

# if path
if val == 1:
    print('val is one')
# else path
else:
    print('val is not one')
    # prints: val is not one
    # since val is not 1, the else path is taken
```

### Multi-path `if...elif...else` Statement

The `elif` is not a typo! It is Python’s syntax for `else if`. The `else` is always optional, just like it is in JavaScript.

```python
val = 3

if val == 1:
    print('val is one')
elif val == 2:
    print('val is two')
elif val == 3:
    print('val is three')
    # prints: val is three
    # since val is 3, this elif path is taken
else:
    print('not one, two, or three')
```

## Looping in Python

### The `for` Statement

In Python, the `for` loop is not designed like it is in JavaScript (JS). Instead, the Python `for` loop always iterates over the items in a _sequence_ (an ordered collection of items), similar to JavaScript’s `for...in` and `for...of` loops. Here’s how Python’s `for` loop is used to loop through a _list_ (Python’s version of a JavaScript array):

```python
names = ["Emily", "Jack", "Sophia", "Ethan"]

for name in names:
    print(name)
```

The JavaScript equivalent would be this:

```javascript
let names = ["Emily", "Jack", "Sophia", "Ethan"];

for (name of names) {
  console.log(name);
}
```

### The `while` Loop

Python also has a `while` loop construct that will continue to iterate while a given condition is truthy:

```python
num = 1

while num <= 10:
    print(num)
    # prints the numbers 1 through 10
    num += 1
```

`while` loops are great for when you don’t know how many times you will need to iterate - for example if you want to continue getting input from a user until a specific condition is met.

> [!WARNING]
> Beware of infinite loops! When using while loops, it’s important to ensure that the condition will change to a falsy value so that the loop eventually exits.

### The `break` and `continue` Statements

Like in JavaScript, the `break` statement in Python is used to exit `for` and `while` loops immediately.

In `for` and `while` loops, the `continue` statement will end the current iteration of a loop and continue to the next iteration as long as the condition of the loop is still truthy or there are still items to iterate through:

```python
things = ["computer", "g-g-ghost", "chair", "spider", "desk"]

for thing in things:
    if thing == "g-g-ghost":
        print("Oh, that's just my ghost friend, carry on.")
        continue
    elif thing == "spider":
        print("Nope. Burn it down, no more.")
        break
    print(f"There is a {thing} in the room.")
```

## Ternary Expressions

In JavaScript, we used the ternary expression to return one of two values concisely, depending on the result of evaluating a conditional expression.

**For Example**:

```javascript
// With a ternary expression
let timeOfDay = 9;
let morning = timeOfDay < 12 ? true : false;

// Without a ternary expression
let timeOfDay = 9;
let morning;
if (timeOfDay < 12) {
  morning = true;
} else {
  morning = false;
}
```

Python does not have a dedicated ternary operator. Instead, Python uses a modified syntax of `if/else`, which results in a ternary expression instead of a control flow construct:

```python
time_of_day = 9
morning = True if time_of_day < 12 else False
print(morning)
# prints: True
```

## Ranges

Python _ranges_ are a sequence type, similar to a list.

The range type represents an immutable sequence of numbers and is commonly used for looping a specific number of times in `for` loops.

Ranges have their own class (type): `range`. By default, the sequence starts at `0` and goes up to, but does not include, the integer passed in.

Ranges can only be created by invoking the `range()` class:

```python
for num in range(5):
    print(num)
    # prints the integers: 0, 1, 2, 3, 4
```

Ranges can also generate more complex sequences when passed a _start_ and a _step_:

```python
for even in range(4, 12, 2):
    print(even)
    # prints the integers: 4, 6, 8, 10
    # The start (the first argument above - 4) indicates the starting integer.
    # The step (the last argument above - 2) is an integer added to the current value after each iteration to determine the next value.
    # When not passed in, the start value defaults to 0, and the step defaults to 1.
```

Ranges can also be used to create lists:

```python
nums = list(range(10))
print(nums)
# prints: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Negative Step

If the step is a negative integer, the sequence counts down:

```python
for num in range(5, 0, -1):
    print(num)
    # prints the integers: 5, 4, 3, 2, 1
```
