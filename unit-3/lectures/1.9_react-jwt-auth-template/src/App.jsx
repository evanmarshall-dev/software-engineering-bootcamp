// With all the pieces in place, we can finally build the route! We’ll use a ternary with the user context to conditionally render the Dashboard or Landing component within the element property of a Route component. This will allow us to render the appropriate component based on the user’s authentication status.

// Import useContext
import { useContext } from "react";
import { Routes, Route } from "react-router"; // Import React Router

import NavBar from "./components/NavBar/NavBar";
// ? import HomePage from "./pages/Homepage";

// Import the SignUpForm component
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SignInForm from "./components/SignInForm/SignInForm";
// Import the Landing and Dashboard components
import Landing from "./components/Landing/Landing";
import Dashboard from "./components/Dashboard/Dashboard";

// Import the UserContext
import { UserContext } from "./contexts/UserContext";

import "./App.css";

const App = () => {
  // Get the user
  const { user } = useContext(UserContext);

  return (
    <>
      <NavBar />
      {/* Add the Routes component to wrap our individual routes*/}
      <Routes>
        {/* <Route path='/' element={<HomePage />} /> */}
        {/* Add the new `/` route! */}
        <Route path='/' element={user ? <Dashboard /> : <Landing />} />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path='/sign-in' element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;
