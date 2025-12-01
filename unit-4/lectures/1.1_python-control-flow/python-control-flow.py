# Equality Operators
# ------------------------------
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

# Comparison Operators
# ------------------------------
print(8 > 8)
# prints: False
# 8 is not greater than 8

print(8 >= 8)
# prints: True
# 8 is greater than or equal to 8 (equal)

print(8 < 8)
# prints: False
# 8 is not less than 8

# Logical Operators
# ------------------------------
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

# MORE THAN ONE CONDITION
# or
# returns the first truthy operand, or the last operand

print(True or True or True)
# prints: True

print(True or True or False)
# prints: True

# and
# returns the first falsy operand, or the last operand

print(True and True and True)
# prints: True

print(True and True and False)
# prints: False

# MIX AND MATCH
print(False or True and True)
# prints: True

# Not Operator
# ------------------------------
print(not False)
# prints: True

print(not 'hello')
# prints: False

# Single Path Conditional
# ------------------------------
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

# Dual Path Conditional
# ------------------------------
val = 3

# if path
if val == 1:
    print('val is one')
# else path
else:
    print('val is not one')
    # prints: val is not one
    # since val is not 1, the else path is taken

# Multi Path Conditional
# ------------------------------
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

# Conditional Practice
# ------------------------------
# ? color = input('Enter "green", "yellow", "red": ').lower()
# ? print(f'The user entered {color}')

# Below that code, write an if...elif...else statement that prints out one of the following messages:
# - If green is entered, print the message Go!
# - If yellow is entered, print the message Slow Down!
# - If red is entered, print the message Stop!
# - If anything else is entered, print the message Bogus!

# - Now we will wrap this code in a while loop.
# - This should cause it to continue prompting the user for a color. The loop should end when the word quit is entered.

while True:
    color = input('Enter "green", "yellow", "red", or "quit" to exit: ').lower()
    print(f'The user entered {color}')
    if color == 'quit':
        print('Exiting the program. Goodbye!')
        break
    elif color == 'green':
        print('Go!')
    elif color == 'yellow':
        print('Slow Down!')
    elif color == 'red':
        print('Stop!')
    else:
        print('Bogus!')

# For Loop
# ------------------------------
names = ["Emily", "Jack", "Sophia", "Ethan"]

for name in names:
    print(name)

# While Loop
# ------------------------------
num = 1

while num <= 10:
    print(num)
    # prints the numbers 1 through 10
    num += 1

# Break and Continue Statements
# ------------------------------
things = ["computer", "g-g-ghost", "chair", "spider", "desk"]

for thing in things:
    if thing == "g-g-ghost":
        print("Oh, that's just my ghost friend, carry on.")
        continue
    elif thing == "spider":
        print("Nope. Burn it down, no more.")
        break
    print(f"There is a {thing} in the room.")

# Ternary Equivalent
# ------------------------------
time_of_day = 9
morning = True if time_of_day < 12 else False
print(morning)
# prints: True

# Ranges
# ------------------------------
for num in range(5):
    print(num)

for even in range(4, 12, 2):
    print(even)

nums = list(range(10))
print(nums)

for num in range(5, 0, -1):
    print(num)