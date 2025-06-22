// GLOBAL VARIABLES: Selected HTML elements.
const likeBtn = document.querySelector("#like-btn");
const dislikeBtn = document.querySelector("#dislike-btn");
const commentBtn = document.querySelector("#comment-btn");
const commentInput = document.querySelector("#comment-input");
const commentsList = document.querySelector("#comments-list");
// Variables for like/dislike and count.
const likesCountElement = document.querySelector("#likes-count");
const dislikesCountElement = document.querySelector("#dislikes-count");

// REGULAR GLOBAL VARIABLES
let likesCount = 0;
let dislikesCount = 0;

// EVENT OBJECT: Handle like and dislike.
likeBtn.addEventListener("click", function (event) {
  handleReaction(event);
});
dislikeBtn.addEventListener("click", (event) => handleReaction(event));

function handleReaction(event) {
  if (event.target.id === "like-btn") {
    likesCount++;
    likesCountElement.textContent = likesCount;
  } else if (event.target.id === "dislike-btn") {
    dislikesCount++;
    dislikesCountElement.textContent = dislikesCount;
  }
}

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
