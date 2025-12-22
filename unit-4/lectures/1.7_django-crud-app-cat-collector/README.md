# Intro to Django

## Concepts

### What is Django

Django is by far the most popular Python-based web framework, and its popularity continues to grow thanks to the growth of Python itself.

Django is specifically engineered to develop highly secure web applications rapidly. It provides a rich set of tools and features that streamline the creation of complex, data-driven sites. Django follows the “batteries-included” philosophy, meaning it includes built-in solutions for many of the common challenges in web development, such as user authentication, site maps, and content administration.

These components are designed to work together seamlessly, which allows developers to focus on the unique features of their web applications without worrying about the underlying infrastructure.

### Advantages of Django

- **Object-relational mapper (ORM)**: Django’s ORM provides a high-level abstraction, allowing developers to interact with databases using Python rather than SQL. This enables developers to write database queries using Python code, making it simpler to create, retrieve, update, and delete database entries.
- **Built-in administrative interface**: Django includes a ready-to-use admin interface that allows developers and site administrators to manage database data through a web interface. This powerful tool facilitates quick interactions with databases right out of the box.
- **Comprehensive user authentication**: Its user authentication system handles user accounts, groups, permissions, and cookie-based user sessions. This built-in capability makes it easier to develop secure sites and reduces the amount of code developers need to write.
- **A rich ecosystem of tools and libraries**: Django provides numerous built-in features for common web development needs, such as sending emails, generating RSS feeds, and managing content in various languages.
- **Strong community and documentation**: Django benefits from extensive, well-maintained documentation and a large, active community. This network provides substantial support for troubleshooting, sharing knowledge, and extending the capabilities of your applications through third-party packages.

### Express vs Django

#### Express

Express is characterized as a minimalist framework, offering just enough tools to get started but not much beyond the basics. This approach provides the flexibility to define routes, map controller actions, and render dynamic views according to your project’s needs. The lack of rigid structure means file naming and organization are left largely to the developer’s discretion. When additional functionality is required, it typically involves integrating and configuring middleware or outside libraries. This setup is ideal if you appreciate a “build-it-your-way” philosophy.

#### Django

Transitioning to Django, you’ll encounter a contrastingly different environment. Django is a full-featured framework, designed to include a comprehensive suite of built-in functionalities. It adheres to a strict set of conventions, guiding you on how to structure your code, name your files, and even how to handle database operations. This structured approach is accompanied by numerous helper classes and methods, simplifying tasks that in Express might require additional packages.

## Architecture

### Request/Response Cycle in Django

If you have experience with Express, you’ve learned that interacting with a web application involves a series of HTTP requests and responses:

- User actions like clicking links or submitting forms generate HTTP requests.
- These requests are handled by a server’s routing system, which directs them to the appropriate code.
- The code then executes CRUD operations. Depending on the operation, the server might render dynamic content for ‘Read’ operations or issue redirects for ‘Create’, ‘Update’, or ‘Delete’ operations.

In Django, the HTTP request/response cycle is managed by built-in components, which simplifies much of the setup process. This integration can greatly benefit newcomers to web development or anyone who wants to simplify their application’s infrastructure.

Django adopts the Model-View-Template (MVT) architecture, a variant of the more widely known Model-View-Controller (MVC) architecture. While both architectures aim to separate concerns within an application, Django’s MVT architecture has distinct roles for each component.

![Django MVT](./public/mvt.png)

- **Model**: Defines the data structure. These are Python classes that define the fields and behaviors of the data you’re storing. Django models can interact with a database seamlessly to retrieve, store, update, and delete data.
- **View**: Handles the business logic and is the bridge between models and templates. In Django, views retrieve data from the models and pass it to the templates. Views in Django perform roles similar to controllers in MVC, essentially directing traffic within the application.
- **Template**: Manages the presentation layer. Templates are HTML files that allow Python-like expressions for dynamic content generation. This separation from the actual business logic in views allows for cleaner, more maintainable code.

### MVC vs Django’s MVT

| Concern                   | MVC        | Django MVT |
| ------------------------- | ---------- | ---------- |
| Database access           | Model      | Model      |
| Code mapped to routes     | Controller | View       |
| Rendering of dynamic HTML | View       | Template   |

### Terminology in Django

Django uses unique terminology for its components, which can initially be confusing:

- **Project**: In Django, what you might typically think of as a web application is called a project. This top-level container for your web application houses the configuration and ties everything together.
- **Apps**: What are often considered features or modules in other frameworks are called apps in Django. An app is a web application that does something such as a blog, a database of public records, or a simple poll app. A project can contain multiple apps, which can be reused in different projects.

A Django **_project_** is a complete website with multiple pages, while a Django **_app_** is a web application that does something specific and can be integrated into any project. This modular approach makes Django apps highly reusable. They can migrate from one project to another or be maintained across multiple projects. A Django project can have many apps, and a Django app can belong to multiple projects.

### Django’s routing methodology

Routing is a core aspect of web development, as it determines how a web application responds to a client’s request to a particular endpoint, which is a URL path in the web application.

