import { useState } from "react";
import "./App.css";

const style: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "0.5rem",
  width: "300px",
  margin: "2rem auto",
  fontFamily: "Arial, sans-serif",
};

// NOTES:
// You cannot directly change the formData variable because React will not know that it has changed and will not re-render the component. You need to use a setter function (setFormData) to update the state because this function alerts React that the state has changed and it needs to re-render the component.
// The useState hook returns an array with two elements: the current state (formData) and a function to update that state (setFormData).
// The initial state is an object with two properties: name and email, both set to empty strings.
// Whenever the state is updated using setFormData, the component will re-render with the new state.
// This is how we create controlled components in React, where the form inputs are controlled by React state.

// Now we will create form validations to prevent submissions based on what we setup.

const App = () => {
  // ? const [formData, setFormData] = useState({
  //   ? name: "",
  //   ? email: "",
  //   ? password: "",
  // ? });

  const [title, setTitle] = useState("The full name will appear here.");
  // ? const [firstName, setFirstName] = useState("");
  // ? const [lastName, setLastName] = useState("");
  // Replace the firstName and lastName state variables with the following:
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    // Add
    password: "",
    passwordConfirm: "",
  });

  // Error handling
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    password: "",
    passwordConfirm: "",
  });

  // ? const key = "name";
  // When a variable is used as the key then the value of the variable (name) is used as the key (name: "John").
  // ? const object = {
  // ? [key]: "John",
  // Whatever the second key is will be used.
  // ? [key]: "Doe",
  // ? };

  // ? const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  // 1. Call setFormData
  // 2. Spread the existing formData, whatever was already in name and email.
  // 3. Update the specific field that changed
  // ? setFormData({
  // ? ...formData,
  // Having e.target.id in square brackets like above means that the value of e.target.id will be used as the key and the value of the target will be used as the value.
  // This allows us to use multiple input fields with a single handleChange function.
  // i.e. if the name input field changes then e.target.id will be "name" and e.target.value will be the new value of the name input field.
  // You will see this update in real time in chrome react tools.
  // ? [e.target.id]: e.target.value,
  // ? });
  // ? };

  // ? const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  // ? e.preventDefault();
  // Log the form data to the console.
  // ? console.log(formData);
  // Reset the form data to empty strings.
  // ? setFormData({
  //   ? name: "",
  //   ? email: "",
  //   ? password: "",
  // ? });
  // ? };

  // when invoked, update the firstName state to equal the new value
  // REMOVE THIS FUNCTION
  // ? const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   ? setFirstName(e.target.value);
  // ? };

  // REMOVE THIS FUNCTION
  // ? const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   ? setLastName(e.target.value);
  // ? };

  // Replace them with the following:
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // After change check errors.
    checkErrors(e);
  };

  const updateTitle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ? setTitle(`${firstName} ${lastName}`);
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`);
    // ? setFirstName("");
    // ? setLastName("");
    setFormData({
      firstName: "",
      lastName: "",
      password: "",
      passwordConfirm: "",
    });
  };

  // Helper functions for validations and errors.
  // Destructure target from the event object.
  const checkErrors = ({ target }: { target: HTMLInputElement }) => {
    if (target.name === "firstName") {
      setErrors({
        ...errors,
        firstName:
          target.value.length < 3
            ? "Your first name must be at least 3 characters long."
            : "",
      });
    }

    if (target.name === "lastName") {
      setErrors({
        ...errors,
        lastName:
          target.value.length < 2
            ? "Your last name must be at least 2 characters long."
            : "",
      });
    }

    if (target.name === "password") {
      setErrors({
        ...errors,
        password:
          target.value.length < 6
            ? "Your password must be at least six characters long."
            : "",
        passwordConfirm:
          formData.passwordConfirm !== target.value
            ? "The passwords do not match."
            : "",
      });
    }

    if (target.name === "passwordConfirmation") {
      setErrors({
        ...errors,
        passwordConfirm:
          formData.password !== target.value
            ? "The passwords do not match."
            : "",
      });
    }
  };

  // We can also use state to disable or enable a submission button!
  // We want our button to be disabled under two circumstances:
  // 1. If the form is invalid, which is indicated by the errors state.
  // 2. If any of the form inputs have no input.
  // We don’t need to create a new state to handle this, as we can calculate both values off of the existing state:
  const formIsInvalid = Object.values(errors).some(Boolean);
  const formHasMissingData = !Object.values(formData).every(Boolean);
  // - Object.values() is used to create an array of the values in the errors object. In other words, this will be an array of the error message strings that users may see.
  // - .some(Boolean) checks if any values are truthy (non-empty strings). If so, .some() will return true.
  // - Ultimately formIsInvalid is only true if there are error messages in state.
  // For formHasMissingData:
  // - Again, Object.values() is used to create an array of the values in the formData object, or in other words, an array containing the data the user has entered into the form.
  // - Check if every value in the array is truthy (non-empty strings) using .every(Boolean).
  // - Then, use the bang operator to invert the boolean value returned by .every().
  // - Ultimately, formHasMissingData is only true if any of the values in formData is an empty string.
  // - We can’t derive this from the errors state because we only check for errors after the user has entered something into an input.

  return (
    <>
      {/* <form onSubmit={handleSubmit} style={style}> */}
      {/* <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          value={formData.name}
          // Every time we get keystroke we call handleChange.
          onChange={handleChange}
          placeholder='Enter your full name'
          autoComplete='on'
        /> */}
      {/* <label htmlFor='email'>Email:</label> */}
      {/* <input
          type='email'
          // Use id instead of name to match the state keys. This fixes browser autocomplete issues.
          id='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Enter your email address'
          // Autocomplete attribute allows the browser to suggest previously entered values for the input field.
          autoComplete='on'
        /> */}
      {/* <label htmlFor='password'>Password:</label> */}
      {/* <input
          type='password'
          id='password'
          value={formData.password}
          onChange={handleChange}
          placeholder='Enter your password'
        /> */}
      {/* <button type='submit'>Submit</button> */}
      {/* </form> */}
      {/* <hr /> */}
      <h2>{title}</h2>
      <form onSubmit={updateTitle} style={style}>
        {/* Create div for error message */}
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            id='firstName'
            name='firstName'
            type='text'
            value={formData.firstName}
            // ? onChange={handleFirstNameChange}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor='lastName'>Last Name: </label>
          <input
            id='lastName'
            name='lastName'
            type='text'
            value={formData.lastName}
            // ? onChange={handleLastNameChange}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor='password'>Password: </label>
          <input
            id='password'
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label htmlFor='passwordConfirm'>Confirm Password: </label>
          <input
            id='passwordConfirm'
            name='passwordConfirm'
            type='password'
            value={formData.passwordConfirm}
            onChange={handleChange}
          />
          {errors.passwordConfirm && (
            <p style={{ color: "red" }}>{errors.passwordConfirm}</p>
          )}
        </div>

        {/* <button type='submit'>Submit</button> */}
        {/* If either formIsInvalid or formHasMissingData is true, then the button will be disabled. */}
        <button type='submit' disabled={formIsInvalid || formHasMissingData}>
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
