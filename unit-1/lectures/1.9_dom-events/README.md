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