Frameworks like Express and Ruby on Rails define routes using both HTTP methods (GET, POST, etc.) and URL paths, allowing for different responses based on the method used. Conversely, Django and ASP.NET Core primarily use the URL path to define routes, omitting the HTTP method. This method simplifies routing but may require additional setup to effectively handle multiple HTTP methods for the same URL path.

Django’s routing is managed through a module named `urls.py`, which is found in each app and sometimes at the project level. This module defines the URL patterns (routes) that direct web requests to the correct view functions based on the URL, organizing the routing process across the application.

## App Setup

### Environment Setup

1. Initialize a new virtual environment inside your project directory and install Django: `pipenv install django`. This command will create a new `Pipfile` and `Pipfile.lock` in your project directory, specifying Django as a dependency.
2. Activate the virtual environment: `pipenv shell`. With your virtual environment activated you should see a slight change in your terminal, with the virtual environment folder name listed to the left of your command line prompt.
3. Start a new Django project within your virtual environment: `django-admin startproject <project-name> .`. The `.` here starts this project inside of our current directory, instead of creating a new one.
4. To deactivate the virtual environment when you’re done, simply type: `exit`.

### URLs and Views

In this part of the lesson, we will set up a new Django app within our project, `catcollector`, which will be dedicated to implementing our core functionality— defining routes for collecting cats!

### `INSTALLED_APPS`

Before we get started, let’s take a look at the `INSTALLED_APPS` list in `catcollector/settings.py`.

In Django, the `INSTALLED_APPS` setting plays a crucial role. It tells Django about all the applications that are active for this project. Each app can provide a set of features that can be reused in multiple projects. By default, Django includes several built-in apps that are essential for any web application, such as:

- `django.contrib.admin` — The admin interface, ready to use.
- `django.contrib.auth` — An authentication system.
- `django.contrib.contenttypes` — A framework for content types.
- `django.contrib.sessions` — A session framework.
- `django.contrib.messages` — A messaging framework.
- `django.contrib.staticfiles` — A framework to manage static files.

These apps add functionalities like the user interface for the admin section, user authentication, and managing static files which are essential components of most web applications.

### Creating Main App

To tailor our `catcollector` project for its specific purpose, we need to create our own app that handles our specific needs—collecting cats. It’s a good practice to give your app a descriptive, yet general name. In this case, we’ll simply name our app `main_app`: `python3 manage.py startapp main_app`.

This command initializes a new Django app with the necessary files and directory structure. You’ll now find a `main_app` folder within the top-level project folder, set up as a Python module.​

Let’s include or “register” it as part of the `catcollector` project by adding it to the `INSTALLED_APPS` in `catcollector/settings.py`:

```python
INSTALLED_APPS = [
    # add main_app here
    'main_app',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]
```

Adding `main_app` to this list informs Django that it should be included as a part of the project setup, ensuring it integrates with Django’s other core functionalities, like the database and URL dispatcher.

### Run the Server

After setting up our new app, `main_app`, we need to verify that everything is connected properly by running the Django development server. However, before running the server, make sure you are in the project’s root directory where the `manage.py` file is located: `python3 manage.py runserver`.

### Migrating

Now let’s test our database connection by getting rid of the unapplied migration message: `python3 manage.py migrate`. The `migrate` command is used to update the database schema over time as the application evolves.

### Defining Routes - URLs

In web development, as you might recall from working with Express, a route is essential for directing HTTP requests from a browser to the corresponding server-side code. Django handles routes a bit differently:

- It matches the URL (path) of each request **only**, regardless of the HTTP method (like GET or POST).

<h2 id="understanding-django-url-configuration">Understanding Django URL configuration</h2>

<p>In Django, routes are defined in <em>URL configuration</em> modules, typically named <code>urls.py</code>.</p>

<p>While you could add all your routes to the project’s main <code>urls.py</code> (located in <code>catcollector/urls.py</code>), it’s a best practice for each app to manage its own routes and then include those in the project’s URLconf. This makes your app modular and easier to maintain.</p>

<p>Let’s set up the URLconf for main app together:</p>

<ol>
  <li>
    <p>Create a new <code>urls.py</code> in your <code>main_app</code> directory:</p>

    <pre><code class="language-bash">touch main_app/urls.py

</code></pre>

  </li>
  <li>
    <p>Open the <code>catcollector/urls.py</code> file and modify it to include the <code>main_app</code>’s URLs.</p>

    <p>First, import the <code>include</code> function:</p>

    <pre><code class="language-python"># catcollector/urls.py

from django.contrib import admin
from django.urls import path, include
</code></pre>

    <p>Then, add a new line in the <code>urlpatterns</code> list to include <code>main_app</code>’s URLs:</p>

    <pre><code class="language-python">urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_app.urls')), # Mounts main_app's routes at the root URL

]
</code></pre>

    <p>Including <code>main_app/urls.py</code> allows you to manage all routes related to this app separately, keeping your code organized.</p>

    <p>You can now close <code>catcollector/urls.py</code> since all routes we define from this point forward will be defined within <code>main_app/urls.py</code>.</p>

  </li>
  <li>
    <p>Now, let’s define the initial setup inside <code>main_app/urls.py</code>:</p>

    <pre><code class="language-python">from django.urls import path

