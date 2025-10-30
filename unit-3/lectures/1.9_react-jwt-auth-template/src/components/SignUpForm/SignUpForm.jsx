// -------------------------------
// SIGN UP FUNCTIONALITY:
// - The user has two attributes: username and password.
// - The password will be hashed on the back-end so we handle it as plain text here.
// - We will also include password confirmation and client-side validation.
// -------------------------------

// -------------------------------
// COMPONENT BREAKDOWN:
// - Standard controlled form functionality where the data is handled by the state within the component.
// - The disabled property attribute can be dynamically set based on certain conditions (eg. Disable submit button until the form is filled out and valid).
// -------------------------------

// -------------------------------
// ACCESS SETUSER() FROM USERCONTEXT:
// - Import the useContext() hook from React.
// - Import the UserContext object from the UserContext component file.
// - Pass the UserContext object to the useContext(()) hook.
// - Destructure the object returned by the useContext() hook to get the setUser() function. We also optionally have access to the user state, but we’re not using it here.
// -------------------------------

import { useState, useContext } from "react";
import { useNavigate } from "react-router";

// Import the signUp() function from the authService
import { signUp } from "../../services/authService";

// Import the UserContext object
import { UserContext } from "../../contexts/UserContext";

const SignUpForm = () => {
  const navigate = useNavigate();

  // Pass the UserContext object to the useContext hook to access:
  // - The user state (which we're not using here).
  // - The setUser function to update the user state (which we are using).
  //
  // Destructure the object returned by the useContext hook for easy access
  // to the data we added to the context with familiar names.
  const { setUser } = useContext(UserContext);

  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });

  // formData destructuring and handleChange function.
  const { username, password, passwordConf } = formData;

  const handleChange = (evt) => {
    setMessage("");
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    // ? console.log(formData); // this line will print the form data to the console
    try {
      const newUser = await signUp(formData);

      // Call the setUser function to update the user state, just like normal.
      setUser(newUser);

      // Take the user to the (non-existent) home page after they sign up.
      // We'll get to this shortly!
      navigate("/");
      // ? console.log(newUser);
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    <main>
      <h1>Sign Up</h1>
      <p>{message}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type='text'
            id='name'
            value={username}
            name='username'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            name='password'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='confirm'>Confirm Password:</label>
          <input
            type='password'
            id='confirm'
            value={passwordConf}
            name='passwordConf'
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button disabled={isFormInvalid()}>Sign Up</button>
          <button onClick={() => navigate("/")}>Cancel</button>
        </div>
      </form>
    </main>
  );
};

export default SignUpForm;
