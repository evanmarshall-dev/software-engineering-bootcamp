# Functions in Python

## Resources

[How To: Python Lambda Functions](https://realpython.com/python-lambda/)
[Python Expressions](https://docs.python.org/3/reference/expressions.html#lambda)

## Fundamentals

**Example Syntax**:

```python
# The def keyword followed by the name of the function in snake case.
# The parameters list inside parenthesis.
# The body of the function is indicated by the colon.
def function_name():
    # Statements that make up the function and must be indented.
    statements
    # Optional return statement.
    return statement
```

In contrast to JavaScript (JS), where you can define an empty function (Nothing inside the curly braces), Python _requires_ a statement.

Similar to JS, defining a function does _not_ execute it. A function must be called for it to run (eg. `function_name()`). You can _not_ invoke a function before the code that defines said function (Similar to function expressions/arrow functions in JS).

Similar to JS, functions are _reusable_ and can be called several times. Also, all functions _return_ something even when when do not explicitly have something returned. When we do not return something from a function in JS, it returns `undefined`, whereas if we do not return something from a function in Python, it returns `None`.

### Key Differences between Functions in JS and Python

- Function **expressions** do _not_ exist in Python. You cannot define a function by assigning it to a variable.
- Python has a different sort of **anonymous/inline** function. These are called _lambda_ functions and have a special syntax.
  - Lambda functions implicitly return a single expression's result.
  - Lambda functions _can_ be assigned to a variable.
  - They _cannot_ have any code blocks.
  - Lambda functions are useful when using Python functions such as `map()`, just like how arrow functions are when using JavaScript’s array iterator methods.

**Lambda Functions Example**:

```javascript
// In JS.
const nums = [1, 2, 4, 7, 8, 9];
let odds = nums.filter((num) => num % 2);
```

```python
# In Python
nums = [1,2,4,7,8,9]
odds = list(filter(lambda num: num % 2, nums))
```

## Parameters and Arguments in Python

### Parameters

In Python, parameters are variables that act as placeholders for values passed into functions. When a function with a parameter is called a value for the parameter must be provided.

### Arguments

An argument is the actual value you pass into a function when you call it. Like JS, they provide _input_ to a function.

> [!WARNING]
> In Python, you need to provide the correct number of arguments when calling a function or else an error will be thrown. This is unlike JS.

### How to Pass in Variable Number of Arguments

In JS, this is accomplished by using the **rest parameter**:

```javascript
const sum = (...nums) => {
  total = 0;

  nums.forEach((num) => {
    total += num;
  });

  return total;
};

console.log(sum(1, 5, 10)); // prints 16
```

In Python, you use an asterisk (`*`) before a parameter name to accept a variable number of **positional arguments** (Convention is to use `*args`):

```python
def sum(greeting, *args):
    print(type(args)) # prints <class 'tuple'>
    print(greeting) # prints Hello, friend

    total = 0
    for arg in args:
        total += arg

    return total

print(sum("Hello, friend", 1, 5, 10)) # prints Hello, friend 16
```

The `args` parameter becomes a **tuple** that contains all values passed to the function.

> [!NOTE]
> If your function has both required and variable arguments then the required one must come first (see above example).

## Keyword Arguments (`kwargs`)

Keyword Arguments are a different way of passing arguments that is not in JS. These arguments have a name and you can provide as many as you want to a function when calling it.

**Example Positional Arguments**:

```python
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee("CEO"))
# prints: { 'role': 'CEO' }
```

We can assign "CEO" to role (role is the parameter name) when we pass it into the function. The value will be matched to the role parameter because it has the same name.

**Example Keyword Arguments**:

```python
def make_employee(role):
    print(role)
    # prints: CEO

    employee = {"role": role}
    return employee

print(make_employee(role="CEO"))
# prints: { 'role': 'CEO' }
```

### Python's `**` Parameter Specifier (`**kwargs`)

If you want to access a varying amount of keyword arguments use `**kwargs` at the end of the parameter list (Not positional so after any positional arguments).

> [!NOTE]
> Like `args`, `kwargs` can be any keyword after `**`, but it is convention to be `kwargs`.

**For Example**:

```python
def make_employee(role, **kwargs):
    print(kwargs)
    # prints: {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
    print(type(kwargs))
    # prints: <class 'dict'>
    # kwargs is a dictionary - you can use it anywhere you'd use one:
    employee = {"role": role, "name": kwargs}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }
```

Keyword arguments are a dictionary so `kwargs` can be iterated through using something like the `values()` method:

```python
def make_employee(role, **kwargs):
    username = ""
    for name in kwargs.values():
        username += name

    employee = {"role": role, "username": username}
    return employee

print(make_employee("CEO", first="Sam", middle="Harris", last="Altman"))
```

You can combine `**kwargs` and `kwargs` within the same function, which also allows the `kwargs` to be out of order. When done, the "role" is not added to the `kwargs` dictionary:

```python
print(make_employee(first="Sam", middle="Harris", last="Altman", role="CEO"))
# prints: {
#     'role': 'CEO',
#     'name': {'first': 'Sam', 'middle': 'Harris', 'last': 'Altman'}
# }
```

### Combining Argument Types

Required positional, optional positional (`*args`), and keyword arguments (`**kwargs`) can all be used together. _Order_ is important:

```python
def arg_demo(pos1, pos2, *args, **kwargs):
    print(f'Positional params: {pos1}, {pos2}')
    print('*args:')
    for arg in args:
        print(' ', arg)
    print('**kwargs:')
    for keyword, value in kwargs.items():
        print(f'  {keyword}: {value}')

arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')

'''
prints:

Positional params: A, B
*args:
  1
  2
  3
**kwargs:
  color: purple
  shape: circle

'''
```
