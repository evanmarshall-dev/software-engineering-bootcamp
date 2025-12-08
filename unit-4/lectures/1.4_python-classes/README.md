# Python Classes

## Fundamentals

### Object Oriented Programming (OOP)

Object-oriented programming (OOP) is a programming paradigm that uses objects to design applications and computer programs. These objects represent real-world entities, encapsulating related properties (attributes) and behaviors (methods). Python is an object-oriented programming language, and this concept is central to writing Python code.

#### The Four Key Principles of OOP

1. **Encapsulation** - Encapsulation is about keeping the data and behavior that manipulates that data under one roof within a _class_. This not only organizes the data and methods into manageable parts but can also protect the data by hiding it from outside interference, which can prevent misuse or errors.
2. **Inheritance** - Inheritance allows a new class to receive or inherit attributes and methods from an existing class. This enables you to eliminate redundant code and extend the functionality of existing classes.
3. **Polymorphism** - Polymorphism is the provision of a single interface to entities of different types (eg. You have a dog class and a cat class that one barks and one meows but they both have a method called make_sound(), therefore they have the same method name, but different implementations).
4. **Abstraction** - Abstraction is the concept of hiding the complex reality while exposing only the necessary parts.

### Classes

Classes enable us to implement the key principles of OOP in our applications. At their most basic, classes are templates for creating objects. These new objects are called _instances_ of that class. They specify what _attributes_ and _methods_ the objects will have.

A class defines characteristics (properties) and actions (methods) common to a group of objects. For instance, a `Car` class might specify properties like `make`, `model`, and `color` and a method like `drive()`. When we create individual cars (instances) from this class, each car inherits these properties and methods, allowing us to assign specific values (for example, a red Honda Civic) and perform actions (driving the car).

![Diagram of Car Class](./public/car-class-and-instances.png)

In Python, the concept that everything is treated as an object is fundamental. This means that every entity, whether it’s a data structure or a user-defined data type, has attributes (properties) and behaviors (methods) defined by its class. A class in Python acts as a blueprint for creating objects (instances).

Building these classes yourself is a powerful way to grasp OOP principles. As you work more with classes, you’ll see how _encapsulation_ protects the data within an object and how _inheritance_ lets you extend and customize existing code.

#### Why Use Classes?

If dictionaries can be created using dictionary literal syntax, aren't classes redundant?

Continuing from our car example above, imagine we are building an application for a car dealership. We want to track their inventory of cars and make modifications over time. When we build the application, we can’t possibly know the make, model, and color of every car the dealership will ever sell.

Without classes, we would have to add a new dictionary literal in the application’s code every time the dealership buys a new car. A more efficient approach can be taken with classes. We can construct a `Car` class that defines a car’s basic structure and behaviors. In this example, every instance of a car has a `make`, `model`, and `color` and can be driven with the `drive()` method.

Going further, developers use classes to implement the **four principles of OOP** in applications, enabling more _robust_, _modular_, and _reusable_ code.

## Writing a Class

The naming convention for Python classes is `UpperCamelCasing` - just like in JavaScript.

Let’s define a `Dog` class to create new dogs from:

```python
class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')
```

When a new dog is created, Python _automatically_ calls the `__init__()` method. Methods with names beginning and ending with double underscores `__` are known as _dunder_ (double underscore) or _magic methods_. These are special methods that Python calls internally for certain operations. When referring to the `__init__()` method by name in conversation, it would be common to use the language _dunder init_ (This is similar to the JavaScript (JS) _constructor_).

Inside the `__init__()` method, we define the attributes that exist on instances of the class. Instances of the `Dog` class will have `name` and `age` attributes. The `age = 0` in `__init__`’s parameter list is a **_default parameter_**. If we don’t give a dog an age when we create it by passing an argument in that position, then the dog’s age will be 0 as specified `by = 0`.

`bark()` is an instance method in this Dog class. An instance method is a function defined inside a class that operates on instances of that class. Put another way, every object created from the `Dog` class will have a `bark()` method!

### `self`

You might recall using the `this` keyword in JavaScript. Every object-oriented programming language has a similar mechanism. This mechanism allows a method within an object to:

- Access other properties or methods in the same object.
- Use a single copy of a method in memory to interact with any number of object instances.

In Python, `self` functions similarly but with a key difference - `self` is _not_ a keyword. Instead it’s a parameter name, and it is called `self` by _convention_.

> [!NOTE]
> When defining methods on Python classes, such as `__init__()` or `bark()`, the first parameter is typically named `self`. This parameter refers to the instance on which the method is being called.

## Instantiating Objects from Classes

In programming, classes are the blueprints for objects. They define the properties and behaviors the objects will have, but they are not objects themselves. To create objects from classes, we use the term _instantiate_ (_"I am instantiating an object from this class."_).

Let’s instantiate a new dog object:

```python
ruby = Dog('Ruby', 3)

print(ruby)
# prints: something like <__main__.Dog object at 0x1031c0f90>

# print the `name` and `age` attributes of the ruby object
print(ruby.name, ruby.age)
# prints: Ruby 3

# invoke the ruby object's bark instance method
ruby.bark()
# prints: Ruby says woof!

# don't pass a second argument
liam = Dog('Liam')

print(liam.name, liam.age)
# prints: Liam 0
```

> [!NOTE]
> Recall that Python dictionaries use square bracket notation to access and set the value of an item. Objects instantiated by our Python classes use **_dot_** notation instead.

## Overriding Methods

