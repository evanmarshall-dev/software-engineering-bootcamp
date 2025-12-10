# Tic Tac Toe Game

# 1. DEFINE GAME CLASS
class Game():
    def __init__(self, turn="X", tie=False, winner=None, board=None):
        self.turn = turn
        self.tie = tie
        self.winner = winner
        # Board initialized with all 9 positions set to None.
        self.board = board if board is not None else {
            'a1': None, 'b1': None, 'c1': None,
            'a2': None, 'b2': None, 'c2': None,
            'a3': None, 'b3': None, 'c3': None,
        }

    # 2. RENDERING
    #   - Render the board (Visualize current board state).
    def print_board(self):
        b = self.board
        print(f"""
            A  B  C
        1) {b['a1'] or ' '} | {b['b1'] or ' '} | {b['c1'] or ' '}
           ---+---+---
        2) {b['a2'] or ' '} | {b['b2'] or ' '} | {b['c2'] or ' '}
           ---+---+---
        3) {b['a3'] or ' '} | {b['b3'] or ' '} | {b['c3'] or ' '}
        """)

    #   - Render the messages (Update users on game status, whose turn it is, who won the game, and if it's a tie).
    def print_message(self):
        # If there is a tie: print("Tie game!").
        # If there is a winner: print(f"{self.winner} wins the game!"").
        # Otherwise: print(f"It's player {self.turn}'s turn.").
        if self.winner:
            print(f"{self.winner} wins the game!")
        elif self.tie:
            print("Tie game!")
        else:
            print(f"It's player {self.turn}'s turn.")

    #   - Consolidate rendering (Optionally render to consolidate the other two rendering methods).
    def render(self):
        # Call upon print_board and print_message to render the game state.
        self.print_board()
        self.print_message()

    # 3. HANDLING PLAYER INPUT
    #   - We will use an input() function that displays a prompt to the user and returns a string the user enters.
    #   - Validate input by checking that it corresponds to key on the board and that the position is not already taken.
    #   - Achieve by using a loop that continuously prompts user until valid input is received (eg. While loop which concludes with a return or break statement).
        # Prompt user for input.
        # If the inpu is valid, update thr board and break the loop.
        # Otherwise, print message indicating invalid input and continue the loop.
    def handle_player_input(self):
        while True:
            move = input(f"Player {self.turn}, enter your move (e.g., a1, b2): ").lower()
            if move in self.board and self.board[move] is None:
                self.board[move] = self.turn
                break
            else:
                print("Invalid move. Please try again.")

    # 4. CHECKING FOR A WINNER
    #   - Method to check board for 8 possible winning combinations.
    #   - If winning combo is found, update the winner attribute to reflect the current player (turn).
    #   - Either a loop or check each combo manually.
    def check_for_winner(self):
        winning_combinations = [
            ['a1', 'b1', 'c1'],  # Row 1
            ['a2', 'b2', 'c2'],  # Row 2
            ['a3', 'b3', 'c3'],  # Row 3
            ['a1', 'a2', 'a3'],  # Column A
            ['b1', 'b2', 'b3'],  # Column B
            ['c1', 'c2', 'c3'],  # Column C
            ['a1', 'b2', 'c3'],  # Diagonal \
            ['a3', 'b2', 'c1'],  # Diagonal /
        ]
        for combo in winning_combinations:
            if (self.board[combo[0]] == self.board[combo[1]] == self.board[combo[2]]
                and self.board[combo[0]] is not None):
                self.winner = self.board[combo[0]]
                break

    # 5. CHECKING FOR A TIE
    #   - Tie method should follow Winner method.
    #   - Check if two conditions are met: All spaces on the board are filled (no None values) and no winner declared.
    def check_for_tie(self):
        if all(value is not None for value in self.board.values()) and self.winner is None:
            self.tie = True

    # 6. SWITCHING TURNS
    #   - The switch turn method should alternate the value of turn between "X" and "O" at the end of each turn.
    #   - Using a small lookup table using a dictionary.
    def switch_turn(self):
        self.turn = "O" if self.turn == "X" else "X"

    # 7. MANAGE GAMEPLAY/PLAYING THE GAME
    #   - Combine all methods in a functional gameplay loop. The loop should continue until a winner or tie is delcared.
    def play_game(self):
        print("Shall we play a game?")
        # While there is no winner or tie
        # render
        # get player input
        # check for a winner
        # check for a tie
        # switch turns
        # ...repeat until there is a winner or tie
        while self.winner is None and not self.tie:
            self.render()
            self.handle_player_input()
            self.check_for_winner()
            self.check_for_tie()
            if self.winner is None and not self.tie:
                self.switch_turn()
        # Outside the loop, render state at the end of a game.
        self.render()

# Instantiating a Game object and starting the game.
game_instance = Game()
game_instance.play_game()