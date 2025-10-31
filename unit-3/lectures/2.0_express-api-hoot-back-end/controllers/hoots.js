// ------------------------
// CREATE HOOT:
// - This route will be a POST request to /hoots, and will return a JSON response with the new hoot document. The purpose of this route is to handle data that is sent along with a form submission.
// - We will be following these specs when building the route:
//   - CRUD Action: CREATE
//   - Method: POST
//   - Path: /hoots
//   - Response: JSON
//   - Success Status Code: 201 Created
//   - Success Response Body: A new hoot object
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// READ HOOTS:
// - This route will be a GET request to /hoots, and will return a JSON response with all the hoots in the database.
// - We will be following these specs when building the route:
//   - CRUD Action: READ
//   - Method: GET
//   - Path: /hoots
//   - Response: JSON
//   - Success Status Code: 200 Ok
//   - Success Response Body: An array of all the hoots in the database named hoots. The array will be empty if there are no hoots in the database.
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// READ SINGLE HOOT:
// - This route will be a GET request to /hoots/:hootId, returning a JSON response with a single hoot from the database.
// - We will be following these specs when building the route:
//   - CRUD Action: READ
//   - Method: GET
//   - Path: /hoots/:hootId
//   - Response: JSON
//   - Success Status Code: 200 Ok
//   - Success Response Body: A JSON object with the hoot that matches the hootId parameter.
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// UPDATE SINGLE HOOT:
// - This route will be a PUT request on /hoots/:hootId, returning a JSON response with a single updated hoot from the database.
// - We will be following these specs when building the route:
//   - CRUD Action: UPDATE
//   - Method: PUT
//   - Path: /hoots/:hootId
//   - Response: JSON
//   - Success Status Code: 200 Ok
//   - Success Response Body: A JSON object with the updated hoot.
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// DELETE SINGLE HOOT:
// - This route will be a DELETE request to /hoots/:hootId, returning a JSON response with the deleted hoot.
// - We will be following these specs when building the route:
//   - CRUD Action: DELETE
//   - Method: DELETE
//   - Path: /hoots/:hootId
//   - Response: JSON
//   - Success Status Code: 200 Ok
//   - Success Response Body: A JSON object with the deleted hoot.
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// CREATE COMMENT:
// - This route will be a POST request to /hoots/:hootId/comments, and will return a JSON response with the new comment document. The purpose of this route is to handle data that is sent along with a form submission.
// - We will be following these specs when building the route:
//   - CRUD Action: CREATE
//   - Method: POST
//   - Path: /hoots/:hootId/comments
//   - Response: JSON
//   - Success Status Code: 201 Created
//   - Success Response Body: A new comment object
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// UPDATE COMMENT:
// - In this section, we will create an update route to find and update a single comment within a hoot.
// - We will be following these specs when building the route:
//   - CRUD Action: UPDATE
//   - Method: PUT
//   - Path: /hoots/:hootId/comments/:commentId
//   - Response: JSON
//   - Success Status Code: 200 Ok
//   - Success Response Body: A JSON status message.
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

// ------------------------
// DELETE COMMENT:
// - In this section, we will create a delete route to find and delete a single comment within a hoot.
// - We will be following these specs when building the route:
//   - CRUD Action: DELETE
//   - Method: DELETE
//   - Path: /hoots/:hootId/comments/:commentId
//   - Response: JSON
//   - Success Status Code: 200 Ok
//   - Success Response Body: A JSON status message.
//   - Error Status Code: 500 Internal Server Error
//   - Error Response Body: A JSON object with an error key and a message describing the error
// ------------------------

const express = require("express");
const Hoot = require("../models/hoot.js");
const router = express.Router();
// - Import verifyToken middleware.
const verifyToken = require("../middleware/verify-token.js");

// - Apply verifyToken middleware to all routes in this router.
router.use(verifyToken);

