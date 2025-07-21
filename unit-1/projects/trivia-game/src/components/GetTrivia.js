/**
 * A helper function to shuffle the answers so the correct one isn't always last.
 * This uses the standard Fisher-Yates shuffle algorithm.
 * @param {Array<any>} array The array to shuffle.
 * @returns {Array<any>} The shuffled array.
 */

const shuffleArray = (array) => {
  // Loop backwards through the array.
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from the remaining unshuffled part of the array.
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the current element with the random one using ES6 array destructuring.
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

/**
 * This is an "async" function, which means it can use "await" to pause
 * and wait for things like network requests to finish.
 * @param {number} [amount=1] - The number of questions to fetch.
 * @returns {Promise<Object[]|null>} A promise that resolves to an array of question objects, or null if an error occurs.
 */
const getTriviaData = async (amount = 1) => {
  // The URL for the trivia API. We ask for 1 question by default.
  // We also ask for "base64" encoding to handle special characters safely.
  const API_URL = `https://opentdb.com/api.php?amount=${amount}&encode=base64`;

  // A "try...catch" block is for error handling.
  // We "try" to run the code inside. If anything goes wrong,
  // the "catch" block will run instead of crashing the app.
  try {
    // "fetch" is the modern way to make network requests.
    // "await" pauses the function until fetch gets a response from the server.
    const response = await fetch(API_URL);

    // Check if the network request itself was successful (e.g., status 200 OK).
    // If not, we "throw" an error, which sends us to the "catch" block.
    if (!response.ok) {
      throw new Error(`Network error. Status: ${response.status}`);
    }

    // The response from fetch isn't the data itself, it's a "stream".
    // We need to use .json() to read the data stream and parse it as JSON.
    // "await" pauses again until the data is ready.
    const data = await response.json();

    // The API has its own error code. A code of 0 means success.
    // This checks if the API found any questions for our request.
    if (data.response_code !== 0) {
      throw new Error("API could not find any questions.");
    }

    // The API gives us an array of results. We use .map() to transform
    // each raw result into a cleaner "question object" that's easier to use.
    return data.results.map((result) => {
      // The data is encoded in Base64, so we use atob() to decode it to plain text.
      const correctAnswer = atob(result.correct_answer);
      const incorrectAnswers = result.incorrect_answers.map(atob);
      const allAnswers = [...incorrectAnswers, correctAnswer];

      // Create and return our clean question object.
      return {
        question: atob(result.question),
        // We shuffle the answers so the correct one isn't always in the same spot.
        answers: shuffleArray(allAnswers),
        correctAnswer: correctAnswer,
      };
    });
  } catch (error) {
    // If any error was thrown in the "try" block, we land here.
    console.error("Could not fetch trivia data:", error);
    // We return null to signal to the part of our app that called this function
    // that something went wrong, so it can display an error message.
    return null;
  }
};

// We export the function so we can import and use it in other files, like index.js.
export { getTriviaData };
