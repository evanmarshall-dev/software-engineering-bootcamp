/*----- constants -----*/
// const API_URL = "https://opentdb.com/api.php?amount=5&type=multiple";
const API_BASE_URL = "https://opentdb.com/api.php";

/*----- state variables -----*/
let questions = []; // Array of question objects from the API
let currentScore = 0;
let topScore = 0; // In a future step, this could be saved to localStorage
let gameTimer = null; // Holds the setInterval instance
let timeLeft = 0; // Time left in seconds for challenge mode
let challengeMode = false; // Flag to indicate if challenge mode is active

/*----- cached element references -----*/
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector("#myModal .close");
const optionsContainer = document.getElementById("options-container");
const categorySelect = document.getElementById("category-select");
const difficultySelect = document.getElementById("difficulty-select");
const typeSelect = document.getElementById("type-select");
const timerSelect = document.getElementById("timer-select");
const timerDisplay = document.getElementById("timer-display");
const questionContainer = document.querySelector(".question-container");
const triviaForm = document.getElementById("trivia-form");
const currentScoreEl = document.getElementById("current-score");
const topScoreEl = document.getElementById("top-score");
const submitBtn = document.getElementById("submit-answers");
const startTriviaBtn = document.getElementById("start-trivia-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const winOverlay = document.getElementById("win-overlay");
const loseOverlay = document.getElementById("lose-overlay");
const loseTitle = document.getElementById("lose-title");
const loseMessage = document.getElementById("lose-message");
const overlayCloseBtns = document.querySelectorAll(".overlay-close-btn");

/*----- event listeners -----*/
// Event listeners are attached in the init function to ensure elements exist.

/*----- functions -----*/
/**
 * Decodes HTML entities from a string.
 * @param {string} text The string with HTML entities.
 * @returns {string} The decoded string.
 */
const decodeHTMLEntities = (text) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
};

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array} array The array to shuffle.
 * @returns {Array} The shuffled array.
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const renderQuestions = () => {
  if (!questionContainer || questions.length === 0) {
    questionContainer.innerHTML =
      "<p>Could not load questions. Please try again later.</p>";
    return;
  }

  const questionsHTML = questions
    .map((questionData, index) => {
      const answers = shuffleArray([
        ...questionData.incorrect_answers,
        questionData.correct_answer,
      ]);

      const answersHTML = answers
        .map((answer) => {
          const decodedAnswer = decodeHTMLEntities(answer);
          const answerId = `q${index}-${decodedAnswer.replace(
            /[^a-zA-Z0-9]/g,
            ""
          )}`;
          return `
          <div class="answer">
            <input type="radio" name="question-${index}" id="${answerId}" value="${decodedAnswer}" required />
            <label for="${answerId}">${decodedAnswer}</label>
          </div>
        `;
        })
        .join("");

      return `
      <article class="question">
        <p class="question-text">${index + 1}. ${decodeHTMLEntities(
        questionData.question
      )}</p>
        <div class="answers-container">${answersHTML}</div>
      </article>
    `;
    })
    .join("");

  questionContainer.innerHTML = questionsHTML;
};

/**
 * Updates the score display in the UI.
 */
const updateScoreDisplay = () => {
  if (!currentScoreEl || !topScoreEl) return;
  currentScoreEl.textContent = `Current Score: ${currentScore}`;
  topScoreEl.textContent = `Top Score: ${topScore}`;
};

/**
 * Handles the form submission, checks answers, and updates the score.
 * @param {Event} event The form submission event.
 */
const handleFormSubmit = (event) => {
  event.preventDefault();

  const wasInChallengeMode = challengeMode; // Store state before stopping timer
  stopTimer();

  // Check answers and calculate score
  let score = 0;
  const selectedAnswers = [];
  questions.forEach((_, index) => {
    const selectedInput = document.querySelector(
      `input[name="question-${index}"]:checked`
    );
    selectedAnswers.push(selectedInput ? selectedInput.value : null);
  });

  const allAnswered = selectedAnswers.every((answer) => answer !== null);

  questions.forEach((questionData, index) => {
    const correctAnswer = decodeHTMLEntities(questionData.correct_answer);
    const answerInputs = document.querySelectorAll(
      `input[name="question-${index}"]`
    );
    const selectedAnswerInput = document.querySelector(
      `input[name="question-${index}"]:checked`
    );

    // Provide visual feedback for all answers
    answerInputs.forEach((input) => {
      const answerDiv = input.parentElement;
      if (input.value === correctAnswer) {
        answerDiv.classList.add("correct");
      } else if (input === selectedAnswerInput) {
        answerDiv.classList.add("incorrect");
      }
    });

    // Increment score if the selected answer is correct
    if (selectedAnswerInput && selectedAnswerInput.value === correctAnswer) {
      score++;
    }
  });

  // Update state variables
  currentScore += score;
  if (currentScore > topScore) {
    topScore = currentScore;
  }

  // Check for challenge win condition
  if (wasInChallengeMode) {
    if (score === questions.length && allAnswered) {
      showWinScreen();
    } else {
      showLoseScreen(
        "Challenge Lost!",
        "You didn't answer all questions correctly."
      );
    }
  }
  challengeMode = false; // Challenge is over

  // Update the score display and disable the form
  updateScoreDisplay();
  const allInputs = triviaForm.querySelectorAll('input[type="radio"]');
  allInputs.forEach((input) => (input.disabled = true));
  submitBtn.disabled = true;
  playAgainBtn.style.display = "block";
};

