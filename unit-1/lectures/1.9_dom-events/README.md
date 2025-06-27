# Lecture: DOM Events

## Module: Concepts

DOM events allows us to create actions (manipulate the DOM) based on user interaction or a **trigger** (i.e. User clicks a button).

A current paradigm in development (Like object oriented programming (OOP)) is **event-driven programming**.

Some example of browser events are:

- Mouse _click_ or _move_
- Key _press_
- Form _submit_
- Window _resize_ or _load_

### Syntax

`element.addEventListener(type, callbackFunction);`

1. `element` - The element you add the event to.
2. `addEventListener()` - A method that accepts two arguments.
3. Argument 1: `type` - A string which represents the event type.
4. Argument 2: `cb Function` - Function that executes when the type we specified happens on the element we are **listening** to.

> [!NOTE]
>
> **Callback functions** are simply any function that is passed into another function as an argument (i.e. There is a cb function used in `forEach()`).

For example:

```js
// 1. Select the HTML element.
const likeBtnEl = document.querySelector("#like-btn");
console.dir(likeBtnEl);
// 2. Attach event listener to element.
likeBtnEl.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

## Module: Respond to Events

The following example will be for a user to type in a comment in a text input field, and clicking a submit button to add said comment to a list.

```html
<h2>Comments</h2>
<ul>
  <li>Example comment here...</li>
</ul>
<h3>Add a comment</h3>
<input />
<button id="comment-btn">Add comment</button>

<script>
  // 1. Select the HTML elements and cache.
  const commentBtnEl = document.getElementById("comment-btn");
  console.dir(commentBtnEl);
  const commentInputEl = document.querySelector("input");
  console.dir(commentInputEl);
  const commentListEl = document.querySelector("ul");
  console.dir(commentListEl);

  // 2. Attach event listener to element.
  commentBtnEl.addEventListener("click", () => {
    console.log("Button clicked!");
    // 3. Conditional to run the logic only if there is a value in the input field.
    if (commentInputEl.value !== "") {
      // 4. Create a new list element.
      const newLiEl = document.createElement("li");
      // 5. Add some text to the new list element. The text will come from the input field's value.
      newLiEl.textContent = commentInputEl.value;
      // 6. Append the newly created list item with text content to the list.
      commentListEl.appendChild(newLiEl);
      // 7. Clear the input field.
      commentInputEl.value = "";
    }
  });
</script>
```

> [!TIP]
> We want to trim whitespace in the input value.

## Module: Named Callbacks

When using event listeners we have been using **anonymous** functions.

If we were to create a named function above the event listener and call that inside the event listener as the callback function it would be called an **event handler**. It is good practice to use the word _handle_ in these functions followed by the event name.

> [!WARNING]
> You do not invoke a cb function or event handler inside an event listener because it will run the function on page load. We simply want to reference the event handler to be used later when the event occurs.

For example, count how many times a user clicks the like button:

```js
// Previous code...

// 1) Create variable for likes count.
let likesCount = 0;
// 2) When user clicks like button increment the likes count by one.
const handleLike = () => {
  likesCount++;
  console.log(likesCount);
  // 3) Add number of likes to the button itself.
  likeBtnEl.textContent = `${likesCount} like(s). Like this post!`;
};

// Example reference event handler function as cb function.
likeBtnEl.addEventListener("click", handleLike);
```

## Module: The `event` Object

We can have an event listener call the same callback function in order to handle multiple events.

For example:

```js
// Redo element selection and cache.
const likeBtnEl = document.querySelector("#like-btn");
const dislikeBtnEl = document.querySelector("#dislike-btn");

// Change handleLike to handleReaction.
const handleReaction = () => {
  console.log("Reaction Button clicked!");
};

// Reference handleReaction event handler as cb function for both buttons.
likeBtnEl.addEventListener("click", handleReaction);
dislikeBtnEl.addEventListener("click", handleReaction);
```

Now we need to be able to figure out which button the user clicked on and the `handleReaction` function will work for both like and dislike button. The `event` object will give us this functionality.

The `event` object is an argument passed from the **event listener** to the cb function. It holds info about the event and this info can be utilized by passing it into the **event handler** as a _parameter_.

The `event` object has multiple **properties**, but for our example we will be using the `target` property which represents the element in the DOM that _triggered_ the event.

For example:

```js
// Previous code...

// 1) Create variable for likes/dislikes count.
let likesCount = 0;
let dislikesCount = 0;

// 2) Add event object as parameter to handleReaction event handler.
const handleReaction = (event) => {
  // console.dir(event); // Shows properties on event object
  // Two below console logs will show the same element.
  // console.log(event.target); // Shows the element that triggered the event
  // console.log(likeBtnEl); // Shows the same element that triggered the event
  // We can distinguish between like and dislike by their id attributes. If like button clicked its id will show and if dislike is clicked its id will show.
  // console.dir(event.target.id); // Shows the value of the event target's id.
  // 3) Now we can use some conditional logic to run actions on the like button if that is the button clicked.
  if (event.target.id === "like-btn") {
    likesCount++;
    likeBtnEl.textContent = `${likesCount} like(s). Like this post!`;
    // 4) Now add logic for the dislike button to the else statement.
  } else {
    dislikesCount++;
    dislikeBtnEl.textContent = `${dislikesCount} dislike(s). Dislike this post!`;
  }
};
```

## Module: Event Bubbling

When an event occurs on an element it _bubbles_ up through the DOM until it reaches the document. Even if parent elements do not have a listener on assigned to them.

The event bubbling or propagation will stop at the element that has the `stopPropagation` method called on it.

For example, we will demonstrate bubbling from like/dislike buttons up to the div and body elements:

```js
const bodyEl = document.querySelector("body");
const divEl = document.querySelector("div");

bodyEl.addEventListener("click", () => {
  console.log("body");
});

divEl.addEventListener("click", () => {
  console.log("div");
});

// ... like/dislike and handleReaction code ...
```

### Event Delegation

Event bubbling allows us to utilize **event delegation**. This allows us to add a _single_ event listener that responds to events triggered by any of its _children_ elements.

In the example above we can demonstrate this by adding the `handleReaction` event handler function to the _div element_ and commenting out the event listeners for like and dislike buttons.

`divEl.addEventListener("click", handleReaction);`

## Module: Remove Event Listener

Using the previous example with like/dislike button we can add a method to the if/else statement to remove the event listener. Add the following code at the end of the if statement to remove the event listener from the like button.

`likeBtnEl.removeEventListener("click", handleReaction);`

Now the like button count will only go up _once_ on click. Any other clicks will do nothing.

## Module: Alternate Event Listener Techniques

### Inline HTML

`<button onclick="submit()">Add Comment</button>`

Allows you to add the event listener directly to the HTML elements.

> [!WARNING]
> Inline is not good practice because it requires a function to be in the global scope. It also adds JS to HTML making it harder to _maintain_ and _debug_.

### Assign to DOM Element's Properties

`btnEl.onclick = submit;`

Slightly better than inline HTML because it does _not_ require a globally scoped function and it does not add JS to HTML, but still _less modular_ than `addEventListener`.
