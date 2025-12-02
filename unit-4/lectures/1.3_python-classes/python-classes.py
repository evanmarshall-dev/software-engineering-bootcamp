# ------------------------------------
# PYTHON CLASSES

## Object Oriented Programming (OOP)
# - One of the most used programming paradigms with functional programming coming a close second for large scale apps.
# - Encapsulation, inheritance, abstraction, and polymorphism are the three main principles of OOP:
#   - Encapsulation is the bundling of data with the methods that operate on that data.
#   - Inheritance is a way to form new classes using classes that have already been defined.
#   - Abstraction is the concept of hiding the complex reality while exposing only the necessary parts.
#   - Polymorphism is the provision of a single interface to entities of different types (eg. You have a dog class and a cat class that one barks and one meows but they both have a method called make_sound(), therefore they have the same method name, but different implementations).

## Classes
# - We will use the class to create an instance of the class, which is called an object (eg. A car class can have multiple instances of the class such as color, make, model, etc.).
# - An object in JS allows us to group related data and functions together, but this is more difficult with the Python dictionary so we will use classes to create objects and keep it encapsulated.
# - self is similar to this in JS, it refers to the current instance of the class. In JS this is an actual keyword that has to be named this, but in Python it is just a convention to use self as the first parameter of methods in a class.
# - With the print method you get an output that shows the memory location of the object, but you can override this by defining a __str__ method in the class.

## Class vs Instance Members
# - Class members are shared across all instances of the class, while instance members are unique to each instance.
# - Class members are defined within the class but outside of any methods, while instance members are defined within the __init__ method using self.
# - The @classmethod decorator is used to define class methods that operate on class members, while instance methods operate on instance members.
# - If you follow the OOP principles, you should access class variables through the class itself and not through instances.
# - It is also best practice to use a getter method to access class variables rather than accessing them directly (eg. Dog.num_dogs() instead of Dog.next_id).

## Inheritance
# - Inheritance allows a class to inherit properties and methods from another class.
# - The class that is inherited from is called the parent class or base class, and the class that inherits is called the child class or derived class.
# - Inheritance promotes code reuse and establishes a hierarchical relationship between classes.
# - In Python, inheritance is implemented by passing the parent class as a parameter to the child class definition.
# - The child class can override methods from the parent class to provide specific implementations.
# ------------------------------------

# Defining a class
class Dog:
    # Constructor method to initialize the object
    # Every Dog has these properties within it = encapsulation.
    next_id = 0  # Class variable to keep track of the next ID
    def __init__(self, name, age=0):
        self.name = name       # Instance variable for the dog's name
        self.age = age         # Instance variable for the dog's age
        self.id = Dog.next_id  # Assign a unique ID to the dog
        Dog.next_id += 1       # Increment the next ID for the next dog

    # Method to make the dog bark
    def bark(self):
        print(f"{self.name} says Woof!")

    # String representation of the object
    def __str__(self):
        return f"Dog(Name: {self.name}, Age: {self.age})"

    @classmethod
    def num_dogs(cls):
        return cls.next_id

ruby = Dog("Ruby", 3)       # Creating an instance of the Dog class
jane = Dog("Jane", 5)       # Creating another instance of the Dog class, this will still increment next_id
print(ruby)
print(ruby.name, ruby.age)  # Accessing instance variables
ruby.bark()                 # Calling the bark method
print(dir(ruby))            # Listing all attributes and methods of the ruby object. They are already defined within the class and we are adding to them. We can override them as well within string method above (__str__).
print(Dog.num_dogs())       # Calling the class method to get the number of dogs created
# I cannot do ruby.next_id because next_id is a class variable, not an instance variable.
# ? print(ruby.next_id)
print(Dog.next_id)

# Example of inheritance
class showDog(Dog):  # Inheriting from the Dog class
    # Add additional parameters AFTER those in the superclass
    def __init__(self, name, age=0, total_earnings=0):
        # Always call the superclass's __init__() method to initialize inherited properties
        Dog.__init__(self, name, age)
        self.total_earnings = total_earnings  # New instance variable for showDog
        # TODO: Go to course notes and finish this example.

# Make a vehicle class with make, model, running, __init__(), start(), stop(), and override the __str__() method.
class Vehicle:
    def __init__(self, make, model, running=False):
        self.make = make
        self.model = model
        self.running = running

    def start(self):
        self.running = True
        print(f"The {self.make} {self.model} is now running.")

    def stop(self):
        self.running = False
        print(f"The {self.make} {self.model} has stopped.")

    def __str__(self):
        status = "running" if self.running else "stopped"
        return f"Vehicle(Make: {self.make}, Model: {self.model}, Status: {status})"

