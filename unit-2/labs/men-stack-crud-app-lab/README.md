# MEN Stack CRUD App Lab

This lab focuses on building a CRUD (Create, Read, Update, Delete) application using the MEN stack (MongoDB, Express.js, EJS, and Node.js). A simple application that allows users to manage a collection of resources (Solar Bodies) through a RESTful API.

## Minimum Viable Product (MVP)

**Goal** is to build an application that allows users to perform complete CRUD operations on your chosen resource through a web interface.

Focusing on one functionality at a time:

1. **Create**: Implement the ability to add new entries to your database.
2. **Read**: Display the data from your database on your application’s front end.
3. **Update**: Allow users to modify existing data entries.
4. **Delete**: Give users the ability to remove entries.

**Iterative Testing**: Continually tested each functionality before you moving on to the next.

## Getting Started

### Set Up Your project structure

- Initialize your project and install necessary packages (express, mongoose, ejs, etc.).
- Create your server.js file.

### Create the server and test route

- Set up an Express server in your server.js file.
- Create a basic GET route (like /test) to confirm the server is running properly.
- Set up a views directory and create a simple landing page to test the route.

### Define your resource and schema

- Decide on the model or resource (e.g., Dogs, Cars, Blogs) you want to manage.
- Create a new file for your Mongoose Schema. Define the schema by deciding on the fields and data types relevant to your resource (String, Number, Boolean, etc.).

### Establish database connection

- Store your MongoDB connection string in a .env file for security.
- Add the code to connect to MongoDB in your server.js file.

### Create routes and views for CRUD operations

- Start with the `New` page:
  - Define a `/new` route in your server file.
  - Then, create a `new.ejs` file inside the `views` directory.
  - Use `res.render()` in the route to display this view.
  - Build out the `view` with the HTML and form needed for creating new items
- Build the `POST` route to handle `CREATE` functionality for data sent from the form `action`
- Repeat this process for each CRUD operation - create corresponding routes in your `server.js` file and `views` in the views directory.
- Be sure you test each route and view in the browser to confirm functionality before moving to the next one.

Your completed application should have the following RESTful routes:

| HTTP Method | Route                  | Action  | Description                                 |
| ----------- | ---------------------- | ------- | ------------------------------------------- |
| GET         | /solar-bodies          | Index   | Displays a list of all solar bodies         |
| GET         | /solar-bodies/new      | New     | Shows a form to create a solar body         |
| POST        | /solar-bodies          | Create  | Creates a new solar body                    |
| GET         | /solar-bodies/:id      | Show    | Displays a specific solar body by its ID    |
| GET         | /solar-bodies/:id/edit | Edit    | Shows a form to edit an existing solar body |
| PUT         | /solar-bodies/:id      | Update  | Updates a specific solar body by its ID     |
| DELETE      | /solar-bodies/:id      | Destroy | Deletes a specific solar body by its ID     |

## App Structure

men-stack-crud-app-lab/
├── server.js # Main application entry point
├── models/
│ └── solarBody.js # Mongoose model
├── controllers/
│ └── solarBodies.js # Route handler functions
├── routes/
│ └── solarBodies.js # Express router
├── views/
│ ├── index.ejs # Home page
│ ├── partials/
│ │ └── navbar.ejs # Shared navigation
│ └── solar-bodies/ # Feature-specific views
│ ├── index.ejs # List all solar bodies
│ ├── new.ejs # Create form
│ ├── show.ejs # Detail view
│ └── edit.ejs # Edit form
└── public/
├── styles/
│ └── globals.css # Styled with your existing theme
└── images/ # Planet/celestial body images
