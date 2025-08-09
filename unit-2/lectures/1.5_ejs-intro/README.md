# Intro to Embedded JavaScript (EJS)

## Module: EJS Fundamentals

### Initial Setup

1. Setup basic Express app setup.
2. Create a required `views` folder with `home.ejs`.
3. Back in `server.js` instead of `res.send("Hello, EJS!");` use `res.render("home");`. Use the **render** method every time we use a template engine.

### EJS Syntaxes

- `<%= %>`: Output the value of a variable (HTML escaped)
- `<%- %>`: Output the value of a variable (unescaped)
- `<% %>`: Execute JavaScript code

Partials are for constant or global sections/components in you project.
