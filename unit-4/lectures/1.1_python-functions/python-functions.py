# -----------------------------
# NOTES
# - *args is similar to rest parameters in JavaScript.
# - It allows a function to accept an arbitrary number of positional arguments.
# - Inside the function, args is treated as a tuple.

# - **kwargs allows a function to accept an arbitrary number of keyword arguments.
# - Inside the function, kwargs is treated as a dictionary.
# -----------------------------

# -----------------------------
# PYTHON FUNCTIONS
# - Define a function that takes a variable number of arguments.
# - Use the *args syntax to accept any number of positional arguments.
# - Start with a total of 0.
# - For each argument passed to the function:
#   - Print the type of args to show it's a tuple.
#   - Add the argument to the total.
#   - Return the total after the loop.
# -----------------------------

def sum(*args):
  print(type(args)) # prints: <class 'tuple'>

  total = 0
  for arg in args:
    total += arg

    return total

print(sum(1, 2, 3, 4, 5)) # prints: 15
print(sum(10, 20))        # prints: 30
