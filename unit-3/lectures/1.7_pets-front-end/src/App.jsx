// --------------------------------
// NOTES:
// --------------------------------
// - Next, let’s work on the UI to make the service call and render the data it returns. To do this, we’ll use two hooks - useState() and useEffect().
// - Inside App.jsx, create a new state variable called pets to hold the pets. We know that the pet data we’ll get back from our API should be an array, so we’ll give pets the initial value of an empty array.
// - Next, let’s create a useEffect() hook to call the index service function.
// - First, we’ll need to import our index function. For now, we only have a single function exported from petService, but eventually, multiple functions will come from the same file. To save ourselves from having to refactor later, let’s go ahead and import all (*) of the exported functions as methods on a new petService object.
// - All our pet service functions will live in one tidy object in App.js, regardless of how many we export.
// - For useEffect(), When the page loads, we want to make a fetch call to our API, courtesy of our index service.
// - The useEffect() hook works great for that purpose, but there is one notable downside. Our index() function is asynchronous, meaning we’ll need to await any data it may return. Unfortunately, the callback function we pass to useEffect() cannot be made to be async.
// - How can we get around this limitation? Other than abandoning async/await syntax and returning to the potential callback hell of .then() syntax, a common workaround is to create a new async function inside of the callback, and then invoke it immediately afterward.
// - * Can also make a function that is invoked immediately after creation, using an Immediately Invoked Function Expression (or IIFE) is also an option.
// - Based on our express API at READ - GET - /pets, we know that we will receive data as an array of pets and an object with an error property.
// - In the instance that the API sends back an error object, we know something went wrong! Using an if statement, we can check if the response has an err property, which will only be the case if our controller caught an error. If so, we’ll throw a new Error - this time in our handler function - and pass the error contents to the catch block.
// - Throwing an error also prevents statements after the throw from being executed, so we don’t have to worry about accidentally setting pets state to an error object.
// - In the fetchPets’s catch block, we log the error. For this app, having any server-side issues show up in the client-side console is enough to help make debugging easier. This type of error-handling setup also allows us to provide error feedback in the UI; however, that’s not within the scope of this particular lesson.
// - Check the state of your application in the React Dev tools to confirm your list of pets exists.
// - Pass the pets state variable as a prop to the PetList component. This component is going to grow in complexity as we add more features, so we’re preemptively wrapping the PetList component in a React fragment.
// - You should see the Pet List header in the browser and the props object in the PetList component logged to the console (as well as in your React DevTools). If you see objects in the pets property on props, you know that the PetList component is receiving the pets state!
// - Once you’ve confirmed the PetList component has the right data, you can remove the console.log statement in PetList.jsx.

// --------------------------------
// HANDLE CLICK EVENT:
// --------------------------------
// - When designing a webpage with routes, we would normally create a show page that could be linked to at /pets/:petId. This would keep track of which specific pet the user had selected.
// - This app does not use routing, so we’ll need a way to track which pet the user has selected. That sounds like a job for state!
// - Create a new state variable that will hold a single pet. This should be an object that represents the selected pet or null if no pet is selected.
// - Next, we’ll need to create a new function to handle the click event we set up in the PetList component. We’ll build it inside App.jsx, as it will need access to the setSelected method we just set up.
// - This function should accept a pet object as an argument and set the selected pet to the state variable.
// - Next, pass this function as a prop to the PetList component and call it when a pet is clicked. This should replace the console log we added earlier.

// --------------------------------
// PET DETAIL COMPONENT:
// --------------------------------
// - Back in App.jsx, import the PetDetail component and add it to the return statement. Make sure to pass it the selected state containing our pet object on props.

// --------------------------------
// PET FORM COMPONENT:
// --------------------------------
// - Start by importing the PetForm component, then render it on the page.
// - When the page loads initially, the form should not be open. To accomplish this, we’ll need to create a new state variable inside App.jsx to represent the open or closed form component. We can set the initial value to false to represent it being closed when we first load the App component.
// - Next, still in App.jsx, create a handleFormView() function to toggle the above state variable. When the function is called, the Boolean value of isFormOpen should change from false to true or vice versa.
// - We also want to hide the form if it’s open when the user clicks a pet to view its details. We’ll add a call to setIsFormOpen(false) inside the existing handleSelect() function.
// - We’ll control whether the form is displayed or hidden when the user clicks a button that will exist inside the PetList component. After creating the function, let’s pass it down to PetList as a prop.
// - The text of the button will need to change depending on whether the form is open. To determine what text the button should display to the user, we’ll need to pass isFormOpen down to PetList.
// - Finally, in PetList.jsx, we can create our button.
// - To complete this step, we’ll need to conditionally render either the PetForm component or the PetDetail based on the value of isFormOpen.

