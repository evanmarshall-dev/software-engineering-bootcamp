/*---------------------------
  MVP
---------------------------*/
// - Display an empty tic-tac-toe board when the page is initially displayed.
// - A player can click on the nine cells to make a move.
// - Every click will alternate between marking an X and O.
// - Display whose turn it is (X or O).
// - The cell cannot be played again once occupied with an X or O.
// - Provide win logic and display a winning message.
// - Provide logic for a cat’s game (tie), also displaying a message.
// - Provide a Reset Game button that will clear the contents of the board.

// 1) Define the required variables used to track the state of the game.
// 2) Store cached element references.
// 3) Upon loading, the game state should be initialized, and a function should be called to render this game state.
// 4) The state of the game should be rendered to the user.
// 5) Define the required constants.
// 6) Handle a player clicking a square with a `handleClick` function.
// 7) Create Reset functionality.

/*---------------------------
  Constants
---------------------------*/
// Eight possible winning combos.
const winningCombos = [
  // First row.
  [0, 1, 2],
  // Second row.
  [3, 4, 5],
  // Third row.
  [6, 7, 8],
  // First column.
  [0, 3, 6],
  // Second column.
  [1, 4, 7],
  // Third column.
  [2, 5, 8],
  // First diagonal.
  [0, 4, 8],
  // Second diagonal.
  [2, 4, 6],
];

/*---------------------------
  Variables (state)
---------------------------*/
// State of squares on the board.
let board;
// Track whose turn it is.
let turn;
// Has anyone won yet.
let winner;
// Has there been a tie.
let tie;

/*---------------------------
  Cached Element References
---------------------------*/
const squareEls = document.querySelectorAll(".sqr");
console.dir(squareEls);
const messageEl = document.getElementById("message");
console.dir(messageEl);

/*---------------------------
  Functions
---------------------------*/
// Loading initialization state.
// Can manually update values in board array to see it change on app.
function init() {
  console.log("Game has loaded!");
  // Set board variable to nine empty strings for each board square.
  board = ["", "", "", "", "", "", "", "", ""];
  // Set turn variable to X to represent player X.
  turn = "X";
  // Not currently a winner so set winner variable to false.
  winner = false;
  // Not currently a tie so set tie variable to false.
  tie = false;
  // Call render function that will throw error until next step.
}

// State of game rendered to user.
function render() {
  // Invoke updateBoard and updateMessage.
  updateBoard();
  updateMessage();
}

function updateBoard() {
  // Loop over board for each element.
  squareEls.forEach((squareEl, index) => {
    board[index] = squareEl.innerText;
  });
}

function updateMessage() {
  // Render message based on current game state.
  if (winner && tie === false) {
    messageEl.innerText = `Game in progress, it is ${turn}'s turn.`;
  } else if (winner === false && tie === true) {
    messageEl.innerText = `It's a tie!`;
  } else {
    messageEl.innerText = `${winner} wins!`;
  }
}

/*---------------------------
  Event Listeners
---------------------------*/
