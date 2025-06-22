// GLOBAL VARIABLES: Selected HTML elements.
const likeBtn = document.querySelector("#like-btn");
const dislikeBtn = document.querySelector("#dislike-btn");
const commentBtn = document.querySelector("#comment-btn");
// Move input and list variables to global to cache DOM selections. Since they do not change we select them once outside the event listener instead of each time the comment button is clicked. Improves performance.
const commentInput = document.querySelector("#comment-input");
const commentsList = document.querySelector("#comments-list");
// Variables for like/dislike and count.
const likesCountElement = document.querySelector("#likes-count");
const dislikesCountElement = document.querySelector("#dislikes-count");

// REGULAR GLOBAL VARIABLES
let likesCount = 0;
let dislikesCount = 0;

// EVENT LISTENERS: For like/dislike buttons.
// ? likeBtn.addEventListener("click", function () {
//   ? console.log("Like button clicked!😄");
// ? });
// ? const dislikeEvent = () => {
//   ? console.log("Dislike button clicked!😠");
// ? };
// REWRITE using EVENT OBJECT
// This will allow us to handle both the like and dislike events in one function.
// ! Make sure you use function declaration to allow for hoisting.
// You need to utilize arrow function to provide event listener to anonymous function then you can pass event into the cb function.
// This all makes the event handlers way more dynamic so that we can perform something based on which button was clicked.
likeBtn.addEventListener("click", (event) => handleReaction(event));
dislikeBtn.addEventListener("click", (event) => handleReaction(event));

function handleReaction(event) {
  // ? console.log("💣 Event object", event);
  // One thing we have access to with the event object is its target.
  // ? console.log("💣 Event object", event.target);
  // ? console.log("Reaction button clicked! 👍👎");
  // Change the console log depending on which button was clicked, utilizing an if statement.
  if (event.target.id === "like-btn") {
    console.log("Like button clicked! 👍");
    // Increment the like counter.
    likesCount++; // or likesCount = likesCount + 1; OR likesCount += 1;
    // ? console.log(likesCount);
    // Update the HTML to match the likesCount variable.
    likesCountElement.textContent = likesCount;
  } else if (event.target.id === "dislike-btn") {
    console.log("Dislike button clicked! 👎");
    // Increment the dislike counter.
    dislikesCount++;
    // ? console.log(dislikesCount);
    // Update the HTML to match the dislikesCount variable.
    dislikesCountElement.textContent = dislikesCount;
  }
}

// ADDING INPUT TO DOM.
commentBtn.addEventListener("click", () => {
  // Old logic allowed blank text to be added if spaces were typed. Trim method removes any leading/trailing whitespace from input value before checking if empty.
  const commentText = commentInput.value.trim();

  // No need for else statement since function exits with return if condition is met (guard clause). This makes else statement redundant.
  if (commentText === "") {
    return;
  }

  // 1. CREATE NEW LI.
  const newLi = document.createElement("li");
  // 2. ASSIGN LI TEXT CONTENT: Set to the trimmed text input value.
  newLi.textContent = commentText;
  // 3. APPEND LI: Add new li element as child of ul.
  commentsList.appendChild(newLi);
  // 4. CLEAR INPUT.
  commentInput.value = "";
});
