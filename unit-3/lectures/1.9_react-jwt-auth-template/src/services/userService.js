// Create a new service function called index() in userService.js that makes a GET request to /users to fetch user data from the server. The function should:
// - Include a try...catch block to handle any errors that occur during the request.
// - Use the fetch() API to make the request.
// - Use a BASE_URL variable to build the URL for the request - this variable doesn’t exist in this file yet, so you’ll need to create it and assign it the appropriate value - there’s an example of this in the authService.js file - but it won’t match exactly.
// - Implement error handling by checking the data returned from the server, similar to what we implemented in the signIn() and signUp() functions in authService.js:
//   - If there is an err property on the data returned from the server, we know there was an error (this is assigned in the back-end code).
//   - If there isn’t an err property, we’ll assume the request was successful. Return the data from the function.
// - Export the function.

// Move to the Dashboard component’s file:
// - Import the function in the Dashboard component.
// - Import the useEffect() hook from React.
// - Write a useEffect() hook that contains a function named fetchUsers(). This function should:
//   - Include a try...catch block to handle any errors that occurred during the request. If there is an error, log it to the console.
//   - In the try block, call the index() function from the userService file. Store the data returned from the function in a variable named fetchedUsers.
//   - Console log the fetchedUsers variable.
// - From within the useEffect() hook, call the fetchUsers() function if there is a user.
// - Add the user context to the dependency array of the useEffect() hook.

// Return to your browser, open the console, and navigate to the dashboard while logged in. If you’ve set everything up correctly, you should see… an error. That’s ok though; the error message should indicate that the token is invalid and you’re unauthorized to access that route on the server. We’ll fix that next!

// Let’s fix the unauthorized error we’re seeing in the console.
// - To do this, we need to include the JWT in the request to the server so that it knows who we are. We’ll do this by adding an Authorization header to the request. This header will contain the word Bearer along with the JWT.
// - Note the formatting of the Authorization header: Bearer followed by a space and then the token. This exact format is required, and our back-end server will expect it.
// - Try navigating to the dashboard again. If everything is set up correctly, you should see the data returned from the server logged to the console!

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const index = async () => {
  try {
    // ? const res = await fetch(BASE_URL);
    // Change the fetch request so that it includes the Authorization header
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { index };
