# Unit 1

## Lecture 1.3: JS Control Flow

### Concept

By default, when you run a program, it starts executing from the top line of code and continues **sequentially** until it reaches the last line. This linear execution doesn't align with the needs of most applications. In reality, we often need to change or manipulate the order of execution to achieve specific goals, such as:

_Decision-Making_: Sometimes, we need the program to make choices and execute different code paths based on conditions. For example, showing different messages to users based on their input.

_Repetition_: Many tasks involve performing the same actions multiple times. Control flow allows us to create loops to repeat a set of instructions until a certain condition is met.

_User Interaction_: Applications often respond to user actions. Control flow lets us manage these interactions, triggering specific actions when users click buttons, enter data, or perform other actions.

_Error Handling_: Handling errors gracefully is essential. Control flow helps us navigate errors by directing the program to take specific actions when something goes wrong.

In essence, we don't always want our code to run straight from top to bottom. Control flow is the fundamental mechanism that enables us to shape the behavior of our programs, making them smart and adaptable to various scenarios.

### Boolean Logic

In coding, just as in everyday decision-making, we often need to **compare** values to decide what action to take. This process in programming is similar to comparing numbers or quantities in everyday life. For instance, you might compare prices while shopping to decide which item is more affordable.

To perform these comparisons in code, we use special symbols known as _operators_.

📚 An **operator** in programming is a symbol that tells the computer to perform a specific mathematical, relational, or logical operation. The items we compare using these operators are called **operands**. Operands can be direct values (like numbers) or variables that represent values.

For example, consider the statement `10 is greater than 5`. In mathematics, this is expressed as `10 > 5`. Here, `10` and `5` are the **operands**, and the symbol `>` is the **operator** that performs the comparison between them.

**_Equality operators_**

Equality operators are the tools we use to compare whether two values are equal. These values can be variables, literal values (like numbers or strings), and more. In JavaScript, there are two primary equality comparison operators:

- `===` - Strict Equality (Best Practice)
- `==` - Loose Equality (Performs Type Conversion)

The strict equality operator, often referred to as _triple equals_, compares the values of both the left and right operands and returns `true` if they are not only equal in value, but also of the same data type.

If the values have different types, then the operator returns `false`.

```javascript
3 === 3; // true
3 === 4; // false
3 === "3"; // false
```

In loose equality: `3 == '3'` is true because, with loose equality, `3` (a number) is considered equal to `'3'` (a string)

`3 == '3' // true, but dangerous`

Strict equality `===` avoids confusion and errors in code by ensuring that not only the values are equal but also their types. For example, treating the number `0` and the string `'0'` as the same could lead to unexpected results.

We’ll always use strict equality as a best practice.

**_Relational operators_**

JavaScript also has a host of relational operators:

- `<` - Less than
- `>` - Greater than
- `<=` - Less than or equal to
- `>=` - Greater than or equal to

```javascript
3 < 4; // true
3 > 4; // false
10 >= 5 + 5; // true
```

In a gaming app, you might use relational operators to check if a player’s score is greater than a certain threshold to level up: `playerScore > 1000`.

**_Logical operators_**

In JavaScript, you often encounter situations where you need to make decisions based on the _truthiness_ or _falsiness_ of values. This is where logical operators `||` (OR) and `&&` (AND) come into play. They not only allow you to check conditions but also provide some powerful behaviors that can make your code more concise and expressive.

`The logical operators || and && help evaluate multiple conditions simultaneously.`