car = Vehicle("Toyota", "Corolla")
print(car)
car.start()
print(car)
car.stop()
print(car)

# Create a bank account class with the following members: owner (as string), balance (amount of money in account), account_no (a number randomly generated and assigned within __init__ not passed in at time of instantiation), deposit(amount) (when called on an instance, increases balance by the amount argument and returns new balance), withdraw(amount) (when called on an instance, decreases the balance by the amount argument and returns new balance).
# Create two instances, make both deposits and withdrawals, and print the attributes to test them out.
# Bonus: override the __str__ method to return the formatted string: Account <account_no> - Balance: xxxxx.xx

import random

class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance
        self.account_no = random.randint(10000000, 99999999)  # Randomly generated account number

    # This code defines an instance method named deposit, which is responsible for adding funds to a specific bank account object. The method accepts two parameters: self, which represents the specific instance of the class being operated on, and amount, which is the numerical value to be added.
    def deposit(self, amount):
        # Inside the method, the line self.balance += amount performs the core logic. It accesses the balance attribute of the specific object and increases it by the value of amount.
        self.balance += amount
        # The method then returns the updated balance after the deposit.
        return self.balance

    # This code defines an instance method named withdraw, which is responsible for deducting funds from a specific bank account object. The method accepts two parameters: self, which represents the specific instance of the class being operated on, and amount, which is the numerical value to be subtracted.
    def withdraw(self, amount):
        # Check for sufficient funds.
        if amount > self.balance:
            print("Insufficient funds!")
            return self.balance
        # Inside the method, the line self.balance -= amount performs the core logic. It accesses the balance attribute of the specific object and decreases it by the value of amount.
        self.balance -= amount
        # The method then returns the updated balance after the withdrawal.
        return self.balance

    def __str__(self):
        return f"Account {self.account_no} - Balance: {self.balance:.2f}" # The syntax :.2f tells Python to format the balance as a fixed-point number with exactly two decimal places.

# Testing the BankAccount class
account1 = BankAccount("Alice", 500)
account2 = BankAccount("Bob", 1000)
print(account1)
print(account2)
account1.deposit(200)
print(account1)
account2.withdraw(150)
print(account2)

# Create a SavingsAccount Class
'''
Extend the BankAccount Class
First, modify the existing BankAccount class to include an additional attribute called has_overdraft.
This attribute should accept a Boolean value (True or False).
It should default to False if no value is provided during instantiation. This requires using a default parameter in the class's constructor.
Adjust the withdraw method to check the has_overdraft status.
If has_overdraft is False and the withdrawal amount exceeds the balance, deny the withdrawal and return an appropriate message.
Otherwise, if has_overdraft is True, deduct the amount from the balance and return the new balance.
Create a SavingsAccount Class
Next, create a new SavingsAccount class that subclasses the BankAccount class.
This new class should specialize the withdraw method. In the SavingsAccount class, override the withdraw method so that it no longer accepts any arguments, does not change the account balance, and returns the message "No withdrawals permitted".
'''

# Extending the BankAccount class
class SavingsAccount(BankAccount):
    # Constructor method to initialize the object.
    def __init__(self, owner, balance=0, has_overdraft=False):
        # Call the superclass's __init__() method to initialize inherited properties.
        super().__init__(owner, balance)
        # New instance variable for has_overdraft with default value False.
        self.has_overdraft = has_overdraft

    # Overriding the withdraw method.
    def withdraw(self):
        # In the SavingsAccount class, override the withdraw method so that it no longer accepts any arguments, does not change the account balance, and returns the message "No withdrawals permitted".
        return "No withdrawals permitted"
# Testing the SavingsAccount class
savings_account = SavingsAccount("Charlie", 2000)
print(savings_account)
print(savings_account.withdraw())  # Should return "No withdrawals permitted"
# Testing the modified BankAccount class with overdraft
checking_account = BankAccount("David", 300)
checking_account.has_overdraft = True  # Manually setting overdraft for testing
print(checking_account.withdraw(400))  # Should allow withdrawal due to overdraft
print(checking_account)  # Check the balance after withdrawal
print(checking_account.withdraw(100))  # Should allow withdrawal within balance
print(checking_account)  # Check the balance after withdrawal
print(checking_account.withdraw(500))  # Should deny withdrawal due to insufficient funds