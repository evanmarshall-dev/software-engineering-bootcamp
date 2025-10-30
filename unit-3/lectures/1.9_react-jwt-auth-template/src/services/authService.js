// Use the `VITE_BACK_END_SERVER_URL` environment variable to set the base URL.
// Note the `/auth` path added to the server URL that forms the base URL for
// all the requests in this service.
// We can check local storage via Chrome dev tools by typing in localStorage in the console.

// The handleSubmit() function in the SignUpForm component calls the signUp() function below.
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const signUp = async (formData) => {
  try {
    // Fetch from the sign-up route.
    const res = await fetch(`${BASE_URL}/sign-up`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // Attach form data into the body of the request.
      body: JSON.stringify(formData),
    });

    // The token should be within this response data.
    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    // If there is a token, store it in local storage and return the payload.
    if (data.token) {
      localStorage.setItem("token", data.token);
      // We need to get the data from the token payload.
      // - 1. Extract the middle part of the token (the payload). // ? const middleOfJWT = data.token.split(".")[1];
      // - 2. Decode the base64 string or the middle of the JWT. This gives us a stringified JSON object. // ? const decodedMiddle = atob(middleOfJWT);
      // - 3. Parse the stringified JSON into a JavaScript object. // ? const payload = JSON.parse(decodedMiddle).payload;
      // - 4. Return the payload. // ? return payload;
      // - If everything goes well, an object that looks like { username: 'user', _id: '6785cc89a998cb8ea1d14725' } will be returned from this function.
      return JSON.parse(atob(data.token.split(".")[1])).payload;
    }

    throw new Error("Invalid response from server");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const signIn = async (formData) => {
  try {
    const res = await fetch(`${BASE_URL}/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.err) {
      throw new Error(data.err);
    }

    if (data.token) {
      localStorage.setItem("token", data.token);
      return JSON.parse(atob(data.token.split(".")[1])).payload;
    }

    throw new Error("Invalid response from server");
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export { signUp, signIn };
