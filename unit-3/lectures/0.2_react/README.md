# React

## Resources

[Creating Components](https://react.dev/learn#components) |
[Vite](https://vite.dev/) |
[Next.js](https://nextjs.org/) |
[Remix](https://remix.run/)

## Components

React is a JavaScript library for building user interfaces (UIs). These UIs are built using **components**, which are reusable pieces of code that represent parts of the user interface. They can be as small as a button or as large as an entire page. They are JavaScript functions that `return` markup (usually in the form of JSX).

### Benefits of Components

1. **Modularity**: Components allow you to break down a complex UI into smaller, manageable pieces. This makes it easier to develop, test, and maintain your code.
2. **Reusability**: Once a component is created, it can be reused in different parts of the application or even in different projects. This reduces code duplication and promotes consistency.
3. **Maintainability**: Components encapsulate their own logic and styles, making it easier to update or modify specific parts of the UI without affecting the entire application.

## JSX

JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It is used in React to describe the structure and appearance of the UI components.

### Syntax

JSX looks similar to HTML, but there are some key differences:

- **JavaScript Expressions**: You can embed JavaScript expressions within JSX using curly braces `{}`. For example, `{2 + 2}` will evaluate to `4`.
- **Attributes**: JSX uses camelCase for attribute names instead of HTML's lowercase. For example, `class` becomes `className`, and `onclick` becomes `onClick`.
- **Self-Closing Tags**: In JSX, self-closing tags must end with a slash, e.g., `<img />` or `<input />`.
- **Single Parent Element**: A JSX expression must have a single parent element. If you need to return multiple elements, you can wrap them in a `<div>` or use React fragments (`<>...</>`).
- **Comments**: Comments in JSX are written using curly braces and JavaScript comment syntax, e.g., `{/* This is a comment */}`.
- **JavaScript Only**: JSX is not valid JavaScript, so it needs to be transpiled (usually by Babel) into regular JavaScript before it can be executed by the browser.
- **Function Definition**: Are named in pascal case (e.g., `MyHeader`). Inside of the function you `return` markup (eg. JSX). Components are rendered using a self-closing tag (e.g., `<MyHeader />`).

```jsx
const MyHeader = () => {
  return (
    <header>
      <h1>Example Header</h1>
    </header>
  );
};

export default MyHeader;

// ... Imported into a component.

import MyHeader from "./MyHeader";

const App = () => {
  return (
    <div>
      <MyHeader />
      <p>This is my app!</p>
    </div>
  );
};
```

## State Management

State management is a crucial aspect of building dynamic and interactive web applications. In React, state refers to a component's current _condition_ or _status_, which can change over time based on user interactions or other events.

State is how the React component _remembers_ things and reacts to user interactions. When state changes, the component **re-renders** to reflect those changes in the UI (This keeps the interface in sync with the current state).

## Virtual DOM

The Virtual DOM (Document Object Model) is a lightweight _representation_ of the actual HTML DOM used by React to optimize rendering performance (eg. A staging area for your changes). When a component's state or props change, React creates a new Virtual DOM tree and compares it to the previous one using a process called **reconciliation**. It then calculates the minimum number of changes (Or differences (_diff_)) needed to update the actual DOM, which is more efficient than updating the entire DOM tree.Only the components that have changed are re-rendered, which improves performance/responsiveness and minimizes changes to the actual DOM.

### The importance of the Virtual DOM to Developers

Simplifies development and increases **performance**. You do not have to manually manipulate the DOM or optimizing each interaction (which can be complex and error-prone). React handles these complexities so you can focus on building your application's functionality and user experience.

## React Ecosystem

The React ecosystem is a collection of libraries, tools, and frameworks that complement and enhance the core React library. These resources help developers build more complex and feature-rich applications by providing solutions for common challenges such as **routing**, **state management**, and **server-side rendering**.

### Examples

- **React Router**: A popular library for handling routing in React applications, allowing developers to create single-page applications with multiple views and navigation. It uses URLs to to dynamically update the UI without requiring a full page reload.
- **Redux**: A state management library that helps manage the application's state in a predictable way. It provides a centralized store for the application's state and enforces a unidirectional data flow, making it easier to manage complex state interactions.
- **Next.js**: A React framework that enables server-side rendering, static site generation, and other advanced features. It simplifies the process of building React applications by providing a set of conventions and tools for common tasks.
- **Remix**: A full-stack React framework that focuses on performance and user experience. It provides features like server-side rendering, data loading, and routing, making it easier to build fast and responsive web applications.
- **Vite**: A build tool that provides a fast development environment for modern web projects, including React applications. It offers features like hot module replacement (HMR) and optimized builds, making it easier to develop and deploy React apps.
- **React Native**: A framework for building mobile applications using React. It allows developers to create native mobile apps for iOS and Android using a single codebase, leveraging React's component-based architecture.
- **npm/yarn/pnpm**: Package managers that help manage dependencies and scripts for React projects.
