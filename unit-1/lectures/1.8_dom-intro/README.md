# Lecture: Intro to the Document Object Model (DOM)

## Module: Concepts

It is a tree-like data structure with the top level being the **document**. It mirrors the tree-like structure of HTML. Each DOM element is called a **node**. JS uses the DOM to access the HTML **document** and its elements. Developers use the DOM's _application programming interface_ (API) to create a dynamic UI using JS.

### DOM API

Set of methods/properties in the browser that allow for HTML manipulation using JS.

## Module: Element Selection

The selected element in the Chrome DevTools (CDT) will have a variable of `$0` assigned to it. You can view the element's _DOM object_ (**node**) by typing `console.dir($0)` in the console.

### Select with `querySelector()`

Query selector is how we select DOM elements using code. The query selector is a **method** of the DOM object that allows selection elements using CSS selectors.

For example:

```js
const headingElement = document.querySelector("#title");
console.dir(headingElement);
```

> [!NOTE]
> It is best practice to name the variable for a query selector with **Element** or **El** at the end of the name.
> Also add the selected element to a `console.dir()`.

Selected elements stored in a variable for future use are called a **cached element reference**. We do not need to query the DOM repeatedly for the same element.

## Module: Element Modification

The `textContent` property allows devs to change the text content of an element. It is a **property** just like any other object properties in JS.

Since it is a property, we can _console log_ it and also perform _logical operations_ on it.

For example:

```js
headingElement.textContent = "This is a NEW TITLE";

console.log(headingElement.textContent); // This is a NEW TITLE

if (headingElement.textContent !== "") {
  console.log("The heading has text content!");
} else {
  console.log("The heading has no text content!");
}
```

### Style Modification

DOM elements have a **style** property as well that can set CSS styles.

For example:

```js
headerElement.style.color = "red";
```

## Module: Element Creation

We can create an element using the `createElement()` **method**.

In to create a new element within the HTML body element we would:

1. Select the body element from the DOM.
2. Create new element by adding it as a string to the `createElement()` method (It is now a JS object which can be inserted into the DOM).
3. Add content to the new element (Using `textContent` property).
4. To take it out of JS memory and place on the page/DOM we use the `appendChild()` method (There are other methods, but this is the most common).
5. The new element is added as the **last** child of the body element.

For example:

```js
const bodyEl = document.querySelector("body");
console.dir(bodyEl);

const h2El = document.createElement("h2");
h2El.textContent = "This is a new H2 element";

bodyEl.appendChild(h2El);
```

## Module: Multiple Element Selection

We can select multiple elements using `querySelectorAll()`. It selects all elements versus only the first element with `querySelector()`.

For example:

```html
<ul id="comments">
  <li>first comment</li>
  <li>second comment</li>
  <li>third comment</li>
</ul>

<script>
  document.querySelectorAll("#comments li");
</script>
```

### Iterating Over Collection of Elements

When using query selector all you return a collection of elements like an array (**NodeList**). The collection can be looped through or iterated over similar to an array.

> [!TIP]
> It is good practice to name variable for collection created as **plural**.

For example:

```js
const commentElements = document.querySelectorAll("#comments li");

commentElements.forEach((commentElement) => {
  console.log(commentElement.textContent);
  commentElement.style.fontSize = "30px";
});
```

## Module: Element Attributes

There are methods in JS that allow you to interact with HTML elements via their attributes (i.e. id and class).

- `getAttribute()`: Retrieves the value of a specified attribute.
- `setAttribute()`: Sets or updates the value of a specified attribute. Accepts 2 arguments (name of attribute to change and value of attribute to change to).
- `hasAttribute()`: Checks if an element has a certain attribute.
- `removeAttribute()`: Removes a specified attribute from an element.

For example:

```html
<button disabled>Click Me!</button>

<script>
  // 1. Select button element.
  const btnEl = document.querySelector("button");
  // 2. Check if button is disabled.
  if (btnEl.hasAttribute("disabled")) {
    console.log("Button is disabled!");
    // 3. Remove disabled attribute.
    btnEl.removeAttribute("disabled");
  } else {
    console.log("Button is enabled!");
  }

  // 4. Give button id of submit.
  btnEl.setAttribute("id", "submit");
</script>
```

### The `class` Attribute

The `classList` property is an object that provides methods to manipulate classes of an element.

- `add(className, ...)` - Adds one or more class names to an element. If the class already exists, it won’t be added again.
- `remove(className, ...)` - Removes one or more class names from an element. If the class does not exist, nothing happens.
- `toggle(className)` - Adds the class if it does not exist, and removes it if it does.
- `contains(className)` - Checks if the element has the specified class.
- `replace(oldClass, newClass)` - Replaces an existing class with a new class.

For example:

```js
// Code from above...
// 5. Add class btn to button element.
btnEl.classList.add("btn");
// 6. Remove class btn and replace with class of action-btn.
btnEl.classList.replace("btn", "action-btn");
```

## Module: The `getElementById()` Method

This is the most efficient way to select a DOM element, but requires the element to have an `id`. Since `id` is specified in the method we do **not** need a hashtag in the selection.

## Module: The `innerHTML` Property

Unlike the `textContent` property `innerHTML` allows for the addition of HTML inside of a DOM element. It retrieves and sets HTML in the format of a string (`pEl.innerHTML = 'Comments for <strong>today</strong>';`).

## Module: Placing Elements Precisely

The `appendChild()` method is most commonly used, but there are other ways to place elements in the DOM.

For example, if we want to place the new h2 element **after** the paragraph element we can:

```js
// Previous code...
// Remove.
bodyEl.appendChild(h2El);
// Replace with.
pEl.after(h2El);
```

Besides the `after()` method there are many more including `before()` and `replaceChild()`.

## Module: `Nodelist`

Methods that return a collection of DOM elements (i.e. `querySelectorAll()`) return an array-like object called a `NodeList`. It has a `forEach()` method, but not other useful array methods.

If you need to utilize more array methods then you would use `Array.from()` method to convert the `NodeList` to an array.

`const itemEls = Array.from(commentEls);`

You could also use the Spread Syntax to convert a NodeList into an array with an **array literal** (`[]`).

`const itemEls = [...commentEls];`
