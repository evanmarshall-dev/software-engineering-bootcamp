// -----------------------------
// FOUNDATIONS:
// - The primary feature of React is components.
// - In React, compared to HTML, the HTML, CSS, and JS are all combined into a single file called a component. These are typically stored in files with a .jsx extension.
// - Components are reusable pieces of code that return React elements/UI to be rendered to the page.
// - Components promote reusability and modularity in code. This reduces redundancy and makes maintenance easier.
// - Components are meant to act like pure functions, focusing on a single task. They should operate independently without relying on other components.
// - Components communicate with each other through props (short for properties), which allow data to be passed from parent components to child components. This simplifies the troubleshooting process because a bug can be traced back to a specific component.
// - Components promote collaboration among developers, as different team members can work on separate components simultaneously without causing conflicts.
// -----------------------------

// -----------------------------
// COMPONENT STRUCTURE:
// - What to consider when creating a component:
//   - Reusability: Will this component be used in multiple places? Allow you to keep the code DRY (Don't Repeat Yourself).
//   - Dynamic Content: Sections that frequently receive changing data (eg. A list of posts that swap data based on user input).
//   - Like Functionality: Groups of elements that function together, are dependent on each other, or might be styled the same way (eg. A navigation bar or form).
//   - Same Purpose: If a set of elements serve a collective purpose or feature (eg. A call to action that drives user engagement, such as a sign-up or purchase page).
// -----------------------------

// -----------------------------
// BUILDING/USING A COMPONENT:
// -----------------------------

import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <a href='/'>Home</a>
        <a href='/about-us'>About Us</a>
        <a href='/services'>Services</a>
        <a href='/contact'>Contact</a>
      </nav>
      <main>
        <h1>Welcome to Our Website</h1>
        <h2>This site will demo components in a React App</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          ducimus, id quaerat suscipit minima tenetur deleniti, optio tempore
          explicabo dicta temporibus? Facilis officiis voluptates reprehenderit
          praesentium vero! Illum, ipsa! Architecto!
        </p>
      </main>
    </>
  );
};

export default App;
