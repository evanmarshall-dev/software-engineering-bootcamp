# MEN Stack Session Authentication

## Real applications of protected routes

Protected routes are common to nearly all web applications, and serve a number of different functions:

1. **Securing personal content**: These routes ensure that private content, such as user profile pages, is only accessible to the owner. It prevents unauthorized access to someone else’s personal information.

2. **Controlling resources**: Protected routes are used to restrict the creation, updating, and deletion of resources on the website to users who are authenticated. This means only logged-in users can perform these actions, safeguarding the site from unauthorized changes.

3. **Managing content ownership**: They enable the application to restrict certain actions, like editing or deleting a post, exclusively to the user who created that post. This helps maintain content integrity and ownership rights within the application.

Many functions of protected routes are related to authorization in addition to authentication, which sound very similar, but have a key difference:

**Authentication** confirms that you are who you say you are. The app recognizes you.

**Authorization** confirms that you are allowed to do something specific. The app lets you do something because of who you are.

Simply put, being a signed-in user doesn’t give you total power over everything in an application, and we rely on the logic of protected routes to allow users to manage their specific resources, without letting them alter anyone else’s.

## Recap

### Modularization of the controllers

We have some great news for you: once you’ve written authentication once, you can re-use it for all your future express applications. This is why we separated our routes into a new `controllers` directory that you can easily copy into future projects. While we didn’t create a second model in this application, you can imagine that future applications will start with a User as the very first model, then add more models for the resources users are allowed to create and manage in the app. Nearly all of the app ideas swimming around in your head are apps that incorporate users, authentication, and all the concepts that go with them, so it’s a great template to kickstart your next express application.

### Session-based authentication

For this application, we chose session-based authentication as our strategy. This relies on cookies, stored in both the browser and the server’s internal memory, and encrypted using a `SESSION_SECRET` environment variable. This cookie gets attached to all future requests coming from users of our site, and our server will check to confirm that the user hasn’t added anything to the cookie that doesn’t match the version stored in the server.

### Encrypted passwords

One very, very important thing we did was to encrypt the user’s passwords before storing them in the database. If you remember only one thing from this experience, make it this: never store passwords in plain-text.

In line with best practices for security-related programming, we’ve chosen to use the industry-standard `bcrypt` library for our cryptographic needs. This approach teaches an important lesson: whenever possible, it’s wise to rely on tools that are well-established and trusted in the industry. These tools have been rigorously tested and are widely used by major players in the field. Remember, when it comes to security, especially cryptography, it’s not advisable to create your own solutions from scratch. Trust in the proven and tested methods!

### User model constraints

We used a simple `if` statement to determine whether a `username` was already taken, and this should work for our demo applications. For production-ready applications, however, you’d want a bit more validation than that. For example, in our application, `spongebob` and `sPoNgEbOb` would be two totally separate usernames thanks to the difference in capitalization. Not great!

In most applications, a common practice is to store the `username` in the database in all lowercase. This approach ensures consistency and avoids issues with case-sensitive login processes. Alongside this, applications often include a separate `display name` field. This field allows users the flexibility to customize their name’s capitalization and style as they wish. It’s a user-friendly feature that lets individuals express themselves while keeping the underlying login mechanism straightforward and reliable. Many social media tags work this way: you can change your display name daily if you like, but the actual `username` handle remains static.

There’s also the concept of using emails to validate accounts before permitting them to do certain things in the app. This `email` field would also have to be unique to each user model, and it could be used to send a special link through email to new users requiring them to validate before continuing in the app. We would also rely on this email when implementing functionality for resetting a forgotten password, which brings with it even further programming
challenges.

### Conclusion

For now, username validations, email verification, and resetting passwords are all well beyond the scope of our introduction to authentication, but we want to give you an idea of the many authentication-related tasks that a mature, production-ready application needs to consider. You have enough here in our authentication template to create a great portfolio-worthy demo app, but not quite enough to start signing up users who expect your app to work like more mature applications out in the real world.

Fortunately, since these needs are mostly the same for all applications, there are plenty of ready-made libraries and solutions out there competing for developer adoption. For express in particular, `passport.js` is a common authentication solution that’s relatively easy to plug in, and allows you to add social authentication such as signing in with Google accounts.

## Make the `User` Session Available to All Views

### The magic of `res.locals`

In our web application, it’s not just the protected routes that might need access to the signed-in user’s information. Consider a common feature like a navbar, which typically changes its display based on the user’s authentication status – showing a ‘sign-in’ button for guests and a ‘sign-out’ button for logged-in users. To make this work, **every template** in our application needs access to the user information stored in the session.

Now, we could add the user information to the context object of every `res.render` call throughout the app. However, this approach is not very efficient or maintainable. It’s not very DRY and prone to errors, especially in a large application where you might miss adding this information in some routes.

A more elegant solution in Express is to use the `res.locals` object. This object is part of every request in Express and is specifically designed for situations like ours. Any property added to `res.locals` becomes automatically available to all rendered templates. This means we can set user information once in `res.locals`, and it will be accessible in every template without the need to repeatedly pass it in the render function.

**For example**:

```javascript
res.locals.magicNumber = 13;
res.render("/some-template.ejs");
// In this example, magicNumber is now available in some-template.ejs.
// Similarly, we can set the signed-in user’s information in res.locals to make it universally accessible across all templates, simplifying our code and reducing the risk of inconsistencies.
```
