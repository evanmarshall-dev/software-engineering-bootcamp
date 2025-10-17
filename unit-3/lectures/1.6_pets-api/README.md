# Pets Express API

## REST API

| HTTP Method |  Controller | Response | URI            | Use Case         |
| ----------- | ----------: | :------: | :------------- | :--------------- |
| POST        |    `create` |   200    | `/pets`        | Create a pet     |
| GET         |     `index` |   200    | `/pets`        | List pets        |
| GET         |      `show` |   200    | `/pets/:petId` | Get a single pet |
| PUT         |    `update` |   200    | `/pets/:petId` | Update a pet     |
| DELETE      | `deletePet` |   204    | `/pets/:petId` | Delete a pet     |

## Structure

- Keep server for running server and middleware
- Keep models for Mongoose schemas
- Keep controllers for request handling

### CREATE - Create route

In this section, we will make a new route to create a new pet. This route will be a `POST` request to `/pets`, and will return a JSON response with the created pet.

We will be following these specs when building the route:

- CRUD Action: CREATE
- Method: `POST`
- Path: `/pets`
- Response: JSON
- Success Status Code: `201` Created
- Success Response Body: A new Pet object
- Error Status Code: `500` Internal Server Error
- Error Response Body: A JSON object with an `err` key and a message describing the error

### READ - Index Route

In this section, we will create a new route to find all pets. This route will be a GET request to /pets, and will return a JSON response with all the pets in the database.

We will be following these specs when building the route:

CRUD Action: READ
Method: GET
Path: /pets
Response: JSON
Success Status Code: 200 Ok
Success Response Body: An array of all the pets in the database named pets. The array will be empty if there are no pets in the database.
Error Status Code: 500 Internal Server Error
Error Response Body: A JSON object with an err key and a message describing the error.

### READ - Show Route

In this section, we will create a show route to find a single pet. This route will be a GET request to /pets/:petId, returning a JSON response with a single pet from the database.

We will be following these specs when building the route:

CRUD Action: READ
Method: GET
Path: /pets/:petId
Response: JSON
Success Status Code: 200 Ok
Success Response Body: A JSON object with the pet that matches the petId parameter.
Error Status Code: 404 Not Found 500 Internal Server Error
Error Response Body: A JSON object with an err key and a message describing the error.

### DELETE - Delete Route

In this section, we will create a new route to delete a single pet. This route will be a DELETE request to /pets/:petId, returning a JSON response with the deleted pet.

We will be following these specs when building the route:

CRUD Action: DELETE
Method: DELETE
Path: /pets/:petId
Response: JSON
Success Status Code: 200 Ok
Success Response Body: A JSON object with the deleted pet.
Error Status Code: 404 Note Found 500 Internal Server Error
Error Response Body: A JSON object with an err key and a message describing the error.

### UPDATE - Update Route

In this section, we will create a new route to update a single pet. This route will be a PUT request to /pets/:petId, and will return a JSON response with the updated pet.

We will be following these specs when building the route:

CRUD Action: UPDATE
Method: PUT
Path: /pets/:petId
Response: JSON
Success Status Code: 200 Ok
Success Response Body: A JSON object with the updated pet.
Error Status Code: 404 Not Found 500 Internal Server Error
Error Response Body: A JSON object with an err key and a message describing the error.

## Cross-Origin Resource Sharing (CORS)

Let’s journey back in time when the internet was young. Websites were static and the only way to interact with them was to click on links. But as the internet grew, so did the need for more dynamic and interactive websites. This led to the creation of the XMLHttpRequest object, which allowed websites to make requests to servers without having to reload the page. This was the birth of AJAX (Asynchronous JavaScript and XML), and it was the beginning of the modern web.

As AJAX became popular, allowing web pages to request data asynchronously, there was a need for guidelines on how websites interact with each other. This led to the development of CORS, or Cross-Origin Resource Sharing. CORS is a security mechanism that controls how web applications on one domain can interact with resources located on another domain. It provides a set of rules that servers can apply to either allow or deny access to their resources based on the origin of the request.

### Why CORS matters

By default, browsers block HTTP requests across different domains for security reasons. This means, for example, if your web application tries to request data from a domain other than its own, the browser will deny that request to protect against potential security threats.

CORS provides a way to bypass this restriction. It allows servers to specify which domains are permitted to access their resources. This is managed by adding a special header to the responses sent from the server to the client, known as Access-Control-Allow-Origin. This header tells the browser which domains are allowed to interact with the server, ensuring that only authorized domains can make requests.

### Implement CORS in Express

Install the CORS middleware package:

```bash
pnpm i cors
```

The way we implement CORS in our application is by adding it as a middleware to our server file:

```javascript
// Other imports above
const cors = require("cors");

const petRouter = require("./controllers/pets.js");

app.use(cors());
// All other server code below
```

If we leave the cors() function empty, it will allow all domains to access our resources. This is fine for development, but in production we will want to specify which domains are allowed to access our resources. We can do this by passing an options object to the cors() function. This object will have a origin key with a value of the domain we want to allow. We can also pass in an array of domains to allow multiple domains to access our resources.

```javascript
// Other imports above
const cors = require("cors");

const petRouter = require("./controllers/pets.js");

app.use(cors({ origin: "http://localhost:5173" }));
// All other server code below
```
