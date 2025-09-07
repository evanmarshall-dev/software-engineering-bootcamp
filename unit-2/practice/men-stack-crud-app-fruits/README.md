# General Assembly: MEN Stack CRUD App - Fruits

## Module: RESTful DELETE

To further enhance our application, we’ll introduce two essential middleware components: `method-override` and `morgan`, to assist us with our delete route. We’ll begin with `method-override` here and cover `morgan` later.

By default, web browsers only allow for the `method` attribute of a form to be set to either `POST` or `GET`. This is in direct conflict with our RESTful routing convention, which uses the HTTP methods `PUT` and `DELETE` for certain routes. The solution is to use the `method-override` middleware, which essentially tricks our express app into thinking that we’ve made `PUT` and `DELETE` requests from the browser. By doing this, we’re able to stick to our routing conventions, while at the same time, behind the scenes, using HTTP methods that the browser supports. More details below.

The `morgan` middleware serves as a logging tool for our HTTP requests, providing valuable insights into application behavior. Again, we’ll see it in action below.

## Module: RESTful EDIT

The Edit route presents the user with a form for editing the details of a single fruit in our database. If we follow RESTful routing conventions, the corresponding URL for this route is GET /fruits/:fruitId/edit, where :fruitId represents the unique identifier of the fruit we intend to edit.

Also, compare your new/create and edit/update RESTful routes conventions. The full process of updating a fruit is similar to the process of creating a fruit in that both processes require two routes: a form route for collecting user data, and a second route for processing the data. For updating a fruit, the form route is called Edit and the processing route is called Update.

Here’s how the two processes compare:

| Process        | Form Route                         | Processing Route                |
| -------------- | ---------------------------------- | ------------------------------- |
| Create a fruit | New (`GET /fruits/new`)            | Create (`POST /fruits`)         |
| Update a fruit | Edit (`GET /fruits/:fruitId/edit`) | Update (`PUT /fruits/:fruitId`) |

## Module: RESTful UPDATE

The `update` route is responsible for processing the data submitted from the `edit` form and applying those changes to the corresponding item in the database.

In keeping with RESTful routing conventions, the url for this route will be `/fruits/:fruitId`

## Module: Reviewing the Technology and MVC Architecture of Our Web Application

In this section, we’ll combine an overview of the technologies used in our web application and how they fit into the Model-View-Controller (MVC) architecture.

### Technologies Employed

- JavaScript: The backbone programming language used in this tech stack.
- Node.js: Executes JavaScript code outside of a browser, in a terminal environment.
- Express: A web framework managing the request-response cycle within the application.
- EJS (Embedded JavaScript): The template engine for rendering dynamic HTML pages based on data.
- MongoDB: A document-based database for storing data persistently.
- Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, simplifying interactions with the database and enforcing data structure through schemas.

### MVC Architecture in Context

- Client: The browser or application initiating HTTP requests.
- Server: Listens for and processes incoming HTTP requests.
- server.js: The core of the application, orchestrating routes, middleware, database connections, and Express server setup.
- Controllers (in server.js): Handle specific request routes, interact with Mongoose models, and coordinate data flow between the model and view.
- Model (Mongoose): Interfaces with MongoDB, ensuring data adheres to predefined schemas.
- Database (MongoDB): Stores and manages data persistently, accessed via cloud-based MongoDB Atlas in this application.
- View (EJS): Utilizes templating to generate dynamic HTML pages. By integrating JavaScript into templates, EJS produces HTML that changes based on the data provided.

### Level Up MVC

- Separate concerns by creating distinct modules for each component (e.g., models, views, controllers) to enhance maintainability and scalability. Currently the controller and route functions are defined in the same file (`server.js`), which is fine for smaller apps and still considered MVC.

### Common properties on the `req` object

`req.body`: Object holding the form data a user has submitted. The keys on this object will match the name attributes of the inputs in the form and should conform with a model’s schema if it is to be saved to a database. The values will match what the user provided in the form.

