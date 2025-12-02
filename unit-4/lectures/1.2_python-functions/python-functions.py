# Lambda Function
nums = [1, 3, 6, 7, 8, 10]
odds = list(filter(lambda num: num % 2, nums))
print(odds)

# Variable and Required Argument Function
def sum(greeting, *args):
    print(type(args))
    print(greeting)

    total = 0
    for arg in args:
        total += arg

    return total

print(sum("Hello, friend", 1, 5, 10))

# Positional and Keyword Argument Function
def arg_demo(pos1, pos2, *args, **kwargs):
    print(f'Positional params: {pos1}, {pos2}')
    print('*args:')
    for arg in args:
        print(' ', arg)
    print('**kwargs:')
    for keyword, value in kwargs.items():
        print(f'  {keyword}: {value}')

arg_demo('A', 'B', 1, 2, 3, color='purple', shape='circle')