Previously, when we used `print(ruby)` to print the `ruby` object, we got an unfriendly output similar to `<__main__.Dog object at 0x1031c0f90>`. We can change this behavior by overriding the `__str__()` method that the print function calls automatically to obtain the string to print out.

Let’s modify the `Dog` class to override the `__str__()` method:

```python
class Dog():
    def __init__(self, name, age=0):
        self.name = name
        self.age = age

    def bark(self):
        print(f'{self.name} says woof!')

    def __str__(self):
        return f'The dog named {self.name} is {self.age} years old.'

ruby = Dog('Ruby', 3)

print(ruby)
# prints: The dog named Ruby is 3 years old.
```

Data and variables in Python have attributes and methods based on their data type. For example, here’s how you can see the attributes and methods associated with a list object:

```python
# Create a list
nums = [1, 2, 3]
# Use the dir() function to list all attributes and methods of the list
print(dir(nums))
```

These methods exist on our `ruby` object by default, but they won’t be used directly by us. For example, the `__init__()` method is called when an object is created, and `__str__()` is called when an object is converted to a string such as when we wrote `print(ruby)`.

Just because we don’t call them directly doesn’t mean we can’t override their behavior though. Overriding the `__str__()` method is an example of **_polymorphism_**.

> [!NOTE]
> Polymorphism is a principle in OOP that is literally defined as “having many forms”. In OOP this means that instantiated objects are treated as instances of a class, rather than the actual class. They can be modified without also modifying the class.
> For example, our `Dog` class modified the default behavior of the `__str__()` method, but that default behavior still exists. If we created another class, the behavior of that class’ `__str__()` method would be the default behavior.

## Class vs Instance Members

In Python, attributes and methods (members) are categorized into two types based on whether they belong to instances of the class or the class itself:

- **Instance Attributes and Methods**: These are linked to individual instances of a class. Each object created from the class has its own copy of instance attributes. For example, in a `Dog` class, each `dog` object might have its own `name` and `age` attributes.
- **Class Attributes and Methods**: These belong to the class as a whole, not to any individual instance. All instances of the class share the same class attributes. This means that if one instance changes a class attribute, the change is reflected across all other instances. These are intended to be accessed on the class only, not an instance (although accessing them on the instance is technically possible).

To demonstrate class attributes, let’s add a `next_id` class attribute to the `Dog` class that can be used to assign an `id` to each dog instance:

```python
class Dog():
    next_id = 1

    def __init__(self, name, age=0):
        self.name = name
        self.age = age
        # assign the current value of `next_id` to this instance
        self.id = Dog.next_id
        # increment the class attribute `next_id` so the next dog gets a new ID
        # Note how the Dog.next_id class attribute is being accessed within the __init__ method.
        Dog.next_id += 1

    def bark(self):
        print(f'{self.name} says woof!')

    def __str__(self):
        return f'Dog #{self.id} named {self.name} is {self.age} years old.'

harry = Dog('Harry', 2)
print(harry)

maggie = Dog('Maggie')
print(maggie)
```

Cool, now let’s see how class methods are created by adding a `get_total_dogs` method. Add this to the bottom of the `Dog` class:

```python
    def __str__(self):
        return f'Dog #{self.id} named {self.name} is {self.age} years old.'

# new code below

    @classmethod
    def get_total_dogs(cls):
        # cls represents the Dog class
        return cls.next_id - 1

spot = Dog('Spot', 2)
diogee = Dog('Diogee')

# class methods are called on the class, not an instance
print(Dog.get_total_dogs())
# prints: an integer representing however many dogs you've created!
```

There are only two differences when defining a class method:

1. The `@classmethod` decorator.
2. The naming convention of the first parameter is to use `cls` instead of `self`.

> [!NOTE]
> Decorators in programming are used to implement metaprogramming (when a program has knowledge or manipulates itself). In Python, [decorators](https://www.programiz.com/python-programming/decorator) are used to modify the behavior of a function or class.

## Inheritance

Inheritance is a powerful feature in object-oriented programming that allows a class (known as a _subclass_) to inherit attributes and methods from another class (called a _superclass_). This enables the subclass to reuse code from the superclass without having to rewrite it. The subclass can then add its own unique attributes and methods, making it more specialized than the superclass.

![Inheritance](./public/inheritance.png)

**_For Example_**:

```python
class ShowDog(Dog):
    # add additional parameters AFTER those in the superclass
    def __init__(self, name, age=0, total_earnings=0):
        # always call the superclass's __init__ first
        Dog.__init__(self, name, age)
        # then add any new attributes
        self.total_earnings = total_earnings

    # add additional methods
    def add_prize_money(self, amount):
        self.total_earnings += amount
        print(f'{self.name}\'s new total earnings are ${self.total_earnings}')
```

> [!NOTE]
> If not specified, the default superclass is Python’s `object` class. This is how we get methods like `__str__()`.

```python
winky = ShowDog('Winky', 3, 1000)

print(winky)
# prints: Dog #3 named Winky is 3 years old.

winky.bark()
# prints: Winky says woof!
# the `ShowDog` class inherited the `Dog` class' `__str__()` and `bark()` method

print(winky.total_earnings)
# prints: 1000

winky.add_prize_money(500)
# a new method that instances of the 'Dog' class don't have

print(winky.total_earnings)
# prints: 1500
# go Winky go!
```

Inheritance is critical to OOP languages. They even have their own _object hierarchies_.

![Type Hierarchies](./public/type-hierarchy.png)

Frameworks like Django have elaborate object hierarchies of their own. For example in Django, Models are defined by inheriting from a Django class like this:

```python
class Person(models.Model):
```