// --------------------------------
// DISPLAY NEW PET:
// - In App.jsx, create a new async function named handleAddPet(), which accepts an object (our form data) as an argument. Add the structure for a try...catch statement as well.
// - Eventually, this function will call a new petService function - create() - and pass it the form data. create() will return the created pet object from the database, which we can add to the pets state.
// - Pass the new handleAddPet() function as a prop to the PetForm component.
// - Back to PetFom.jsx to handle form submission.
// - You can test that this works by adding a console.log(formData) inside the handleAddPet() function in the App component and then submit a completed form.
// - Now to petService.js to create the create() function.
// - With our create() function stubbed up, we can pass it data from the handleAddPet() function in our App component.
// - Now that the create() function receives data, we can build the functionality to send that data to the back-end.
// - Back to the petService.js file to handle data sent to backend and handle response.
// - We’ll invoke setPets() and pass it a new array comprised of the new pet object, followed by the existing pets, which we’ll add using the spread operator.
// - Once the user has submitted the form, we want the form to close - this, along with the new pet showing up in the PetList component, will serve as feedback to the user that the form was submitted.
// - Fortunately, all we need to do to accomplish that is call setIsFormOpen() and pass it false at the end of the handleAddPet() function.
// - As usual, we need to also account for any potential errors. Let’s check if the response - newPet - has an error property. If so, we’ll throw a new Error and pass it to the catch block.
// --------------------------------

// --------------------------------
// SUMMARY OF CREATE AND DISPLAY NEW PET:
// --------------------------------
// -- The formData object gets passed from the PetForm component to the App component, where the pets state is held.
// -- The App component passes the formData to the create() service function.
// -- In the create() function, the formData is converted to JSON, sent to our route on the back-end, used (as req.body) to create a new pet, and returned as a new JSON pet object by the controller.
// -- The create() function converts the JSON pet object to useable JavaScript and returns it to the App component’s handleAddPet() function.
// -- Our pets state is then set to a new array with our newPet and all the existing pets, updating it.
// -- Once our state updates, React refreshes the UI, and the user sees their brand new pet appear in the PetList component.
// - If that feels confusing, take a second to trace the data through your code! It’s essential to visualize the flow of data when working with CRUD apps; now that we’re passing data in both directions, this is an excellent time to practice this skill.
import { useState, useEffect } from "react";
import "./App.scss";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";
import PetForm from "./components/PetForm/PetForm";

function App() {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  // New state variable to control form visibility.
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Create a new useEffect
  useEffect(() => {
    // Create a new async function
    const fetchPets = async () => {
      try {
        // Call on the pet service's index function
        const fetchedPets = await petService.index();
        // Don't forget to pass the error object to the new Error
        if (fetchedPets.err) {
          throw new Error(fetchedPets.err);
        }
        // Set pets state to the returned pets data
        setPets(fetchedPets);
      } catch (err) {
        // Log the error object
        console.log(err);
      }
    };
    // Invoke the function
    fetchPets();
    // Add an empty dependency array to the `useEffect()` hook.

    // OR: Using an IIFE.
    // ? (async () => {
    //   ? const fetchedPets = await petService.index();
    //   ? setPets(fetchedPets);
    // ? })();
  }, []);

  const handleSelect = (pet) => {
    setSelected(pet);
    // Close the form if it's open when a new pet is selected.
    setIsFormOpen(false);
  };

  const handleFormView = (pet) => {
    // If the selected pet is not saved, clear selection when toggling form.
    // If there is a pet in the selected state and the form is opened, check to see if the pet has an _id property.
    if (!pet._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  const handleAddPet = async (formData) => {
    try {
      // To test with console log.
      // ? console.log(formData);
      // Call petService.create, assign return value to newPet
      const newPet = await petService.create(formData);

      if (newPet.err) {
        throw new Error(newPet.err);
      }

      // Log the newPet to the console
      // ? console.log(newPet);
      setPets([newPet, ...pets]);
      // Close the form after we've added the new pet
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdatePet = async (formData, petId) => {
    try {
      const updatedPet = await petService.update(formData, petId);

      // handle potential errors
      if (updatedPet.err) {
        throw new Error(updatedPet.err);
      }

      const updatedPetList = pets.map((pet) =>
        // If the _id of the current pet is not the same as the updated pet's _id,
        // return the existing pet.
        // If the _id's match, instead return the updated pet.
        pet._id !== updatedPet._id ? pet : updatedPet
      );
      // Set pets state to this updated array
      setPets(updatedPetList);
      // If we don't set selected to the updated pet object, the details page will
      // reference outdated data until the page reloads.
      setSelected(updatedPet);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePet = async (petId) => {
    try {
      const deletedPet = await petService.deletePet(petId);

      if (deletedPet.err) {
        throw new Error(deletedPet.err);
      }

      setPets(pets.filter((pet) => pet._id !== deletedPet._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* <h1>Welcome to the Pets App!</h1> */}
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {/* <PetForm />
      <PetDetail selected={selected} /> */}
      {isFormOpen ? (
        <PetForm
          handleAddPet={handleAddPet}
          selected={selected}
          handleUpdatePet={handleUpdatePet}
        />
      ) : (
        <PetDetail
          selected={selected}
          handleFormView={handleFormView}
          handleDeletePet={handleDeletePet}
        />
      )}
    </>
  );
}

export default App;
