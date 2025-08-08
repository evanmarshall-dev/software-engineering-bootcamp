# RESTful Routing & Express API Architecture

Mapping HTTP methods to CRUD (_create_:`POST`, _read_:`GET`, _update_:`PUT`/`PATCH`, and _destroy_:`DELETE`) operations, design RESTful route charts, and implement...

| CRUD operation | HTTP Method     | Purpose                                            |
| :------------- | :-------------- | :------------------------------------------------- |
| _Create_       | `POST`          | Creates a new resource.                            |
| _Read_         | `GET`           | Retrieves a resource or a collection of resources. |
| _Update_       | `PUT` / `PATCH` | Updates an existing resource.                      |
| _Delete_       | `DELETE`        | Removes an existing resource.                      |

## Module: REST Fundamentals

**_REST_**: Representational State Transfer

An architectural style for designing networked apps.

- Resources are identified via URLs.
- Resources are manipulated using standard HTTP methods (i.e. `GET`, `PUT`/`PATCH`, `POST`, `DELETE`).
- Stateless client-server communication. Meaning, the server does not remember anything from the previous request on the same client (i.e. Powerful with authentication).
- Uniform interface with consistent conventions.

### Authentication

1. Client logs in with email/username and password.
2. Return a **token** and store on front-end in browser with an expiration time.
3. Now when client makes another _request_ it includes above token.
4. Token/request picked up by server and passed to auth **middleware** which verifies if token is valid (Verified because token contains user info).
5. Find the user.
6. Return user.
7. Add user to the _request_.
8. Continue to the next function (i.e. What the user intended to do: Get profile or edit).

## Module: RESTful Routing

### INDUCES

Index, New, Delete, Update, Create, Edit, and Show are the 7 RESTful Routes. Important to remember above 7, CRUD and HTTP VERBS.

### The 7 Standard RESTful routes help use manage **resources**

You need all 7 to complete the CRUD operations.

| HTTP Method     | Endpoint          | Route Name | Purpose                                 |
| :-------------- | :---------------- | :--------- | :-------------------------------------- |
| `GET`           | `/blogs`          | _Index_    | Display a list of _all_ blogs.          |
| `GET`           | `/blogs/new`      | _New_      | Display a form to create a new blog.    |
| `POST`          | `/blogs`          | _Create_   | Create a new blog.                      |
| `GET`           | `/blogs/:id`      | _Show_     | Display a _specific_ blog.              |
| `GET`           | `/blogs/:id/edit` | _Edit_     | Display a form to edit a specific blog. |
| `PUT` / `PATCH` | `/blogs/:id`      | _Update_   | Update a specific blog.                 |
| `DELETE`        | `/blogs/:id`      | _Destroy_  | Delete a specific blog.                 |

### REST Matters

- **_Scalability_**: Stateless allows systems to scale horizontally across servers without complex session management.
- **_Interoperability_**: Standard HTTP makes APIs accessible from any programming language or platform.
- **_Separation of Concerns_**: Clients and servers independently, enabling different teams to work on front-ends and back-ends.
- **_Cacheability_**: Responses can be cached to improve performance and reduce server load.

## Module: Resource Relationships

### Embedded Resources

Do not exist outside context of their parent resource (i.e. Blog comments: `/blogs/:id/comments`). If you delete a blog (parent) the comments get deleted, too. Often stored within the parent document (i.e. NoSQL databases). There will be sub-routes on the main resources for your HTTP VERBS and linked to parent resource (i.e. `GET`: `/blogs/:id/comments`).

### Referenced Resource

Exist outside context of their parent resource (i.e. Blog subscribers: `/comments/:subscriberId`). Subscriber exists independently of the blog and can be on several blogs. Unlike embedded resources they will have their own routes as well as routes referencing their parent resource.

### Differences

| Embedded Resource                                                   | Referenced Resource                                                             |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------ |
| Existence is dependent on the parent resource.                      | Exists independently of other resources and loosely coupled to parent.          |
| Its lifecycle is tied to the parent; it's deleted if the parent is. | Has its own lifecycle and can exist even if the associated resource is deleted. |
| Often stored within the parent document itself (e.g., in NoSQL).    | Stored separately and linked via an identifier (e.g., foreign key).             |
| Example: Comments on post                                           | Example: Users and roles                                                        |
| Represents a "has-a" or "part-of" relationship (composition).       | Represents an "associated-with" relationship (association).                     |

## Module: Express.js Implementation
