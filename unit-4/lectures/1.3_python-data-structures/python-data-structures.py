# Dictionary

favourite_subject = 'calculus'

student = {
    'name': 'Maria',
    'favourite_integer': 5,
    favourite_subject: 'algorithms'
}

print(student)
name = student['name']
print(name)

if 'course' in student:
    print(f"{student['name']} is enrolled in {student['course']}")
else:
    print(f"{student['name']} is not enrolled in a course")

student['name'] = 'Mariana'
print(student['name'])

student['age'] = 25
print(student)

del student['calculus']
print('calculus' in student)

print(student)
print(len(student))
print(len({}))

for key, val in student.items():
    print(f"{key} is {val}")

# -----------------------------------------
# YOU DO
# - Define a Python dictionary named where_my_things_are containing a few items where:
#   - the keys are things you have
#   - the values are the locations where you keep those things
# - Write a for loop that iterates over the items in the dictionary and prints each one as:
#   - My [thing] is kept in [location]

where_my_things_are = {
    'laptop': 'desk',
    'notebook': 'backpack',
    'phone': 'pocket',
    'keys': 'key holder'
}

for thing, location in where_my_things_are.items():
    print(f"My {thing} is kept in {location}")

colors = ['red', 'green', 'blue']
print(colors[0])
print(colors[-1])

# colors[10] = 'yellow'

colors.append('purple')
print(colors)

colors.extend(['orange', 'black'])
print(colors)

colors.insert(1, 'yellow')
print(colors)

green = colors.pop(2)
print(colors)

colors.remove('orange')
print(colors)

# colors.clear()
# print(colors)

colors = ['red', 'green', 'blue']
for idx, color in enumerate(colors):
    print(idx, color)