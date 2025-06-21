// HTML element selection.
const likeBtn = document.querySelector("#like-btn");
const dislikeBtn = document.querySelector("#dislike-btn");
const commentBtn = document.querySelector("#comment-btn");

// Like/dislike button clicks.
likeBtn.addEventListener("click", function () {
  console.log("Like button clicked!😄");
});

// With anonymous arrow function.
// ? dislikeBtn.addEventListener("click", () => {
//   ? console.log("dislike button clicked!");
// ? });

// Can also be done within the HTML using onclick attribute and assigning to below function call.
const dislikeEvent = () => {
  console.log("Dislike button clicked!😠");
};

// Logic to add text input value to new list element and add list element to DOM.
commentBtn.addEventListener("click", () => {
  // Local variables.
  const commentInput = document.querySelector("#comment-input");
  const commentsList = document.querySelector("#comments-list");

  // 1. Do not allow the function to run if nothing is in text input value. If there is a value then run logic.
  // ? if (document.querySelector("#comment-input").value === "") {
  if (commentInput.value === "") {
    return;
  } else {
    // ? console.log("Comment button clicked!👍");
    // 2. Create new li element.
    const newLi = document.createElement("li");
    // 3. Set the text content on the new li to value of text input element.
    // ? newLi.textContent = "New comment!";
    // Change the manual string assignment to the input text input value.
    // ? newLi.textContent = document.querySelector("#comment-input").value;
    newLi.textContent = commentInput.value;
    // Test.
    // ? console.log(newLi);
    // 4. Append new li to DOM as child of ul.
    // ? document.querySelector("#comments-list").appendChild(newLi);
    commentsList.appendChild(newLi);
    // 5. Set last functionality to clear text input value on comment button click.
    // ? document.querySelector("#comment-input").value = "";
    commentInput.value = "";
  }
});
