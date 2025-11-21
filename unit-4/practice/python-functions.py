# ------------------
# PSEUDO CODE
# - Define a function that takes two arguments and returns their difference.
# - Define a function that takes a name as an argument and says hello to that name.
# - Create sayhelloadv that takes a dictionary with a name and age property and prints "hello [name], how does it feel to be [age] years old"
# - Looper takes one array as an argument, it loops over the array and prints each item item individually.
# ------------------

# Example #1
# ------------------
def sub_nums (a, b):
    return a - b

print(sub_nums(10, 5))  # Expected output: 5

# Example #2
# ------------------
def say_hello(name):
    return f"Hello, {name}!"

print(say_hello("Alice"))  # Expected output: "Hello, Alice!"

# Example #3
# ------------------
def say_hello_adv(person):
    name = person['name']
    age = person['age']
    return f"Hello {name}, how does it feel to be {age} years old?"

print(say_hello_adv({"name": "Bob", "age": 30}))  # Expected output: "Hello Bob, how does it feel to be 30 years old?"

# Example #4
# ------------------
def looper(arr):
    for item in arr:
        print(item)

looper([1, 2, 3, 4, 5])  # Expected output: 1 2 3 4 5 (each on a new line)

# ------------------
# PSEUDO CODE
# - Find the length of a list.
# ------------------

# The List
# ------------------
my_list = [10, 20, 30, 40, 50]

# Example #1
# ------------------
def list_length(lst):
    return len(lst)

print(list_length(my_list))  # Expected output: 5