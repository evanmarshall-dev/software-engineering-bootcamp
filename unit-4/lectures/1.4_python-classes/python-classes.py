# Python Classes Example
class Dog:
    next_id = 0
    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        self.id = Dog.next_id
        Dog.next_id += 1

    def bark(self):
        print(f"{self.name} says Woof!")

    def __str__(self):
        return f"Dog(Name: {self.name}, Age: {self.age})"

    @classmethod
    def num_dogs(cls):
        return cls.next_id

ruby = Dog("Ruby", 3)
jane = Dog("Jane", 5)
print(ruby)
print(ruby.name, ruby.age)
ruby.bark()
print(dir(ruby))
print(Dog.num_dogs())
# ? print(ruby.next_id)
print(Dog.next_id)

class showDog(Dog):
    def __init__(self, name, age=0, total_earnings=0):
        Dog.__init__(self, name, age)

# Another Class Example
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