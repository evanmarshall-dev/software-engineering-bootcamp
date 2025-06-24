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
});
```
