// -------------------------------
// ADD USER CONTEXT TO NAVBAR COMPONENT:
// - To enhance user experience, it’s common to alter a navbar’s content based on whether the user is logged in or not. Above, we’re conditionally rendering the Welcome, {user.username} message if there is a user in state.
// - If the user state is falsy, we render a link to the sign-up page.
// -------------------------------

// -------------------------------
// SIGN OUT:
// - This is simpler than the other functionality we’ve implemented so far, as we only need to remove the token from localStorage and clear the user state to sign a user out.
// - We don’t even need to tell the back-end the user is signing out since it’s not maintaining any state regarding the currently signed-in users.
// - We’ll start by adding a Sign Out link to the NavBar component. This link will eventually call a function to sign the user out.
// - When the user clicks this link, we want to take them to the home page and sign them out. We’ll need a function to accomplish this.
// - Remember, because we’re using context to manage our user state, we can update the user state inside this component. We’ll just need to get the setUser() function from the UserContext first so it’s available in this component.
// -------------------------------

// Import the useContext hook
import { useContext } from "react";
import { Link } from "react-router";

// Import the UserContext object
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  // Get the setUser function from the UserContext
  const { user, setUser } = useContext(UserContext);

  // Add the handleSignOut function
  const handleSignOut = () => {
    // Clear the token from localStorage
    localStorage.removeItem("token");
    // Clear the user state
    setUser(null);
  };

  // Pass the UserContext object to the useContext hook to access:
  // - The user state (which we use here).
  // - The setUser function to update the user state (which we aren't using).
  //
  // Destructure the object returned by the useContext hook for easy access
  // to the data we added to the context with familiar names.
  // ? const { user } = useContext(UserContext);

  return (
    <nav>
      {/* <ul>
        <li>
          <Link to='/sign-up'>Sign Up</Link>
        </li>
      </ul> */}
      {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          {/* The new link */}
          <li>
            <Link to='/'>Dashboard</Link>
          </li>
          {/* Add the Sign Out link */}
          {/* Call the handleSignOut function on a click */}
          <li>
            <Link to='/' onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          {/* Another new link */}
          <li>
            <Link to='/'>Home</Link>
          </li>
          {/* The new link! */}
          <li>
            <Link to='/sign-in'>Sign In</Link>
          </li>
          <li>
            <Link to='/sign-up'>Sign Up</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
