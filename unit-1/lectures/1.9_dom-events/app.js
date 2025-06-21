// GLOBAL VARIABLES: Selected HTML elements.
const likeBtn = document.querySelector("#like-btn");
const dislikeBtn = document.querySelector("#dislike-btn");
const commentBtn = document.querySelector("#comment-btn");
const commentInput = document.querySelector("#comment-input");
const commentsList = document.querySelector("#comments-list");

// EVENT LISTENERS: For like/dislike buttons.
likeBtn.addEventListener("click", function () {
  console.log("Like button clicked!😄");
});
const dislikeEvent = () => {
  console.log("Dislike button clicked!😠");
};

// ADDING INPUT TO NEW LI TO DOM.
commentBtn.addEventListener("click", () => {
  // REMOVE INPUT WHITESPACE: Prevents blank input of spaces from being added.
  const commentText = commentInput.value.trim();

  // STOP BLANK INPUT: End code if text input is blank.
  if (commentText === "") {
    return;
  }

  // RUN CODE: If text input is not blank.
  // 1. CREATE NEW LI.
  const newLi = document.createElement("li");
  // 2. ASSIGN LI TEXT CONTENT: Set to the trimmed text input value.
  newLi.textContent = commentText;
  // 3. APPEND LI: Add new li element as child of ul.
  commentsList.appendChild(newLi);
  // 4. CLEAR INPUT.
  commentInput.value = "";
});
