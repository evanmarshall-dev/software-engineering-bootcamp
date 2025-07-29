# Lecture: Intro to Full Stack Development

## Module: Server/Client Relationship

- The computer is your client and it is what consumes the content. Computer makes request for content.
- The server serves content instead of consuming it. It responds to request and send to client.
- Back end takes the raw data and package into...
- Router receives the request...

> [!NOTE]
> Everything is a client and a server.

### Framework

Provides structure for app. Offers a set of rules/conventions to standardize development. Controls consistency.

**_Opinionated_** frameworks prefers conventions over config and allows for _rapid_ development, consistency, best practices and debugging (i.e. Rails, Mongoose).

**_Unopinionated_** frameworks are lightweight, flexible and easier to customize (i.e. Express).

> [!NOTE]
> Usually opinionated frameworks tend to have much more thorough documentation.

### Library

Offers specific functionality to integrate into a project. Handle specific tasks and do not enforce overall app structure/behaviour like a framework does.

## Module: Common Stacks

### MEN Stack

**MongoDB**, **Express**, and **Node.js**. **MongoDB** is the most common database (db) for startups because it is _unopinionated_ and allows you to change it on the fly because it uses **documents** (BSON Objects) versus tables that need to be exactly the same like **SQL**. However SQL databases are more performant so lots of companies will switch from **MongoDB** after a long time and stability to **SQL**.

### Python, Django, and Postgres Stack

**Python** tends to be more _readable_ and _simple_. **Django** is opinionated **Python** framework, but it is not preferred for scalability.
