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
// ? console.dir(squareEls);
const messageEl = document.getElementById("message");
// ? console.dir(messageEl);
const boardEl = document.querySelector(".board");
const resetBtnEl = document.getElementById("reset");
// ? console.dir(resetBtnEl);

/*---------------------------
  Functions
---------------------------*/
init();
// Loading initialization state.
// Can manually update values in board array to see it change on app.
function init() {
  // ? console.log("Game has loaded!");
  // Set board variable to nine empty strings for each board square.
  board = ["", "", "", "", "", "", "", "", ""];
  // Set turn variable to X to represent player X.
  turn = "X";
  // Not currently a winner so set winner variable to false.
  winner = false;
  // Not currently a tie so set tie variable to false.
  tie = false;
  // Call render function that will throw error until next step.
  render();
}

// State of game rendered to user.
function render() {
  // Invoke updateBoard and updateMessage.
  updateBoard();
  updateMessage();
}

function updateBoard() {
  // Loop over board for each element.
  board.forEach((cellValue, index) => {
    // ? console.log(boardEl, index);
    squareEls[index].innerText = cellValue;
  });
}

function updateMessage() {
  // Render message based on current game state.
  if (winner) {
    messageEl.innerText = `${winner} wins!`;
  } else if (tie) {
    messageEl.innerText = `It's a tie!`;
  } else {
    messageEl.innerText = `Game in progress, it is ${turn}'s turn.`;
  }
}

function handleClick(event) {
  // ? console.log(event.target.id);
  const clickedEl = event.target;

  // Guard Clause: If the clicked element is not a square, exit.
  // Handle clicks on the board's gaps.
  if (!clickedEl.classList.contains("sqr")) {
    return;
  }

  const squareIndex = parseInt(clickedEl.id);

  // Guard clauses for game logic:
  // 1. If the board at the clicked index is already filled, do nothing.
  // 2. If there is already a winner, do nothing to prevent further moves.
  if (board[squareIndex] || winner) return;

  placePiece(squareIndex);
  checkForWinner();
  checkForTie();
  switchPlayerTurn();
  render();
}

const placePiece = (index) => {
  // Update the board state array with the current player's mark.
  board[index] = turn;
};

const checkForWinner = () => {
  // Iterate through the winningCombos to see if any combination is met.
  for (const combo of winningCombos) {
    // Destructure the combo array for readability.
    const [a, b, c] = combo;
    // Check if the board has the same non-empty value at these three indices.
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      // If a winning combo is found, update the winner state variable.
      winner = board[a];
    }
  }
};

const checkForTie = () => {
  // If there's already a winner, it can't be a tie.
  if (winner) return;
  // If the board does not include any empty strings, the game is a tie.
  if (!board.includes("")) {
    tie = true;
  }
};

const switchPlayerTurn = () => {
  // If there's a winner, the game is over, so don't switch turns.
  if (winner) return;
  // Toggle the turn between 'X' and 'O'.
  turn = turn === "X" ? "O" : "X";
};

/*---------------------------
  Event Listeners
---------------------------*/
boardEl.addEventListener("click", handleClick);
resetBtnEl.addEventListener("click", init);