from . import views # Import views to connect routes to view functions

urlpatterns = [
# Routes will be added here
]
</code></pre>

  </li>
</ol>

<p>In this file, you’ll define all the routes for <code>main_app</code>. The <code>urlpatterns</code> list is where you specify each route, similar to how routes are defined and grouped in controllers in Express.</p>

<h2 id="define-main_apps-home-page-url--view">Define <code>main_app</code>’s home page URL &amp; view</h2>

<p>With the setup done, we’re ready to define our first route to display the Home page.</p>

<p>In <code>main_app/urls.py</code>:</p>

<pre><code class="language-python">urlpatterns = [
    path('', views.home, name='home'),
]
</code></pre>

<p>The above code defines a root path using an <strong>empty string</strong> and maps it to the <code>view.home</code> view function that does not exist yet - making the server unhappy. We’ll remedy this with a new view in the next step.</p>

<p>The <code>name='home'</code> kwarg is technically optional but will come in handy for referencing the URL in other parts of the app, especially from within templates, so we will always use it.</p>

<p>The Home page route has been defined! On to the view…</p>

<h2 id="defining-view-functions">Defining view functions</h2>

<blockquote>
  <p>❓ <strong>What is the equivalent to a Django View Function in Express?</strong></p>
</blockquote>

<p>In Django, a view function is similar to what you may know as a “route handler” in Express. It’s where you define the logic that gets executed in response to a specific HTTP request.</p>

<h3 id="implementing-a-home-view">Implementing a home view</h3>

<p>For our cat-collector application, let’s start by creating a basic view function that will serve as the response for the home page. We’ll define this function in <code>main_app/views.py</code>.</p>

<pre><code class="language-python"># main_app/views.py

from django.shortcuts import render

# Import HttpResponse to send text-based responses
from django.http import HttpResponse

# Define the home view function
def home(request):
    # Send a simple HTML response
    return HttpResponse('&lt;h1&gt;Hello ᓚᘏᗢ&lt;/h1&gt;')
</code></pre>

<h3 id="requests-and-responses-in-django-routes">Requests and responses in Django routes</h3>

<ul>
  <li><strong>Handling Requests</strong>: The <code>home</code> function accepts a single parameter, <code>request</code>, which is analogous to the <code>req</code> object in Express. This <code>request</code> object contains metadata about the request (like headers, method, etc.).</li>
  <li><strong>Importing HttpResponse</strong>: Notice that we import <code>HttpResponse</code> from <code>django.http</code>. This function is used to construct an HTTP response to send back to the browser, similar to <code>res.send()</code> in Express.</li>
</ul>

<h2 id="viewing-your-new-home-page">Viewing your new home page</h2>

<p>Now, when you navigate to <a href="http://127.0.0.1:8000/">http://127.0.0.1:8000/</a> in your browser, you will see a simple greeting message, “<code>&lt;h1&gt;Hello ᓚᘏᗢ&lt;/h1&gt;</code>”, instead of the default Django rocket page. This is your view function responding to the HTTP request.</p>

<blockquote>
  <p>💡 <strong>Understanding HttpResponse</strong>: The <code>HttpResponse</code> object we used is the simplest way to return content in Django. As we progress, we will explore more sophisticated methods such as rendering templates which allow for more dynamic and interactive web pages.</p>
</blockquote>

<h2 id="-you-do-define-another-url-and-view-function">🎓 You do: Define another URL and view function</h2>

<p>In this activity, you’ll add an “About” page to your Django application by defining a new route and corresponding view function.</p>

<ol>
  <li>
    <p><strong>Define a Route</strong>: Create a new route in your <code>urls.py</code> file. The path for this route should be <code>about/</code>. This includes a trailing slash, which is a Django best practice for defining URL paths. Avoid adding a leading slash at the beginning of the path as this is handled by Django itself.</p>
  </li>
  <li>
    <p><strong>Name the Route</strong>: Assign the name <code>'about'</code> to this route. This name will be used for referencing the route in your Django templates and views.</p>
  </li>
  <li>
    <p><strong>Map to a View</strong>: Connect this route to a view function. In your <code>urls.py</code>, map the path to a view called <code>views.about</code>. This means you will need a function named <code>about</code> in your views file.</p>
  </li>
  <li>
    <p><strong>Create the View Function</strong>: Open your <code>views.py</code> file and define a new function named <code>about</code>. This function should return an HTTP response that includes the text <code>&lt;h1&gt;About the CatCollector&lt;/h1&gt;</code>. Make sure to import <code>HttpResponse</code> from <code>django.http</code> if it’s not already imported.</p>
  </li>
</ol>

<blockquote>
  <p>Note: Define the route exactly as written- <code>about/</code> (with a trailing slash instead of a leading slash). This is the convention for Django. If you add a leading slash you will be presented with this warning:</p>

  <p><img src="/modular-curriculum-all-courses/django-crud-app-cat-collector/django-urls-and-views/assets/url-warning.png" alt="warning" /></p>
</blockquote>

<p>Test your work by browsing to <a href="http://127.0.0.1:8000/about">http://127.0.0.1:8000/about</a></p>
