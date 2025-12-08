# Defining a simple Dog class in Python
class Dog():
    next_id = 1

    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        # Assign next_id to this instance
        self.id = Dog.next_id
        # Increment the next_id for the next instance
        Dog.next_id += 1

    def bark(self):
        print(f'{self.name} says woof!')

# Instantiate Object from Dog Class
# ? ruby = Dog('Ruby', 3)
# ? print(ruby)
# ? print(ruby.name, ruby.age)
# ? ruby.bark()

# default parameter
# ? liam = Dog('Liam')
# ? print(liam.name, liam.age)

    # Override str method
    def __str__(self):
        # ? return f'The dog named {self.name} is {self.age} years old.'
        return f'Dog #{self.id} named {self.name} is {self.age} years old.'

    # Create class method
    @classmethod
    def get_total_dogs(cls):
        return cls.next_id - 1

# Instantiate Object from Dog Class
# ? ruby = Dog('Ruby', 3)
# ? print(ruby)

# List attributes and methods of an object
# ? print(dir(ruby))

# Test next_id functionality
# ? harry = Dog('Harry', 2)
# ? print(harry)

# ? maggie = Dog('Maggie')
# ? print(maggie)

# Test the class method
# ? spot = Dog('Spot', 4)
# ? diogee = Dog('Diogee')
# ? print(f'There are {Dog.get_total_dogs()} dogs.')

class ShowDog(Dog):
    def __init__(self, name, age=0, total_earnings=0):
        Dog.__init__(self, name, age)
        self.total_earnings = total_earnings

    def add_prize_money(self, amount):
        self.total_earnings += amount
        print(f'{self.name}\'s new total earnings are ${self.total_earnings}')

# Instantiate Object from ShowDog Class
winky = ShowDog('Winky', 5, 1000)
print(winky)
# Inherited method from Dog class
winky.bark()

print(f'Winky has earned ${winky.total_earnings} so far.')

# Adding prize money to Winky
winky.add_prize_money(500)
print(f'Winky has now earned ${winky.total_earnings}.')

#Defining a simple Vehicle class in Python
class Vehicle():
    def __init__(self, make, model, running=False):
        self.make = make
        self.model = model
        self.running = running

    def start(self):
        self.running = True
        print(f'{self.make} {self.model} is now running.')

    def stop(self):
        self.running = False
        print(f'{self.make} {self.model} has stopped.')

    def __str__(self):
        return f'The vehicle is a {self.make} {self.model}'

# Instantiate Object from Vehicle Class
truck = Vehicle('Ford', 'F-150')
print(truck)
print(f'truck.running', truck.running)
truck.start()
print(f'truck.running', truck.running)