`req.params`: Object holding the URL parameters of a URL. The keys on this object will match the string provided after the `:` in the route. The value of each key will match the data from that segment in the URL.

### Common methods on the `res` object

`res.render()`: Always provided a string as the first argument. That string should be a file path and will never start with a `/`.

`res.redirect()`: Always provided a string as the first argument. That string should be a valid route and will always start with a `/`.

## Sample MVC CRUD App Architecture

```javascript
// server.js

const fruitsCtrl = require("./controllers/fruits");

app.get("/", fruitsCtrl.home);
app.get("/fruits/new", fruitsCtrl.showNewForm);
app.post("/fruits", fruitsCtrl.create);
app.get("/fruits", fruitsCtrl.index);
app.get("/fruits/:fruitId", fruitsCtrl.show);
app.delete("/fruits/:fruitId", fruitsCtrl.delete);
app.get("/fruits/:fruitId/edit", fruitsCtrl.edit);
app.put("/fruits/:fruitId", fruitsCtrl.update);

app.listen(3000, () => {
  console.log("The express app is ready!");
});
```

```javascript
// controllers/fruits.js

const Fruit = require("../models/fruit");

const home = (req, res) => {
  res.render("index.ejs");
};

const showNewForm = (req, res) => {
  res.render("fruits/new.ejs");
};

const create = async (req, res) => {
  req.body.isReadyToEat = req.body.isReadyToEat === "on";
  await Fruit.create(req.body);
  res.redirect("/fruits");
};

const index = async (req, res) => {
  const foundFruits = await Fruit.find();
  res.render("fruits/index.ejs", { fruits: foundFruits });
};

// Add the rest of your controller functions here

module.exports = {
  home,
  showNewForm,
  create,
  index,
  // export others: show, edit, update, delete
};
```

## Server-Side Error Handling

### Try-Catch Blocks

```javascript
// models/fruit.js
const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
```

In the fruit schema the `name` prop is `required`. This prevents empty `name` strings from being added to the database by triggering a validation error.

Below, we will update the controller function for **creating** fruits to handle said validation error:

```javascript
// controllers/fruits.js
router.post("/", async (req, res) => {
  try {
    await Fruit.create(req.body);
    res.redirect("/fruits");
  } catch (err) {
    console.log(err.message); // Logs the error message
    res.send("An error has occurred.  Go back and try again.");
  }
});
```

Now if a user submits a form without a `name`, the validation error is dealt with. The `catch` receives an `Error` object as an argument which contains a `message` prop with details of the error. The `message` will show in the terminal and be sent back to the user in the response.

### Custom Error Handling

There could be an edge case when a user submits a `name` with some blank spaces, which will not be caught by a validation error because technically it is not blank.

To deal with this error we update the controller below:

```javascript
// controllers/fruits.js
router.post("/", async (req, res) => {
  try {
    if (!req.body.name.trim()) {
      throw new Error("Invalid input: The name field cannot be empty!");
    }
    await Fruit.create(req.body);
    res.redirect("/fruits");
  } catch (err) {
    res.render("fruits/new.ejs", { errorMessage: err.message });
  }
});
```

This uses an `if` statement with the trim `method`. Trim returns a new string with the whitespace removed. This is applied to the `name` prop of `req.body` so that if the `name` is invalid we create and `throw` a new error with a descriptive message. When we `throw` an error the control passes immediately to the `catch` block where the error message is passed to our view and `create()` is never called.

Now we can add the error message to our view for users to see:

```html
<!-- views/fruits/new.ejs -->
<% if (typeof errorMessage !== 'undefined') { %>
<p><%= errorMessage %></p>
<% } %>
```

## Client-Side Error Handling

### HTML Form Validation

Can prevent errors before being submitted to the server by things as simple as using the `required` attribute in your HTML forms.

You can also provide **CSS feedback** by changing the styles of an invalid input field when there is a validation error.
