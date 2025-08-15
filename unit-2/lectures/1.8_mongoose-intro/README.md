# Introduction to Mongoose

## Module: Mongoose Foundations

Mongoose is a popular ODM (Object Document Mapping) library for MongoDB and Node.js. It provides a straightforward way to model your data, enforce schema validation, and interact with your MongoDB database using a more intuitive API.

### Mongoose Workflow

1. User makes request to the server.
2. Server (Node.js) receives request and processes it.
3. Express.js routes the request to the appropriate controller.
4. Controller uses Mongoose to interact with MongoDB.
5. Mongoose performs the requested operation (e.g., create, read, update, delete).
6. Mongoose returns the result to the controller.
7. Controller sends the response back to the user.
8. At the same time as step #4 Express will request an HTML template (EJS) from the views directory.
9. The view is rendered with the data from the controller.
10. The rendered HTML is sent back to the user as the final response.

To start out we will ignore the view rendering process as well as Express process and focus on the Mongoose interactions.

> [!NOTE]
> With MongoDB you have a cluster, the cluster has databases, and each database has collections. Collections are like tables in a relational database, and they contain documents, which are the individual records/resources (i.e. Instances of a post, comment, user, etc.).

Models, Schema, and Collections will come into play when we use Mongoose to interact with our MongoDB database. Mongoose allows us to define models for our data, which are then mapped to the corresponding collections in the database.
