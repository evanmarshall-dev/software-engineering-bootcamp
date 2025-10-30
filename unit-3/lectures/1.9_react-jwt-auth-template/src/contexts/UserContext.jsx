// ----------------------------------------------
// USER CONTEXT CONCEPTS:
// - In React, context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data with a group of React components, such as the current authenticated user or the application’s theme.
// - This process starts by creating context with the createContext() API. The context we create will hold the user state, which will be accessible to any component that needs it.
// - This means that instead of storing and managing the user state in the App component and passing it down through every component in our app, we can use the useContext() hook to access the user state anywhere in the app.
// - The UserContext.jsx file will export a component called UserProvider that will manage the user state and provide that state to any component inside of it.
// - We still use props to pass data between components, this just covers the passing of state that is needed globally across the app.
// - While useContext() is a powerful tool, it’s not always the best choice. It’s best to only utilize useContext() when you have a notable value you need to share across many components, like the current user.
// ----------------------------------------------

// ----------------------------------------------
// COMPONENT BREAKDOWN:
// - UserContext is created using the createContext() API. We’ll use this context to provide the user state to the rest of the application. It also holds a Provider component.
// - The UserContext.Provider component will be responsible for keeping track of the context data given to components that consume the UserContext. Currently, the Provider component is empty, but we’ll add data soon.
// - Note that we are destructuring the children prop in the UserProvider component. This is a special prop that React provides to components that have children. It allows the component to display whatever we pass between its opening and closing tags.
// - Think of it as a placeholder for the content that React will render inside the component. In this case, the children prop will be the components that need access to the user state we eventually add to this component.
// ----------------------------------------------

// ----------------------------------------------
// ADD USERPROVIDER TO APP COMPONENT in MAIN.JSX:
// - Import the UserProvider component and wrap it around the App component in the main.jsx file.
// - Now, the UserProvider component can provide context to the App component and its children.
// ----------------------------------------------

// ----------------------------------------------
// ADD STATE TO USERPROVIDER COMPONENT:
// - Create state just like you normally would in any other component.
// - The user state will hold the current authenticated user’s information.
// - The data we pass to the value prop is now available to all the children of the UserProvider component.
// - We are passing both the user state and the setUser function so that components consuming this context can both read and update the user state.
// ----------------------------------------------

// ----------------------------------------------
// PROVIDE CONTEXT TO COMPONENTS THAT NEED IT:
// - With our context created, we can add it to any components we want to use. We’ll start with the SignUpForm component, where we’ll use it to set the user state when the user signs up.
// ----------------------------------------------

// ----------------------------------------------
// GET INITIAL USER STATE FROM TOKEN IN LOCAL STORAGE:
// - In the new getUserFromToken() function, we get the token from localStorage.
// - Recall the code we used to put the token into localStorage - specifically the value 'token': // ? localStorage.setItem('token', data.token);
// - We use the same value ('token' in localStorage.getItem('token')) to retrieve the item from local storage.
// - If the token does not exist, we return null. If the token does exist, we use the same code we used to get the user data from the token previously in the signUp() service function: // ? JSON.parse(atob(data.token.split('.')[1])).payload;
// - This allows us to get the user data we attached to the payload object on the back-end when it created the token. React will use data as the initial state for our user.
// - In a more complex app with more extensive interactions with tokens, we would want to house all the code that works with tokens in a single file to be better organized and reused more easily.
// ----------------------------------------------

import { createContext, useState } from "react";

const UserContext = createContext();

// Add the new getUserFromToken function
const getUserFromToken = () => {
  const token = localStorage.getItem("token");

  if (!token) return null;

  return JSON.parse(atob(token.split(".")[1])).payload;
};

function UserProvider({ children }) {
  // Create state.
  // ? const [user, setUser] = useState(null);
  // call getUserFromToken() to get our initial user state
  const [user, setUser] = useState(getUserFromToken());

  // This is the user state and the setUser function that will update it!
  // This variable name isn't special; it's just convention to use `value`.
  const value = { user, setUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// When components need to use the value of the user context, they will need
// access to the UserContext object to know which context to access.
// Therefore, we export it here.
// This is because there can be several different contexts in an application.
export { UserProvider, UserContext };
