// --------------------------------
// CREATE HOOT:
// - As a user, I should be able to create a hoot post.
// - This will require a <form> component that allows users to create new hoots. Upon submitting a new hoot, the user should be redirected back to the ‘List’ page.
// - We’ll make a POST request to our back-end server to create a hoot. When a request is made, we’ll use the response to update the hoots state held in the App component. This data will then flow down to the HootList component, where we will be able to see our newly added hoot.
// --------------------------------

import { useContext } from "react";
import { Link } from "react-router";

import { UserContext } from "../../contexts/UserContext";

import Logo from "../../assets/images/logo.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <nav className={styles.container}>
      {user ? (
        <ul>
          <li>Welcome, {user.username}</li>
          <li>
            <Link to='/'>
              <img src={Logo} alt='A cute owl' />
            </Link>
          </li>
          <li>
            <Link to='/hoots'>HOOTS</Link>
          </li>
          <li>
            <Link to='/hoots/new'>NEW HOOT</Link>
          </li>
          <li>
            <Link to='/' onClick={handleSignOut}>
              Sign Out
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to='/'>
              <img src={Logo} alt='A cute owl' />
            </Link>
          </li>
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
