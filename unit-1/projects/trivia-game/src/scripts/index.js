/*----- constants -----*/
const API_URL = "https://opentdb.com/api.php?amount=5&type=multiple";

/*----- state variables -----*/
let questions = []; // Array of question objects from the API
let currentScore = 0;
let topScore = 0; // In a future step, this could be saved to localStorage

/*----- cached element references -----*/
const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.querySelector("#myModal .close");
const questionContainer = document.querySelector(".question-container");
const triviaForm = document.getElementById("trivia-form");
const currentScoreEl = document.getElementById("current-score");
const topScoreEl = document.getElementById("top-score");
const submitBtn = document.getElementById("submit-answers");

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
  // Prevent the default form submission which reloads the page.
  event.preventDefault();

  let score = 0;
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
  currentScore = score;
  if (currentScore > topScore) {
    topScore = currentScore;
  }

  // Update the score display and disable the form
  updateScoreDisplay();
  const allInputs = triviaForm.querySelectorAll('input[type="radio"]');
  allInputs.forEach((input) => (input.disabled = true));
  submitBtn.disabled = true;
};

const fetchTriviaQuestions = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    // console.log("Successfully fetched trivia data:", data);
    // Store questions for later use
    questions = data.results;
    // Render the questions into the UI
    renderQuestions();
  } catch (error) {
    console.error("Failed to fetch trivia questions:", error);
    // Display an error message to the user in the UI.
    if (questionContainer) {
      questionContainer.innerHTML =
        "<p>Failed to load questions. Please check your connection and try again.</p>";
    }
  }
};

const initializeModal = () => {
  // Guard clause: if modal elements don't exist, do nothing.
  if (!modal || !openBtn || !closeBtn) {
    console.warn("Modal elements not found. Modal will not be initialized.");
    return;
  }

  openBtn.onclick = () => (modal.style.display = "flex");
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
  fetchTriviaQuestions();

  // Guard clause for the form to ensure it exists before adding a listener.
  if (triviaForm) {
    triviaForm.addEventListener("submit", handleFormSubmit);
  } else {
    console.warn("Trivia form not found. Submission will not work.");
  }
};

init();
