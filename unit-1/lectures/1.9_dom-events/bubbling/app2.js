// What if elements do not exist in the code, but you want to target an event?
// It is common to have two different child elements do two different actions (delete button and li). Since delete button is inside the li (nested) it will set off a ripple effect to each element.
// To avoid the above you have to use stop propagation.

// HTML REFERENCES
const todoListHTML = document.querySelector("#todo-list-container"); // All new items will get appended to this.
const todoInputHTML = document.querySelector("#todo-input");
const todoButtonHTML = document.querySelector("#todo-button");

const bodyElement = document.querySelector("body");
const divElement = document.querySelector("div");

bodyElement.addEventListener("click", () => {
  console.log("body");
});

divElement.addEventListener("click", () => {
  console.log("div");
});

// ! Instead of adding event listener at time of li creation we do it here on the ul element to capture clicks on the li elements.
function handleTodoDelete(event) {
  console.log("You have clicked an li element!");
  console.log("event.target", event.target); // Individual li that set off sensor
  console.log("event.currentTarget", event.currentTarget); // The parent of the li element. Wherever the sensor was placed.
  // Stop propagation when the li is clicked.
  event.stopPropagation();
}

// Link up the event handler to the ul container parent element.
// Pass the event object to it via an anonymous function.
todoListHTML.addEventListener("click", handleTodoDelete);

function handleTodoAdd() {
  console.log("You have clicked the todo button!");
  // STEP 1: Get text value of input field.
  const inputText = todoInputHTML.value;
  console.log("Input text value is...", inputText);
  // Create an li element out of input text.
  const newListItem = document.createElement("li");
  // Add text from input text to the li.
  newListItem.textContent = inputText;
  // ! Instead of adding event listener to the new li, bad performance... We put the event listener on the parent (ul).
  // ? newListItem.addEventListener("click", function (event) {
  //   ? console.log("New event listener");
  //   ? event.target.remove();
  // ? });
  // Append it to HTML.
  todoListHTML.append(newListItem);
  // to demo bubbling, create a child to the li.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  newListItem.append(deleteButton);
  // Clear the input field.
  todoInputHTML.value = "";
}

// Link handleTodoAdd to the button.
todoButtonHTML.addEventListener("click", handleTodoAdd);