// ROUTES
// - POST /hoots
// - Adding verifyToken directly to this route guarantees its protection, independent of the order in which middleware is applied elsewhere in the application. This approach is the recommended method for handling authentication when securing routes individually.
// - In server.js, we set the base path for our hootsRouter as /hoots. This means that when defining the router above, we only need to specify the path as /. This path will automatically be appended to the base path /hoots defined in server.js.
// ? router.post("/", verifyToken, async (req, res) => {
// - Change to:
router.post("/", async (req, res) => {
  // - 1. Add the logged-in user as the author:
  //   - Before creating a new hoot, we’ll add the logged-in user’s ID (req.user._id) to the req.body.author. This ensures that the logged-in user is recorded as the author of the hoot.
  // - 2. Create the hoot:
  //   - We’ll use the create() method from the Hoot model, passing in req.body. This method will create a new hoot document.
  //     - At first, the author property in this document will only have the user’s ID (an ObjectId).
  //     - To include the full user information, we’ll add the complete user object (already available in req) to the new hoot.
  //   - This step is important so that the new hoot can immediately display the author’s details on the client side.
  // - 3. Send the response:
  //   - After creating the new hoot, we’ll send it back as a JSON response. This way, the client can immediately show the new hoot with all its information.

  // - When we use Mongoose’s create() method, the new hoot is not just a regular JavaScript object—it’s a Mongoose document. This document includes an extra _doc property, which holds the actual data retrieved from MongoDB. Normally, we don’t need to worry about this, but since we’re updating the author property before sending the response, we’ll need to access the hoot._doc property to work with the actual data.
  try {
    // - Create relationship between hoot and user.
    req.body.author = req.user._id;
    const hoot = await Hoot.create(req.body);
    hoot._doc.author = req.user;
    res.status(201).json(hoot);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - GET /hoots
// - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
// - Restricting access to the index and show functionality will reduce the amount of conditional rendering we need to implement in our React app.
router.get("/", async (req, res) => {
  // - 1. We’ll call upon the find({}) method of our Hoot model, retrieving all hoots from the database. When we call upon find({}), we’ll chain two additional methods to the end:
  //   - The first is the populate() method. We’ll use this to populate the author property of each hoot with a user object.
  //   - The second is the sort() method. We’ll use this to sort hoots in descending order, meaning the most recent entries will be at the at the top.
  //  - 2. Once the new hoots are retrieved, we’ll send a JSON response containing the hoots array.
  try {
    const hoots = await Hoot.find({})
      // - Populate author field with user object. You can see the objectID in database and populate takes this and fetches the full author.
      .populate("author")
      .sort({ createdAt: "desc" });
    res.status(200).json(hoots);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - GET /hoots/:hootId
router.get("/:hootId", async (req, res) => {
  // - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
  // - 1. We’ll call upon our Hoot model’s findById() method and pass in req.params.hootId. We’ll also call populate() on the end of our query to populate the author property of the hoot.
  // - 2. Once the new hoot is retrieved, we’ll send a JSON response with the hoot object.
  try {
    // - Now that we added a route to create comments, we need to make a small change to our show controller function. In addition to populating the author of each hoot, we also want to populate the author of each comment in the comments array.
    // - Now, when the user hits this route, any comments inside of the comment array for the returned hoot will have their author property populated as well!
    // ? const hoot = await Hoot.findById(req.params.hootId).populate("author");
    const hoot = await Hoot.findById(req.params.hootId).populate([
      "author",
      "comments.author",
    ]);
    res.status(200).json(hoot);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - PUT /hoots/:hootId
router.put("/:hootId", verifyToken, async (req, res) => {
  // - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
  // - 1. First, we’ll retrieve the hoot we want to update from the database. We’ll do this using our Hoot model’s findById() method.
  // - 2. With our retrieved hoot, we need check that this user has permission to update the resource. We accomplish this using an if condition, comparing the hoot.author to _id of the user issuing the request (req.user._id). Remember, hoot.author contains the ObjectId of the user who created the hoot. If these values do not match, we will respond with a 403 status.
  // - 3. If the user has permission to update the resource, we’ll call upon our Hoot model’s findByIdAndUpdate() method.
  // - 4. When calling upon findByIdAndUpdate(), we pass in three arguments:
  //   - The first is the ObjectId (req.params.hootId) by which we will locate the hoot.
  //   - The second is the form data (req.body) that will be used to update the hoot document.
  //   - The third argument ({ new: true }) specifies that we want this method to return the updated document.
  // - 5. After updating the hoot, we’ll append a complete user object to the updatedHoot document (as we did in our create controller function).
  // - 6. Finally, we issue a JSON response with the updatedHoot object.

  // - As an extra layer of protection, we’ll use conditional rendering in our React app to limit access to this functionality so that only the author of a hoot can view the UI elements that allow editing.
  try {
    // Find the hoot:
    const hoot = await Hoot.findById(req.params.hootId);

    // Check permissions:
    if (!hoot.author.equals(req.user._id)) {
      return res.status(403).send("You're not allowed to do that!");
    }

    // Update hoot:
    const updatedHoot = await Hoot.findByIdAndUpdate(
      req.params.hootId,
      req.body,
      { new: true }
    );

    // Append req.user to the author property:
    updatedHoot._doc.author = req.user;

    // Issue JSON response:
    res.status(200).json(updatedHoot);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - DELETE /hoots/:hootId
router.delete("/:hootId", verifyToken, async (req, res) => {
  // - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
  // - 1. First, we’ll retrieve the hoot we want to delete from the database. We’ll do this using our Hoot model’s findById() method.
  // - 2. With our retrieved hoot, we need check that this user has permission to delete the resource. We accomplish this using an if condition, comparing the hoot.author to _id of the user issuing the request (req.user._id). Remember, hoot.author contains the ObjectId of the user who created the hoot. If these values do not match, we respond with a 403 Forbidden status.
  // - 3. If the user has permission to delete the resource, we call upon our Hoot model’s findByIdAndDelete() method.
  // - 4. The findByIdAndDelete() accepts an ObjectId (req.params.hootId), used to locate the hoot we wish to remove from the database.
  // - 5. Finally, we issue a JSON response with the deletedHoot object.

  // - As an extra layer of protection, we’ll use conditional rendering in our React app to limit access to this functionality so that only the author of a hoot can view the UI element for deleting.
  try {
    const hoot = await Hoot.findById(req.params.hootId);

    if (!hoot.author.equals(req.user._id)) {
      return res.status(403).send("You're not allowed to do that!");
    }

    const deletedHoot = await Hoot.findByIdAndDelete(req.params.hootId);
    res.status(200).json(deletedHoot);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - POST /hoots/:hootId/comments
router.post("/:hootId/comments", verifyToken, async (req, res) => {
  // - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
  // - 1. As we did when creating hoots, we’ll first append req.user._id to req.body.author. This updates the form data that will be used to create the resource, and ensures that the logged in user is marked as the author of a comment.
  // - 2. Next we’ll call upon the Hoot model’s findById() method. The retrieved hoot is the parent document we wish to add a comment to.
  // - 3. Because comments are embedded inside hoot’s, the commentSchema has not been compiled into a model. As a result, we cannot call upon the create() method to produce a new comment. Instead, we’ll use the Array.prototype.push() method, provide it with req.body, and add the new comment data to the comments array inside the hoot document.
  // - 4. To save the comment to our database, we call upon the save() method of the hoot document instance.
  // - 5. After saving the hoot document, we locate the newComment using its position at the end of the hoot.comments array, append the author property with a user object, and issue the newComment as a JSON response.
  try {
    req.body.author = req.user._id;
    const hoot = await Hoot.findById(req.params.hootId);
    hoot.comments.push(req.body);
    // Save the document programmatically using save method.
    await hoot.save();

    // Find the newly created comment:
    const newComment = hoot.comments[hoot.comments.length - 1];

    newComment._doc.author = req.user;

    // Respond with the newComment:
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - PUT /hoots/:hootId/comments/:commentId
router.put("/:hootId/comments/:commentId", verifyToken, async (req, res) => {
  // - This route might be seem intimidating at first. It requires both a hootId and a commentId, so that we can locate both the parent, and the child document within it.
  // - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
  // - 1. First we call upon the Hoot model’s findById() method. The retrieved hoot is the parent document that holds an array of comments. We’ll need to find the specific comment we wish to update within this array. To do so, we can use the MongooseDocumentArray.prototype.id() method. This method is called on the array of a document, and returns an embedded subdocument based on the provided ObjectId (req.params.commentId).
  // - 2. With the retrieved comment, we update its text property with req.body.text, before saving the parent document (hoot), and issuing a JSON response with a message of Ok.
  try {
    const hoot = await Hoot.findById(req.params.hootId);
    const comment = hoot.comments.id(req.params.commentId);

    // ensures the current user is the author of the comment
    if (comment.author.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to edit this comment" });
    }

    comment.text = req.body.text;
    await hoot.save();
    res.status(200).json({ message: "Comment updated successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// - DELETE /hoots/:hootId/comments/:commentId
router.delete("/:hootId/comments/:commentId", verifyToken, async (req, res) => {
  // - This route might be seem intimidating at first. It requires both a hootId and a commentId, so that we can locate both the parent, and the child document within it.
  // - A user needs to be logged in to view a list of hoots, so be sure to include the verifyToken middleware (see above).
  // - 1. First we call upon the Hoot model’s findById() method. The retrieved hoot is the parent document that holds an array of comments. We’ll need to remove a specific comment from this array.
  // - 2. To do so, we’ll make use of the MongooseArray.prototype.remove() method. This method is called on the array property of a document, and removes an embedded subdocument based on the provided query object ({ _id: req.params.commentId }).
  // - 3. After removing the subdocument, we save the parent hoot document, and issue a JSON response with a message of Ok.
  try {
    const hoot = await Hoot.findById(req.params.hootId);
    const comment = hoot.comments.id(req.params.commentId);

    // ensures the current user is the author of the comment
    if (comment.author.toString() !== req.user._id) {
      return res
        .status(403)
        .json({ message: "You are not authorized to edit this comment" });
    }

    hoot.comments.remove({ _id: req.params.commentId });
    await hoot.save();
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

module.exports = router;
