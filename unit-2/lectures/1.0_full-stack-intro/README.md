# Lecture: Intro to Full Stack Development

## Module: Intro

**Full-stack** development deals with building and managing **client side** (front-end) and **server side** (back-end (server and databases)) of web applications.

### What is the Front-end

What the user _sees_ and _interacts_ with in the browser (i.e. Layout, design, and interactivity). Uses HTML, CSS, and JavaScript for UI.

### What is the Back-end

Behind the scenes managing the **server** (host) as well as the app's **data** and **logic**. Using server side programming to _process_ **data** and send appropriate _responses_ to the front-end. Common languages are Node.js, Ruby on Rails, and Python as well as **databases** such as mySQL, Postgres, and MongoDB.

> [!NOTE]
> Code running in the back-end is more controlled than the front-end, which leads to better **security** (Better for user authentication and database handling). Back-end apps can also manage many front-end apps.

## Module: Client-Server Architecture

In web development instead of client and server describing physical devices they describe the functions of different software processes. The _interaction_ between a client and server is **fundamental**.

### Client Software

Responsible for making _requests_ for different services (i.e. Browsing a website the browser is the client fetching data from the website).

### Server Software

Designed to _respond_ to the requests from the client. When the browser makes a request it is usually handled by server software (i.e. Retrieving webpages, processing data, or performing tasks).

> [!NOTE]
> Understanding the **software** capabilities and relationship of server-client interaction will assist with **debugging** as well as how to construct well **architected** apps.

## Module: Full-stack Web App Building Blocks

1. Front-end
2. Back-end
3. Database

### 1. Front-end

The part the user interacts with directly (i.e. Clicking a link or filling out a form). All interactions will result in a _request_ being sent from the front-end to the back-end.

We rely of HTML (Structure), CSS (Styles), and JavaScript (Interactivity) for the front-end.

#### Popular Frameworks and Libraries for the Front-end

- Angular
- Vue.js
- React
- jQuery

### 2. Back-end

Not accessed by the user. Most of the app functionality occurs here (i.e. Process user requests or apply business logic or exchange data with a database). Its main job is to respond to a user's request with a response.

#### Key Responsibilities of the Back-end

- Ensures security for sensitive data and transactions.
- Handle user authentication and database communication.
- Manages **business logic** (i.e. Calculating costs, applying discounts, and updating inventory).

#### Popular Back-end coding languages

- Node.js (JavaScript)
- Python
- Ruby
- Java
- C#
- PHP

#### Popular Frameworks and Libraries for the Back-end

- Express.js (JavaScript)
- Flask (Python)
- Java Spring (Java)
- ASP.NET Core (C#)

### 3. Database

Where we store info related to our app such as text, numbers, booleans. The database _catalogues_, _stores_, and _retrieves_ the above info.

#### Types of Databases

- **_Relational Databases_**: Store data within tables (rows and columns). Each row represents a single **record** and each column represents an **attribute** of that record. These databases (db) are best for high volume of db transactions, such as banking (i.e. **MySQL**, **PostreSQL**, and **Oracle**).
- **_Non-Relational Databases_**: Store data via documents, key-value pairs, and graphs. These databases are best for large amounts of unstructured data or complex relationships between data (i.e. **MongoDB**, **Redis**, and **Elasticsearch**).

### How They All Come Together

1. Front-end provides user with **UI** and handles input to send **requests** to the back-end.
2. Back-end **receives** said requests from the front-end, performs _create_, _read_, _update_, and _delete_ (**CRUD**) operations on the db, and sends **response** back to the front-end.
3. The database then _stores_ data and _tracks_ relationship between pieces of data.

## Module: Frameworks and Libraries

Frameworks and libraries _simplify_ complex tasks by **abstracting** (Hiding complexity and details irrelevant to solving a problem) them for dev productivity and dev speed. They offer _tested solutions_ due to being used by multiple devs which makes them more _reliable_. Also, they provide community _support_ and documentation.

### Framework

Provides **structure** for app. Offers a set of _rules/conventions_ to standardize development. Controls **consistency** in directory structure and methods they use to function.

**_Opinionated_** frameworks prefers conventions over config and allows for _rapid_ development, _consistency_, _best practices_ and _debugging_ (i.e. Rails, Mongoose).

**_Unopinionated_** frameworks prefers config over convention and are _lightweight_, _flexible_ and easier to _customize_ (i.e. Express).

> [!NOTE]
> Trade-offs: Devs must learn and follow a rigid structure so a higher learning curve, but different devs will create consistent work with an **opinionated framework**. An **unopinionated framework** allow for more customization, but this means more decisions needed which may slow down dev time.

### Library

Offers specific functionality to integrate into a project. Handle specific _tasks_ and **do not** enforce overall app structure/behaviour like a framework does (For working with dates, formatting strings, and presenting UI elements).

## Module: Common Stacks

MEN, MERN, and Python/Django/Postgres Stacks are examples.

### MEN Stack

**MongoDB**, **Express.js**, and **Node.js**.

MongoDB is a **non-relational** db, Express.js is an **unopinionated** framework that streamlines builds, and Node.js allows JS execution outside the browser (Server side scripting).

Node and Express allow for **high scalability** for numerous users/requests and the learning curve is not as steep for JS devs.

### MERN Stack

**MongoDB**, **Express.js**, **React**, and **Node.js**.

Builds on tech of the MEN stack by adding React for UI. React has component-based architecture to help with _reusability_, _maintainability_, and _responsive_ UI.

### Python, Django, and Postgres Stack

Python tends to be more _readable_ and _simple_. Django is **opinionated** Python framework, and Postgres is a widely used, open sourced **relational** database management system.
