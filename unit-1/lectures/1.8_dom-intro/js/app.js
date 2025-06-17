/*********************************************************************
  NOTES LEGEND
*********************************************************************/
// Regular comment
// ? Commented out code
// * Code output comment
// TODO: To update or look into later
// ! Important note

/*********************************************************************
  GLOBAL NOTES
*********************************************************************/

// DOM API is a set of methods and properties in the browser that allows us to manipulate the structure of a website.
// In the Chrome devtools (CDT) if you highlight an element (i.e. h1) and see == $0. Checking in the console.dir($0) will show you the built in methods for said element.
// If multiple items share the same class and you use a query selector will return the FIRST instance of that element with class. Avoid this by using more specific selectors such as ID. If no element found then JS returns null.
// When storing DOM element in variable it becomes a stored cache element.
// Attributes provide more info about elements (i.e. id, class, etc). Methods such as setAttribute() or hasAttribute or removeAttribute allow different ways to access DOM elements.
// The class attribute JS provides the classList prop. Handles functionality related to classes of an element (i.e. classList.add(), classList.remove(), classList.toggle(), etc).

/*********************************************************************
  WORKING CODE
*********************************************************************/

// Select DOM element with query selector.
// Selecting the element by ID and storing in variable called titleElement.
// ? const titleElement = document.querySelector("#main-title");
// Selecting the element by class and storing in variable called titleElement.
const titleElement = document.querySelector(".title");
console.log(titleElement); // * Outputs the full element with attributes in the console.
console.dir(titleElement); // * Outputs element and associated JS methods and properties

// Created paragraph, selected and stored in variable.
const paragraphElement = document.querySelector(".cool");
console.log(paragraphElement);
console.dir(paragraphElement);

// Modify text content of the paragraph element. Assign new string to the textContent property of the DOM element.
paragraphElement.textContent = "Modified text content of this paragraph.";
// Console log the above element's text content.
console.log(paragraphElement.textContent);
// Can even perform logical operations on it. If text content is not blank then console log text content.
if (paragraphElement.textContent !== "") {
  console.log(paragraphElement.textContent);
}

// You can also dynamically change the style of an element using the style property.
titleElement.style.color = "oklch(0.8562 0.0489 219.65)";
titleElement.style.fontSize = "3rem";
titleElement.style.textAlign = "center";
titleElement.style.textDecoration = "underline";
paragraphElement.style.textAlign = "center";

// Add new h2 element after p element.
// First, select body element.
const bodyElement = document.querySelector("body");
console.log(bodyElement);
console.dir(bodyElement);
// Second, create h2 element.
const h2Element = document.createElement("h2");
// Third, create text content for new h2.
h2Element.textContent = "HEYO! I am an H2 element created with JS";
// Add h2 element as the next child to the body element after current elements on the page (LAST element). Currently only exist in the JS memory. Same stays in place even if we add elements to the HTML (Depends on how we have our JS loaded, because currently JS loads after HTML).
bodyElement.appendChild(h2Element);
console.log(h2Element);
console.dir(h2Element);
// Change style to match rest of page.
h2Element.style.textAlign = "center";

// Sometimes you need to select and work with multiple elements at once.
// This is done using querySelectorAll.
// Use chaining to select all li within ul with id of comments and store to variable.
const commentElements = document.querySelectorAll("ul#comments li");
console.log(commentElements);
console.dir(commentElements);
// To apply a style to multiple elements you need to loop over them (i.e. forEach, for, or for of), unlike singular items that you would simply apply the style property to directly.
// This works because querySelectorAll it returns node list of elements selected, which works like an array.
commentElements.forEach((commentElement) => {
  console.log(commentElement); // * Prints each element iterated over
  commentElement.style.color = "lightblue";
  commentElement.style.fontSize = "30px";
  console.log(commentElement.style.fontSize); // * 30px
});

// Use query selector to select the button element.
const buttonElement = document.querySelector("button");
console.log(buttonElement);
console.dir(buttonElement);

// Make the button clickable first we need to see if it has disabled attribute.
if (buttonElement.hasAttribute("disabled")) {
  console.log("Button is disabled");
  // Remove disabled attribute.
  buttonElement.removeAttribute("disabled");
} else {
  console.log("Button is enabled");
}

// Give the button element the id of submit.
// The setAttribute takes two arguments, what attribute you are adding and the name of said attribute.
buttonElement.setAttribute("id", "submit");
console.log(buttonElement);

// Add class name using classList.
buttonElement.classList.add("btn");
console.log(buttonElement);

// Remove .btn and add .action-btn.
// ? buttonElement.classList.remove("btn");
// ? buttonElement.classList.add("action-btn");
// OR use replace.
buttonElement.classList.replace("btn", "action-btn");
console.log(buttonElement);
