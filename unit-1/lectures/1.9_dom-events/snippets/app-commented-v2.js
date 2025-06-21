// GLOBAL VARIABLES: Selected HTML elements.
const likeBtn = document.querySelector("#like-btn");
const dislikeBtn = document.querySelector("#dislike-btn");
const commentBtn = document.querySelector("#comment-btn");
// Move input and list variables to global to cache DOM selections. Since they do not change we select them once outside the event listener instead of each time the comment button is clicked. Improves performance.
const commentInput = document.querySelector("#comment-input");
const commentsList = document.querySelector("#comments-list");

// EVENT LISTENERS: For like/dislike buttons.
likeBtn.addEventListener("click", function () {
  console.log("Like button clicked!😄");
});
const dislikeEvent = () => {
  console.log("Dislike button clicked!😠");
};

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
