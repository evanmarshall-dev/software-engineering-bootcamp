# Trivia, Eh? 🇨🇦 - A Two-Player Trivia Game

![Trivia hero image](./assets/trivia-game-hero.jpg)

Welcome to "Trivia, Eh?", a browser-based trivia game designed for two players. This project is built with vanilla HTML, CSS, and JavaScript, focusing on clean code, solid game logic, and a great user experience.

---

## Table of Contents

- [How to Play](#how-to-play)
- [Technical Stack](#technical-stack)
- [User Stories](#user-stories)
- [MVP (Minimum Viable Product)](#mvp-minimum-viable-product)
- [Future Enhancements](#future-enhancements)
- [Project Structure](#project-structure)
- [Game Logic Pseudocode](#game-logic-pseudocode)

---

## How to Play

1. **Start the Game**: Open the `index.html` file in your web browser.
2. **Player 1's Turn**: Player 1 will be presented with 5 trivia questions, one at a time. After selecting an answer for each question, the game will store the response.
3. **Player 2's Turn**: Once Player 1 has finished, Player 2 will be prompted to answer the _same_ 5 questions.
4. **Scoring**: The score is tallied for each player as they answer the questions.
5. **Winner Announcement**: After both players have submitted their answers, the game will display a final results screen with an animation, announcing the winner and showing both players' final scores.
6. **Answer Review**: Players can view an answer sheet that details which questions they got right and wrong.

---

## Technical Stack

- **HTML5**: For the core structure and content of the game.
- **CSS3**: For styling, layout, and animations.
- **JavaScript (ES6+)**: For all game logic, state management, and DOM manipulation.

---

## User Stories

- **As a player**, I want to see a clear welcome screen so I know how to start the game.
- **As Player 1**, I want to answer a series of 5 trivia questions so I can test my knowledge.
- **As Player 2**, I want to be prompted for my turn after Player 1 has finished.
- **As a player**, I want to receive immediate feedback on whether my answer was correct or not (stretch goal).
- **As a player**, I want my score to be updated and displayed after each question.
- **As a player**, I want to be blocked from changing my answer once it has been submitted.
- **As a player**, I want to see a final results screen that clearly declares a winner and shows the scores.
- **As a player**, I want to be able to review all the questions and my answers to see what I got wrong.
- **As a player**, I want a "Play Again" button to easily restart the game from the beginning.

---

## MVP (Minimum Viable Product)

The core focus is to deliver a complete and playable two-player game loop.

1. **Game Board**: A clean UI to display the current question, multiple-choice answers, current player, and scores.
2. **Question Set**: A hard-coded set of at least 5 questions, each with 4 multiple-choice answers and one correct answer.
3. **Two-Player Turn Logic**:
   - Player 1 answers all 5 questions. The app saves their answers.
   - The game prompts Player 2 to take their turn.
   - Player 2 answers the same 5 questions.
4. **Scoring System**: The application must track each player's score in memory.
5. **Winner Declaration**: At the end of the game, display a message announcing the winner (or a tie).
6. **Reset Game**: A button to reset the game to its initial state.

---

## Future Enhancements

Once the MVP is complete, the following features will be considered for future development:

- **Winning Animation**: Add a fun CSS animation or confetti effect on the winner announcement screen.
- **Answer Sheet**: A detailed post-game screen showing each question, the correct answer, and how each player answered.
- **Level Up System**: A simple progression system where players can earn badges or titles based on their win count.
- **Expanded Question Bank**: Fetch questions from an external API (like the Open Trivia Database) for more variety and re-playability.
- **Topic Selection**: Allow players to choose a trivia category before starting the game (e.g., Science, Movies, Music).
- **Timed Responses**: Add a timer for each question to increase the challenge.

---

## Project Structure

```sh
trivia-game/
├── css/
│   └── app.css
├── images/
│   └── (optional game assets)
├── scripts/
│   └── app.js
└── index.html
```

---

## Game Logic Pseudocode

This pseudocode outlines the core structure and flow of the `app.js` file, establishing a clear plan for development.

```javascript
/*----- constants -----*/
const QUESTIONS = [
  {
    question: "What is the capital of Canada?",
    answers: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
    correctAnswer: "Ottawa",
  },
  // ... 4 more question objects
];

/*----- state variables -----*/
let scores; // obj: { player1: 0, player2: 0 }
let playerAnswers; // obj: { player1: [], player2: [] }
let currentPlayer; // num: 1 or 2
let currentQuestionIndex; // num: 0-4
let gameState; // str: 'start', 'player1', 'player2', 'results'

/*----- cached element references -----*/
const messageEl = document.getElementById("message");
const questionEl = document.getElementById("question");
const answerButtonsEl = document.getElementById("answer-buttons");
const score1El = document.getElementById("score-p1");
const score2El = document.getElementById("score-p2");
const resetBtn = document.getElementById("reset-btn");

/*----- event listeners -----*/
answerButtonsEl.addEventListener("click", handleAnswerClick);
resetBtn.addEventListener("click", init);

/*----- functions -----*/
// Initialize or reset the game state
function init() {
  scores = { player1: 0, player2: 0 };
  playerAnswers = { player1: [], player2: [] };
  currentPlayer = 1;
  currentQuestionIndex = 0;
  gameState = "player1";
  render();
}

// Main render function to update the DOM based on state
function render() {
  // Render scores
  score1El.textContent = scores.player1;
  score2El.textContent = scores.player2;

  // Control view based on gameState
  if (gameState === "player1" || gameState === "player2") {
    renderQuestion();
    messageEl.textContent = `Player ${currentPlayer}, it's your turn!`;
  } else if (gameState === "results") {
    renderResults();
  }
}

// Display the current question and answers
function renderQuestion() {
  const questionData = QUESTIONS[currentQuestionIndex];
  questionEl.textContent = questionData.question;
  // Clear old answer buttons and create new ones
}

// Handle a click on an answer button
function handleAnswerClick(evt) {
  // Ignore clicks that are not on a button
  if (evt.target.tagName !== "BUTTON") return;

  const selectedAnswer = evt.target.textContent;
  const correctAnswer = QUESTIONS[currentQuestionIndex].correctAnswer;

  // Check answer and update score
  if (selectedAnswer === correctAnswer) {
    scores[`player${currentPlayer}`]++;
  }

  // Move to the next question or switch players/end game
  currentQuestionIndex++;
  if (currentQuestionIndex < QUESTIONS.length) {
    render();
  } else {
    // Player's turn is over
    if (currentPlayer === 1) {
      currentPlayer = 2;
      currentQuestionIndex = 0; // Reset for Player 2
      // Optional: Add a screen to prompt Player 2
      render();
    } else {
      // Game is over
      gameState = "results";
      render();
    }
  }
}

// Display the final winner and scores
function renderResults() {
  // Logic to determine winner and display final message
  let winnerMsg;
  if (scores.player1 > scores.player2) {
    winnerMsg = "Player 1 wins!";
  } else if (scores.player2 > scores.player1) {
    winnerMsg = "Player 2 wins!";
  } else {
    winnerMsg = "It's a tie!";
  }
  messageEl.textContent = winnerMsg;
  // Hide question, show results view
}

// Start the game on initial load
init();
```
