/* Trivia Game Logic */
import { getTriviaData } from "./components/GetTrivia.js";
import { initializeModal } from "./components/Modal.js";
/**
 * Main application logic.
 * This function will fetch trivia data and update the UI.
 */
const startApp = async () => {
  console.log("Trivia, Eh? is running!");

  // Initialize the modal functionality (open/close buttons)
  initializeModal();

  // Fetch the trivia data. We use `await` to pause execution
  // until the data is fetched and the Promise is resolved.
  const triviaQuestions = await getTriviaData(1); // Fetching 1 question

  // Guard clause: Check if the data was fetched successfully
  if (triviaQuestions) {
    // For now, let's just log the first question to the console
    // to verify we have the data.
    console.log("Fetched Question:", triviaQuestions[0]);
    // TODO: Add logic here to render the question inside the modal.
  } else {
    // Handle the case where data fetching failed
    console.error("Could not start the game. Failed to load trivia questions.");
    // TODO: Display an error message to the user in the UI.
  }
};

// --- INITIALIZE APP ---
// This is the main entry point.
startApp();
