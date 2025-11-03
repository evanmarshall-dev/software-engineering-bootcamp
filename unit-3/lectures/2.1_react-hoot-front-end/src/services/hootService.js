// ---------------------------------------
// NOTES:
// - This token is decoded by the verifyToken middleware function on our server, which allows us to identify the signed-in user and ensures that only signed-in users can access this functionality.
// - If you look at the controllers/hoots.js file in your back-end application, you’ll notice that all of our routes for hoots are protected by the verifyToken middleware.
// ---------------------------------------

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/hoots`;

// Index service function:
const index = async () => {
  try {
    const res = await fetch(BASE_URL, buildOptions());

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Show service function:
// - Once again, our service function will require an Authorization header.
// - Let’s take a moment to connect the dots of our application. Notice the hootId in the below service function. Where will this information be used in the back-end app?
const show = async (hootId) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`, buildOptions());
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Create service function:
const create = async (hootFormData) => {
  try {
    // ? const res = await fetch(BASE_URL, {
    // ? method: "POST",
    // ? headers: {
    //   ? Authorization: `Bearer ${localStorage.getItem('token')}`,
    //   ? 'Content-Type': 'application/json',
    // ? },
    // ? body: JSON.stringify(hootFormData),
    // ? });
    const res = await fetch(BASE_URL, buildOptions(hootFormData, "POST"));

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Delete Hoot service function:
const deleteHoot = async (hootId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${hootId}`,
      buildOptions(null, "DELETE")
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Update Hoot service function:
async function update(hootId, hootFormData) {
  try {
    const res = await fetch(
      `${BASE_URL}/${hootId}`,
      buildOptions(hootFormData, "PUT")
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
}

// Create Comment service function:
const createComment = async (hootId, commentFormData) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${hootId}/comments`,
      buildOptions(commentFormData, "POST")
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Delete Comment service function:
const deleteComment = async (hootId, commentId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${hootId}/comments/${commentId}`,
      buildOptions(null, "DELETE")
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

// Update Comment service function:
const updateComment = async (hootId, commentId, commentFormData) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${hootId}/comments/${commentId}`,
      buildOptions(commentFormData, "PUT")
    );

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export {
  index,
  show,
  create,
  createComment,
  deleteHoot,
  update,
  deleteComment,
  updateComment,
};

// Helper functions:
// - Make code DRY.
// - We want to ensure local storage is run whenever we make a request that requires authentication as well as we do not know when we need header information.
// - Helper functions that are not the main functionality of the file should be placed below the main exported functions.
function buildOptions(data, method = "GET") {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options;
}
