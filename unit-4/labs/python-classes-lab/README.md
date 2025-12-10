<h1>
  <span class="headline">Classes Lab</span>
  <span class="subhead">Exercise</span>
</h1>

## Introduction

In this lab, you can practice object-oriented programming (OOP) by building a Tic-tac-toe terminal game with Python Classes.

While working through this lab, consider the gameplay of Tic-Tac-Toe and, if necessary, pseudocode it. Try to write several small functions, each performing a single purpose, e.g., `print_board`, `get_move`, `check_for_winner`, etc. Consider how/where looping makes sense, e.g., loop until the player enters a correct move or until the game's over, etc.

## User Stories

Your goal is to implement the following user stores:

- As a user (AAU), I want to see a welcome message at the start of a game.
- AAU, before being prompted for a move, I want to see the board printed in the console to know what moves have been made.
- AAU, at the beginning of each turn, told whose turn it is: It's player X's turn!
- AAU, I should be prompted to enter a move and be provided an example of valid input (`'Enter a valid move (example: A1)'`).
- AAU, I want to be able to enter my move's column letter in upper or lower case (a/A, b/B, or c/C) to make it easier to enter my move.
- AAU, if I enter a move in an invalid format or try to occupy a cell already taken, I want to see a message chastising me and be re-prompted.
- AAU, after entering a move, I should once again be presented with the updated game board, notified of the current turn, and asked to enter a move for the other player. This process should continue until there is a winner or a tie
- AAU, I should see a message at the end of the game indicating the winner or stating that the game ended in a tie.

## Hints

If you need some guidance with this lab, follow the steps below.

### Step 1 - Define a `Game` class and initialize game state

Create a `class` called `Game`. Within the `Game` class, use the `__init__` method to initialize properties that represent the state of your game.

Below are some of the attributes you might include:

- `turn`: a string attribute indicating whose turn it is (`'X'` or `'O'`). Initialize it with `'X'`.
- `tie`: a boolean attribute indicating if the game ended in a tie. Initialize it as `False`.
- `winner`: an attribute to store the game-winner. Initialize it as `None`.
- `board`: a dictionary representing the state of the game board:

  ```python
  {
    'a1': None, 'b1': None, 'c1': None,
    'a2': None, 'b2': None, 'c2': None,
    'a3': None, 'b3': None, 'c3': None,
  }
  ```

  Each key in the `board` represents a position on the board, with the corresponding value being an `'X'`, `'O'`, or an empty space (`None`).

  Modeling the board itself as a dictionary and naming the keys appropriately can simplify updating the board based on what the player types in. For example, assume you store the player's input in a variable named `move`. You can convert it to lowercase using `.lower()` and use it as the key to access the `board`, i.e., `board[move]`.

### Step 2 - Playing the game

Next, define a `play_game` method and confirm that the method is accessible on an instance of the `Game` class. This function will be used to activate and organize the flow of the game.

- Within the `play_game` method, print a **welcome message** of your choosing.
- Instantiate the `Game` class and invoke the `play_game` method:

  ```python
  game_instance = Game()
  game_instance.play_game()
  ```

- Run the following command in your terminal to verify your welcome message:

  ```bash
  python3 app.py
  ```

### Step 3 - Rendering

Next, you'll want to define methods that can 'render' information for the user. Based on the separation of concerns, you might break this logic down into two or three methods.

Consider the following approach:

1. **Rendering the board**

The `print_board` method visualizes the current state of the game `board`.

```python
def print_board(self):
  b = self.board
  print(f"""
        A   B   C
    1)  {b['a1'] or ' '} | {b['b1'] or ' '} | {b['c1'] or ' '}
        ----------
    2)  {b['a2'] or ' '} | {b['b2'] or ' '} | {b['c2'] or ' '}
        ----------
    3)  {b['a3'] or ' '} | {b['b3'] or ' '} | {b['c3'] or ' '}
  """)
```

The `print` statement above should produce something like the following in your terminal:

```plaintext
        A   B   C
    1)    |   |
        ----------
    2)    |   |
        ----------
    3)    |   |
```

2. **Rendering messages**

The `print_message` method updates users about the current status of a game, including whose turn it is, who won the game, and if the game ended in a tie.

```python
  def print_message(self):
    ## If there is a tie: print("Tie game!")
    ## If there is a winner: print(f"{self.winner} wins the game!")
    ## Otherwise: print(f"It's player {self.turn}'s turn!")
```

3. **Consolidated rendering**

Optionally, a third `render` method can be used to consolidate the other two, streamlining the rendering process:

```python
  def render(self):
    # Call upon print_board
    ## Call upon print_message
```

### Step 4 - Handling player input

Next, you'll need a method to handle user input, such as `get_move` or `place_piece`. This method should prompt a user to enter the key of an empty space on the `board`.

To capture player input, use the `input()` function. This function displays a prompt in the terminal and returns the string that the user enters.

```python
move = input(f"Enter a valid movie (example: A1): ").lower()
```

Within this method, it's essential to **ensure that the input received is valid**.

Valid input must satisfy two conditions:

1. The input corresponds to a key on the `board`.
2. The specified `board` space is currently unoccupied (`None`).

To achieve this, set up a loop that **continuously prompts the user until a valid input is received**. You can create an infinite loop with `while True`. When valid input is received, the loop should be configured to conclude with a `return` or `break` statement.

Take a look at the structure below for reference:

```python
  while True:
    # prompt user for input
    # If the input is valid, update the board and break the loop
    # otherwise, print a message notifying the user of the invalid input and allow the loop to continue
```

### Step 5 - Checking for a winner

Next, create a method for determining a winner by checking the `board` for the **eight** possible winning combinations. Upon detecting a winning combination, update the `winner` attribute to reflect the current player (`turn`).

A loop of some sort would be appropriate, but you can also check each combination manually:

```python
self.board['a1'] and (self.board['a1'] == self.board['b1'] == self.board['c1'])
```

> 💡 This example checks for a winning condition across the top row. Similar logic can be applied to other win conditions.

### Step 6 - Checking for a tie

The `check_for_winner` method should be followed with a `check_for_tie` method.

This method should check if both of the following conditions are true:

1. The `board` is entire: All spaces on the `board` are filled, with no positions marked as `None`.
2. No `winner`: A `winner` has not already been declared.

If both of these conditions are met, the value of `tie` should be set to `True`.

### Step 7 - Switching turns

The `switch_turn` method should alternate the value of `turn` between `'X'` and `'O'`. This should occur at the end of every turn. There are several ways to accomplish this, but a small lookup table using a dictionary might work nicely.

### Step 8 - Managing gameplay

The last step is combining all these methods in a functional gameplay loop. The loop should continue until a `winner` or `tie` is declared.

Below is an outline of how you might structure the `play_game` method:

```python
  def play_game(self):
    print("Shall we play a game?")
    # While there is no winner or tie
        # render
        # get player input
        # check for a winner
        # check for a tie
        # switch turns
        # ...repeat until there is a winner or tie
    # Outside the loop, render state at the end of a game
```
