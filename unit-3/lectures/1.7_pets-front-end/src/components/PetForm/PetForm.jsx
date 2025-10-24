// --------------------------------
// NOTES:
// --------------------------------
// - Let’s start on the create functionality for adding a new pet to our database. Once again, let’s review the minimum requirements laid out in the intro:
// -- Conditionally render a form to create a new pet.
// -- Handle the form submission.
// -- Display the new pet in the UI.
// - We’ll tackle create functionality in two steps. The first is to build the create form and conditionally render it. The second is to handle the form submission and display the new pet in the UI.

// --------------------------------
// PART 1: BUILD CREATE FORM:
// --------------------------------
// - In this step, we’ll set up a form where users can input new data for a pet. Typically, forms for creating new entries, like adding a new pet, are placed on separate pages. However, since we’re not using multiple pages or routing in this lesson, we’ll manage the form’s visibility with state. This means we’ll use state to control whether the form is displayed or hidden based on user interactions.
// - In PetForm.jsx, create a function component that accepts props as an argument. We’ll return to this file and build out the form in a moment.
// - Add the PetForm component to the App component.
// - Now that we can see what we’re doing as we work, we’ll build out the PetForm component. We’ll start by creating a controlled form allowing users to input data (name, age, and breed) for a new pet.
// - We’ll use the useState() hook to manage the form data and the handleChange() function to update the formData state as the user types.
// - Back to App.jsx to conditionally render form.

// --------------------------------
// PART 2: HANDLE FORM SUBMISSION AND DISPLAY NEW PET:
// - As a reminder of where we are in the process, let’s review the minimum requirements for creating a new pet:
// -- Conditionally render a form to create a new pet. This is done!
// -- Handle the form submission.
// -- Display the new pet in the UI.
// - Because creating a new pet will impact our pets state, we’ll want to place the new function where that state lives - App.jsx.
// - Inside of PetForm.jsx we can now create a new function called handleSubmit() to call when the the form is submitted.
// - This function will accept the submit event as an argument. To prevent the page from reloading, we’ll call evt.preventDefault(). Then, we’ll call props.handleAddPet() and pass it formData.
// - You can test that this works by adding a console.log(formData) inside the handleAddPet() function in the App component and then submit a completed form.
// --------------------------------
import { useState } from "react";
import styles from "./PetForm.module.scss";

const PetForm = (props) => {
  // formData state to control the form.
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  // handleChange function to update formData state.
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleAddPet(formData);
    // Right now, if you add a pet and submit the form,
    // the data entered will stay on the page. We'll fix this soon.
  };

  return (
    <div className={styles.formContainer}>
      {/* <h2>Pet Form Component</h2> */}
      {/* Call the new handleSubmit function when the form is submitted. */}
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          // Name attribute to match the key in formData state.
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor='age'> Age </label>
        <input
          id='age'
          name='age'
          value={formData.age}
          onChange={handleChange}
          required
        />
        <label htmlFor='breed'> Breed </label>
        <input
          id='breed'
          name='breed'
          value={formData.breed}
          onChange={handleChange}
        />
        <button type='submit'>Add New Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
