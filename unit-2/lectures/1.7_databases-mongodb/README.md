# Introduction to Databases

## Module: Foundations

- Database used will be MongoDB.
- Atlas is a cloud provider made by the same creators.
- Databases store data and not a local machine so we will have to make async request to mongodb-atlas.
- Our Node.js app will utilize Express to make requests to the mongodb-atlas API.
- We will need to utilize some error handling.
- Mongoose.js lives inside our node app and takes the data from db and use in JS objects.
- Atlas handles data integrity and provides features like backups, monitoring, and scaling.

## Module: Types of Databases and Storage Types

There are relational databases (i.e. MySQL, SQLite, PostgreSQL) and non-relational databases (i.e. MongoDB). In relational dbs data is stored in tables with predefined schemas, while in non-relational dbs data is stored in flexible, schema-less formats like JSON.

### Relational Database Example

Below is a simple relational schema example for an e-commerce style app. The `orders.user_id` column is a foreign key referencing `users.id`, forming a one-to-many relationship (one user can have many orders).

Users table

| id (PK) | name         | email (UNIQUE)      | created_at (timestamp) |
| ------- | ------------ | ------------------- | ---------------------- |
| 1       | Ada Lovelace | `ada@example.com`   | 2025-08-01 12:00:00    |
| 2       | Grace Hopper | `grace@example.com` | 2025-08-02 09:30:00    |

Key points:

- Primary Key (PK) uniquely identifies each row (`id`).
- Foreign Key (FK) references a primary key in another table (`orders.user_id`).
- One-to-Many: A single user can have multiple orders.
- Constraints (e.g., UNIQUE on `email`) help maintain data integrity.

### Non-Relational (NoSQL) Example

In a non-relational database like MongoDB, data is stored in flexible, JSON-like documents. Here's how the same e-commerce data might be represented:

```json
// Users Collection
[
  {
    "id": 1,
    "name": "Ada Lovelace",
    "email": "ada@example.com",
    "created_at": "2025-08-01T12:00:00Z"
  },
  {
    "id": 2,
    "name": "Grace Hopper",
    "email": "grace@example.com",
    "created_at": "2025-08-02T09:30:00Z"
  }
]
```

Key points:

- No predefined schema: Each document can have a different structure.
- Data is stored as key-value pairs in a flexible format.
- Relationships can be represented using embedded documents or references.

## Module: Environment Variables

Environment variables are used to store sensitive information like API keys, database connection strings, and other configuration settings. They help keep your code clean and secure by separating configuration from code.

For example:

```bash
# .env file
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
API_KEY=your_api_key_here
API_SECRET=your_api_secret_here
```
