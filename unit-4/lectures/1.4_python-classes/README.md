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
