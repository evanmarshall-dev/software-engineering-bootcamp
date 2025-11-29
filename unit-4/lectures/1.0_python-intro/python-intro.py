# Single Line Comment: This is a single line comment in Python

"""
Multi-line Comment: This is a multi-line comment in Python.
It can span multiple lines.
"""

# Printing to the console
print("Hello, World!")

# Variables
x = 10
y = 3.14
name = "Alice"
is_student = True

# Reassignment
counter = 20
print("Initial counter value:", counter)
counter = 30
print("Updated counter value:", counter)

# Data Types
print("Type of x:", type(x))
print("Type of y:", type(y))
print("Type of name:", type(name))
print("Type of is_student:", type(is_student))

# Converting Between Data Types
num_tacos = 25
msg = "There are " + str(num_tacos) + " tacos."
print(msg)

# Type Conversion Functions
print(int("123"))       # Output: 123
print(float("3.14"))    # Output: 3.14
print(str(42))          # Output: "42"
print(bool(0))          # Output: False
print(bool(1))          # Output: True
print(bool(""))         # Output: False
print(bool("Hello"))    # Output: True

# String Methods
print("ace of spades".split(" "))
print("abcd".index("c"))
print("abcd".find("e"))
print("Then I went to the store I like".replace("I", "you"))
print("eggs" in "green eggs and ham")
print(len("Tacos"))
print("Tacos".upper())
print("WHY???".lower())
print("Tacos".strip("T"))
print("Tacos".startswith("Ta"))
print("Tacos".endswith("os"))
print("Tacos".count("a"))
print("Tacos".index("a"))
print("Tacos".find("a"))
print("Tacos".replace("Tacos", "Burritos"))
print("Tacos".split("a"))
print("Tacos".join(["Taco", "Burrito", "Taco", "Burrito"])) 