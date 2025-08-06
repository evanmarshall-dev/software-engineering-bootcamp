# Intro to Express

- Users or client side interface sends _request_ to server.
- Server receives _request_.
- The server will be a `Node.js` server.
- The server will not be built from scratch, but rather it will be built using `Express.js`.
- Express manages the **HTTP server**. It deals with asking for _templates_ (i.e. `JSX`) to send back to user as well as works with the database to receive _data_ (i.e. `Mongoose.js` and `MongoDB`).

> [!WARNING]
> If you run `pnpm init` within the project dir then the default `package.json` will set `main` to `index.js` instead of the file we are using (`server.js`). Make sure you update the `package.json`.

## Module: Build Express Server

- Install express into project dir: `pnpm i express`.
- Go to api docs on [expressjs.com](https://expressjs.com/en/5x/api.html) for up to date info on how to setup Express.

## Module: URL Parameters

URL parameters allow us to make some of our URL path dynamic.