/**
 * Resets the game to the options screen for a new round.
 */
const resetGame = () => {
  stopTimer();
  hideOverlays();
  challengeMode = false;
  showOptionsScreen();
};

/**
 * Sets up the UI for the user to select game options.
 */
const showOptionsScreen = () => {
  questions = [];
  challengeMode = false;
  hideOverlays();
  updateScoreDisplay();

  // Show options and hide the trivia form
  optionsContainer.style.display = "flex";
  timerDisplay.style.display = "none";
  timerSelect.value = "";
  triviaForm.style.display = "none";

  // Reset buttons to their initial state
  submitBtn.disabled = false;
  playAgainBtn.style.display = "none";
  questionContainer.innerHTML = ""; // Clear previous questions
};

const fetchTriviaQuestions = async (options) => {
  // Build the URL with user-selected options
  let url = `${API_BASE_URL}?amount=5`;
  if (options.category) url += `&category=${options.category}`;
  if (options.difficulty) url += `&difficulty=${options.difficulty}`;
  if (options.type) url += `&type=${options.type}`;

  // Show loading state
  questionContainer.innerHTML = "<p>Loading questions...</p>";
  optionsContainer.style.display = "none";
  triviaForm.style.display = "flex";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Successfully fetched trivia data:", data);
    // Store questions for later use
    questions = data.results;
    if (questions.length === 0) {
      questionContainer.innerHTML =
        "<p>No questions found for the selected criteria. Please try different options.</p>";
      submitBtn.disabled = true; // Disable submit if no questions
      return;
    }
    // Render the questions and start the timer if in challenge mode
    renderQuestions();
    if (options.timer) {
      startTimer(parseInt(options.timer, 10));
    }
  } catch (error) {
    console.error("Failed to fetch trivia questions:", error);
    // Display an error message to the user in the UI.
    triviaForm.style.display = "none";
    if (questionContainer) {
      questionContainer.innerHTML =
        "<p>Failed to load questions. Please check your connection and try again.</p>";
    }
  }
};

/**
 * Starts the countdown timer for challenge mode.
 * @param {number} duration The duration of the timer in seconds.
 */
const startTimer = (duration) => {
  challengeMode = true;
  timeLeft = duration;
  timerDisplay.style.display = "block";
  updateTimerDisplay();

  gameTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      stopTimer();
      challengeMode = false; // The challenge is lost
      showLoseScreen("Time's Up!", "You ran out of time.");
    }
  }, 1000);
};

/**
 * Displays the win screen overlay.
 */
const showWinScreen = () => {
  if (winOverlay) winOverlay.style.display = "flex";
};

/**
 * Displays the lose screen overlay with custom messages.
 * @param {string} title The title for the lose screen.
 * @param {string} message The message for the lose screen.
 */
const showLoseScreen = (title, message) => {
  if (loseOverlay && loseTitle && loseMessage) {
    loseTitle.textContent = title;
    loseMessage.textContent = `${message} 😫`;
    loseOverlay.style.display = "flex";
  }
};

/**
 * Hides all overlay screens.
 */
const hideOverlays = () => {
  if (winOverlay) winOverlay.style.display = "none";
  if (loseOverlay) loseOverlay.style.display = "none";
};

/**
 * Stops the countdown timer.
 */
const stopTimer = () => {
  clearInterval(gameTimer);
  gameTimer = null;
};

/**
 * Updates the timer display element with the current time left.
 */
const updateTimerDisplay = () => {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  timerDisplay.textContent = `Time Left: ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};

const populateCategories = async () => {
  try {
    const response = await fetch("https://opentdb.com/api_category.php");
    if (!response.ok) throw new Error("Could not fetch categories.");
    const data = await response.json();
    data.trivia_categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.id;
      option.textContent = category.name;
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Failed to populate categories:", error);
    // Optionally, disable the category select or show an error
  }
};

const initializeModal = () => {
  // Guard clause: if modal elements don't exist, do nothing.
  if (!modal || !openBtn || !closeBtn) {
    console.warn("Modal elements not found. Modal will not be initialized.");
    return;
  }

  openBtn.onclick = () => {
    modal.style.display = "flex";
    currentScore = 0; // Reset score when starting a new game from the main page.
    hideOverlays();
    stopTimer();
    showOptionsScreen(); // Always start at the options screen
  };
  closeBtn.onclick = () => (modal.style.display = "none");

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
};

/*----- app initialization -----*/
// Initialize the app when the script loads.
const init = () => {
  initializeModal();
  populateCategories();

  // Guard clause for the form to ensure it exists before adding a listener.
  if (triviaForm) {
    triviaForm.addEventListener("submit", handleFormSubmit);
  } else {
    console.warn("Trivia form not found. Submission will not work.");
  }

  // Guard clause for the play again button.
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", resetGame);
  } else {
    console.warn("Play Again button not found. Reset will not work.");
  }

  // Add event listeners for the new overlay close buttons
  overlayCloseBtns.forEach((btn) => {
    btn.addEventListener("click", hideOverlays);
  });

  if (startTriviaBtn) {
    startTriviaBtn.addEventListener("click", () => {
      const options = {
        category: categorySelect.value,
        difficulty: difficultySelect.value,
        type: typeSelect.value,
        timer: timerSelect.value,
      };
      fetchTriviaQuestions(options);
    });
  } else {
    console.warn("Start Trivia button not found.");
  }
};

init();
