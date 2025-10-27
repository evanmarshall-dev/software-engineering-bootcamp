// --------------------------------
// NOTES:
// --------------------------------
// The index() function will get back a Response object and assign it to a new res variable.
// To resolve this response to a usable JavaScript object, we need to invoke its json() method. We also know that, on the front end, we’ll want to use this data to populate a list of pets, so we’d better return the parsed res data out of this function.
// Uses fetch() to make a GET request to the base URL.
// Parses the response using the json() method.
// Handles errors with a try...catch block.
// Returns the parsed response.

// --------------------------------
// HANDLE CREATE PET:
// - Inside petService.js, we’ll need to add a new function called create().
// - Stub up the function so that it:
// -- Accepts a pet object as an argument.
// -- Will be able to handle errors with a try...catch block.
// - Make sure to export the create() function at the bottom of the file.
// - With our create() function stubbed up, we can pass it data from the handleAddPet() function in our App component.
// - Time to create a new pet in the database! We’ll need to:
// -- Use fetch() to make a POST request to the base URL and send the new pet data with the request.
// -- Parse the response with the json() method.
// -- Return the parsed response.
// - This will resemble the service call we made while building index functionality, except we’ll make a 'POST' request now instead of a 'GET' request. This means we’ll need to specify a few things in the options object.
// - Test this out in the browser. You should see the new pet object logged to the console when you submit the form.
// - Back to App.jsx to add new pet state.
// --------------------------------
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

// Get all pets.
const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    // Resolve the response to a usable JavaScript object.
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// Test the index function by calling it and logging the result to the console.
// If everything is working correctly, you should see an array of pets in the console.
// Make sure you import index into App.jsx to test.
// ? console.log(await index());

const create = async (formData) => {
  try {
    const res = await fetch(BASE_URL, {
      // We specify that this is a 'POST' request
      method: "POST",
      // We're sending JSON data, so we attach a Content-Type header
      // and specify that the data being sent is type 'application/json'
      headers: {
        "Content-Type": "application/json",
      },
      // The formData, converted to JSON, is sent as the body
      // This will be received on the back-end as req.body
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const update = async (formData, petId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

const deletePet = async (petId) => {
  try {
    const res = await fetch(`${BASE_URL}/${petId}`, {
      method: "DELETE",
    });
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// Export an object containing index because there will be more service functions later.
export { index, create, update, deletePet };
