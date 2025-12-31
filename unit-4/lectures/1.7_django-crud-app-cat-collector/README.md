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

  <p><img src="./public/url-warning.png" alt="warning" /></p>
</blockquote>

<p>Test your work by browsing to <a href="http://127.0.0.1:8000/about">http://127.0.0.1:8000/about</a></p>

<main class="container-lg px-3 mt-4 mb-6 markdown-body"><h1>
  <span class="headline">Cat Collector</span>
  <span class="subhead">Django Templates</span>
</h1>

<!--  -->

<p><strong>Learning objective:</strong> By the end of this lesson, students will be able to use Django’s Template Language (DTL) to create, manage, and apply dynamic HTML templates.</p>

<h2 id="using-django-templates">Using Django templates</h2>

<p>In the previous section, we learned how to respond to HTTP requests using Django’s <code>HttpResponse()</code> to send back HTML directly as strings, similar to how you might use <code>res.send()</code> in Express. Now, we’re going to step up our approach by using templates, which allow for more dynamic HTML content.</p>

<h3 id="understanding-djangos-templating-engines">Understanding Django’s templating engines</h3>

<p>Django supports multiple templating engines for rendering HTML:</p>

<ul>
  <li><strong>Django Template Language (DTL)</strong>: This is Django’s own templating engine, designed to be easy to use and secure. DTL is highly integrated with Django and will be our primary tool in this course.</li>
  <li><strong>Jinja2</strong>: This is a popular templating engine for Python, known for its speed and flexibility. Jinja2 is inspired by DTL and can be used in future Django projects if you feel like exploring!</li>
</ul>

<p>For our purposes, we’ll stick with DTL, which is pre-configured in all Django projects and offers a robust set of features for typical web development tasks.</p>

<h3 id="setting-up-templates">Setting up templates</h3>

<p>Django looks for HTML templates in a specific directory structure within each app. To use templates, we need to first set up this structure in our project.</p>

<ol>
  <li>
    <p><strong>Create a Templates Directory</strong>: Each Django app should have its own <code>templates</code> directory where all its templates will be stored. This keeps your project organized and makes templates easy to find.</p>

    <p>Open your terminal and create a <code>templates</code> directory inside your <code>main_app</code> directory:</p>

    <pre><code class="language-bash">mkdir main_app/templates

</code></pre>

  </li>
</ol>

<p>This setup allows Django to automatically find and use templates stored in this directory when rendering responses. By organizing templates this way, you ensure that each component of your application can manage its own presentation layer independently, enhancing modularity and maintainability.</p>

<h3 id="create-an-abouthtml-template">Create an <code>about.html</code> Template</h3>

<p>Let’s start with a simple template for the About page.</p>

<ol>
  <li>In the terminal, create the template file:</li>
</ol>

<pre><code class="language-bash">touch main_app/templates/about.html
</code></pre>

<p>When creating templates in Django, ensure that your template files have a <code>.html</code> file extension. This is standard for HTML files, but when used in Django, these templates can include specific Django Template Language (DTL) syntax that Django will process.</p>

<blockquote>
  <p>To ensure that your development environment recognizes and properly highlights DTL syntax within these <code>.html</code> files, it is recommended to install the Django extension for Visual Studio Code. This extension enhances syntax highlighting and provides IntelliSense for template tags and filters, improving your coding efficiency. Install the <a href="https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django"><strong>Django extension</strong></a> by following the link and clicking “Install”.</p>
</blockquote>

<ol>
  <li>Open <code>about.html</code> and add the boilerplate (<code>! + tab</code>) and update the <code>&lt;title&gt;</code>:</li>
</ol>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
    &lt;title&gt;Cat Collector&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;&lt;/body&gt;
&lt;/html&gt;
</code></pre>

<ol>
  <li>Add a bit of custom markup within the <code>&lt;body&gt;</code>:</li>
</ol>

<pre><code class="language-html">&lt;h1&gt;About the Cat Collector&lt;/h1&gt;
</code></pre>

<ol>
  <li>Now update the <code>about</code> view in <code>views.py</code> to <code>render</code> the <code>about.html</code> template instead of sending a string response:</li>
</ol>

<pre><code class="language-python"># main_app/views.py

def about(request):
    return render(request, 'about.html')
</code></pre>

<p>The <code>render()</code> shortcut in Django is similar to Express’ <code>res.render()</code>, except for the positional <code>request</code> arg. Also, the <code>.html</code> extension is required. For more on <code>render()</code>, check out more in the <strong><a href="https://docs.djangoproject.com/en/5.1/topics/http/shortcuts/#render">Django docs</a></strong>.</p>

<p>Browse to <a href="http://127.0.0.1:8000/about">http://127.0.0.1:8000/about</a> to see the newly rendered <code>about.html</code> template!</p>

<h1 id="template-inheritance-partials">Template inheritance (Partials)</h1>

<p>Template inheritance is a powerful feature in Django, allowing you to extend base templates and override specific sections with content specific to individual pages. This approach helps maintain the DRY (Don’t Repeat Yourself) principle by avoiding repetitive boilerplate across multiple templates.</p>

<h3 id="how-template-inheritance-works">How Template Inheritance Works</h3>

<ul>
  <li><strong>Extending Templates</strong>: A child template extends a base template using the <code>{% extends %}</code> tag. This setup enables a child template to inherit all the html content from a base template.</li>
  <li><strong>Overriding Blocks</strong>: Within these templates, you can define blocks with <code>{% block %}</code> tags. A child template can override these blocks with its own content, replacing the original content from the base template.</li>
</ul>

<p>This method is similar to using partials in other templating languages like EJS for Express, but offers more flexibility and integration with Django’s overall framework. For more details, refer to the official <strong><a href="https://docs.djangoproject.com/en/5.1/ref/templates/language/#template-inheritance">Django documentation on template inheritance</a></strong>.</p>

<p>Let’s take a look at an example:</p>

<p>Base : <code>base.html</code></p>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;
      {% block title %}
      {% endblock %}
    &lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    {% block body %}
    {% endblock %}
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<p>Child : <code>index.html</code></p>

<pre><code class="language-html">{% extends "base.html" %}
{% block title %}
  Main Page
{% endblock %}
{% block body %}
&lt;h1&gt;Content!&lt;/h1&gt;
{% endblock %}
</code></pre>

<p>This produces the following final code that will be delivered to the client when rendering <code>index.html</code>:</p>

<pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;title&gt;Main Page&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;h1&gt;Content!&lt;/h1&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>

<h2 id="creating-a-basehtml-template">Creating a <code>base.html</code> Template</h2>

<p>The <code>base.html</code> file acts as the foundational layout for your Django application. It includes common elements like the <code>&lt;head&gt;</code>, navigation bar, and optional footer that are shared across multiple pages.</p>

<ol>
  <li>
    <p><strong>Create the Template File</strong>: Begin by creating the <code>base.html</code> file in your project’s template directory:</p>

    <pre><code class="language-bash">touch main_app/templates/base.html

</code></pre>

  </li>
  <li>
    <p><strong>Define the Template Structure</strong>: Populate <code>base.html</code> with a basic HTML boilerplate and Django template blocks. This structure should include meta tags for responsiveness, a placeholder for the favicon, a title, and designated blocks for adding custom head elements and main content in child templates.</p>

    <p>Initial setup for <code>base.html</code>:</p>

    <pre><code class="language-html">&lt;!DOCTYPE html&gt;

&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0" /&gt;
&lt;link rel="shortcut icon" type="image/png" href="" /&gt;
&lt;title&gt;Cat Collector&lt;/title&gt;
{% block head %}
{% endblock %}
&lt;/head&gt;
&lt;body&gt;
&lt;header&gt;
&lt;div class="header-logo-container"&gt;
&lt;a href="/"&gt;
&lt;img src="" alt="The Cat Collector Logo" /&gt;
&lt;/a&gt;
&lt;/div&gt;
&lt;nav&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;
&lt;/nav&gt;
&lt;/header&gt;
&lt;main&gt;
{% block content %}
{% endblock %}
&lt;/main&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre>

  </li>
</ol>

<p>This template will serve as the base for all other pages, allowing you to maintain a consistent look and feel throughout your application while adhering to DRY principles.</p>

<blockquote>
  <p>Currently, the image reference in the template may lead to a 404 error because the image file is not yet added. We will address this and add the correct image in the next section.</p>
</blockquote>

<h2 id="understanding-template-inheritance-and-blocks-in-django">Understanding template inheritance and blocks in Django</h2>

<p>Template inheritance is a key feature in Django that allows you to build a base “skeleton” template containing elements that are common across multiple pages, such as headers, footers, and common scripts.</p>

<p>The <code>base.html</code> template typically includes placeholder blocks that can be overridden by child templates:</p>

<pre><code class="language-html">{% block head %} {% endblock %}
</code></pre>

<p>This block is used to inject custom <code>&lt;head&gt;</code> content such as CSS links or scripts specific to a child template.</p>

<p>and</p>

<pre><code class="language-html">{% block content %} {% endblock %}
</code></pre>

<p>This block is where the main content of each child template is defined.</p>

<h3 id="using-template-tags">Using template tags</h3>

<p>Django’s template system utilizes <strong>template tags</strong>, enclosed within <code>{% %}</code> delimiters, to inject logic and control flow into templates. The <code>block</code> and <code>endblock</code> tags define areas in a template that can be overridden by child templates. Learn more about <strong><a href="https://docs.djangoproject.com/en/5.1/ref/templates/builtins/#ref-templates-builtins-tags">template tags in Django’s documentation</a></strong>.</p>

<h3 id="template-inheritance">Template inheritance</h3>

<p>When a template extends <code>base.html</code>, it inherits its entire structure. The child template can then define or override content within the blocks established in the base template.</p>

<p>Replace the entire contents of <code>about.html</code> with the following code:</p>

<pre><code class="language-html">{% extends 'base.html' %}
{% block content %}
&lt;h1&gt;About the Cat Collector&lt;/h1&gt;
&lt;hr /&gt;
&lt;p class="page-content"&gt;
  I like long romantic walks down the produce aisle. Also, I am currently job
  seeking!
&lt;/p&gt;
{% endblock %}
</code></pre>

<p>If you refresh your browser you will see the new content displayed within the <code>content</code> block of <code>base.html</code>.
<!--  --></p>
</main>

<main class="container-lg px-3 mt-4 mb-6 markdown-body"><h1>
  <span class="headline">Cat Collector</span>
  <span class="subhead">Including Static Files in Templates</span>
</h1>

<!--  -->

<p><strong>Learning objective:</strong> By the end of this lesson, students will be able to link static files like CSS, JavaScript, and images in Django templates using the <code>{% static %}</code> template tag.</p>

<h2 id="static-files-in-templates">Static Files in Templates</h2>

<p>As you know, web apps usually have static files such as <code>.css</code>, <code>.js</code>, image files, etc. If we want our Cat Collector app to look better, we’re going to have to be able to define some custom CSS. Django projects are pre-configured with a <code>'django.contrib.staticfiles'</code> app installed for the purpose of serving static files.</p>

<p>At the bottom of <code>settings.py</code>, there is a <code>STATIC_URL = 'static/'</code> variable that tells Django to look for static files like CSS in a directory called “static”.</p>

<p>Let’s create this directory in our <code>main_app</code>:</p>

<pre><code class="language-bash">mkdir main_app/static
</code></pre>

<p>Next, let’s create a directory within <code>static</code> dedicated to CSS:</p>

<pre><code class="language-bash">mkdir main_app/static/css
</code></pre>

<p>Now let’s create a <code>base.css</code>:</p>

<pre><code class="language-bash">touch main_app/static/css/base.css
</code></pre>

<p>For now, just to make sure that <code>base.css</code> is properly loaded, let’s add an eye catching bit of css:</p>

<pre><code class="language-css">/* static/css/base.css  */

body {
  background-color: red;
}
</code></pre>

<p>Now we need to update <code>base.html</code> by adding the <code>load</code> template tag at the top:</p>

<pre><code class="language-html">{% load static %}

&lt;!DOCTYPE html&gt;
</code></pre>

<blockquote>
  <p>If you forget to include this line, Django will present you with errors like this in the browser:</p>

  <p><img src="./public/static-error.png" alt="Static file error" /></p>
</blockquote>

<p>Finally, add a link to your style sheet in <code>base.html</code>. Place the <code>&lt;link&gt;</code> before the <code>{% block head %}</code> line:</p>

<pre><code class="language-html">&lt;link rel="stylesheet" href="{% static 'css/base.css' %}" /&gt;
</code></pre>

<p>Because we just added a static directory Django isn’t tracking it so we need to restart our server so it starts tracking it. Restart the server now.</p>

<p>Navigate to <a href="http://127.0.0.1:8000/about/">http://127.0.0.1:8000/about/</a> and confirm that your background is red!</p>

<p>Once you have confirmed your css loads properly, you can remove the background color.</p>

<blockquote>
  <p>⚠️ Note: Anytime you add or alter a file to your static directory the additions or changes may not immediately appear on a page refesh. In this case, you may need do a hard refresh of your page with <code>Command</code> + <code>Shift</code> + <code>R</code> on macOS or <code>Ctrl</code> + <code>Shift</code> + <code>R</code> on Windows or Linux.</p>
</blockquote>

<h2 id="image-files">Image files</h2>

<p>We’re going to be using some adorable cat pictures in this app. You can get all of the images we’re going to use from <a href="https://git.generalassemb.ly/modular-curriculum-all-courses/cat-collector-assets">this repo</a>. The following steps will guide you through adding these images to your project by cloning them to your device.</p>

<p>All of these images need to go in a new directory inside <code>static</code> called <code>images</code>.</p>

<p>To add these to your project, first <strong>make sure you are in your project’s root directory</strong>.</p>

<blockquote>
  <p>🚨 Check your terminal and ensure you are in your project’s root directory before running the following command!</p>
</blockquote>

<pre><code class="language-bash">git clone https://git.generalassemb.ly/modular-curriculum-all-courses/cat-collector-assets.git ./main_app/static/images
rm -rf ./main_app/static/images/.git
</code></pre>

<p>Your end file structure must look like this:</p>

<pre><code class="language-plaintext">main_app
- migrations
- static
  - css
  - images
    - cat-cone.svg
    - cat-in-box.svg
    - cat-onigiri.svg
    - cool-cat.svg
    - fish.svg
    - happy-cat.svg
    - header-logo.svg
    - kitty-kabob.svg
    - logotype.svg
    - mouse.svg
    - nerd-cat.svg
    - post.svg
    - sk8r-boi-cat.svg
    - splash.svg
    - string.svg
    - teacup-cat.svg
- templates
  - about.html
  - base.html
</code></pre>

<p>With our image files in place we can add a valid <code>href</code> to the favicon in the <code>head</code> of our <code>base.html</code>:</p>

<pre><code class="language-html">&lt;link
  rel="shortcut icon"
  type="image/png"
  href="{% static 'images/splash.svg' %}"
/&gt;
</code></pre>

<p>And also for the header logo:</p>

<pre><code class="language-html">&lt;img src="{% static 'images/header-logo.svg' %}" alt="The Cat Collector Logo" /&gt;
</code></pre>

<blockquote>
  <p>The <code>static</code> DTL template tag ensures that the correct URL is assigned to the <code>href</code>. You can read more about managing static files in the <strong><a href="https://docs.djangoproject.com/en/5.1/howto/static-files/">Django docs</a></strong>.</p>
</blockquote>

<h3 id="add-base-styles">Add base styles</h3>

<p>We’re going to start adding a lot of CSS to our style files. It might look like there’s too much at first, since we’re including styles for parts of the app we haven’t built yet. Don’t worry, though—we’ll get to all of it as we build out more features. This way, our app will look great and work well on both computers and mobile devices.</p>

<p>Add the following to <code>base.css</code>:</p>

<pre><code class="language-css">/* static/css/base.css  */

html {
  box-sizing: border-box;
}

/* The Universal Selector */
*, /* All elements*/
*::before, /* All ::before pseudo-elements */
*::after {
  /* All ::after pseudo-elements */
  /* height &amp; width will now include border &amp; padding by default
     but can be over-ridden as needed */
  box-sizing: inherit;
}

/* resets font size to be 62.5% of the user preference -
     in most browser configurations this will be 10px */
:root {
  font-size: 62.5%;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  min-height: 100vh;
  --nav-bg: rgba(104, 197, 248, 0.7);
  --nav-bg-ff: rgba(104, 197, 248, 0.9);
  --borders: rgb(36, 116, 248) solid 2px;
  --text-color: rgb(17, 20, 17);
  --link-hover-color: rgb(16, 56, 158);
  --button-bg: rgb(245, 245, 245);
  --button-bg-hover: rgb(226, 226, 226);
  --submit: rgb(26, 128, 0);
  --warn: rgb(255, 102, 0);
  --danger: rgb(220, 20, 30);
  --secondary: rgb(57, 57, 57);
  --card-box-shadow: 5px 5px 6px -1px #aaa;
  --font-xtreme: 4.2rem;
  --font-xxl: 3.6rem;
  --font-xl: 2.4rem;
  --font-l: 1.8rem;
  --font-reg: 1.6rem;
  --card-border-radius: 6px;
}

header {
  width: 100%;
  background: var(--nav-bg-ff); /* rgba(104, 197, 248, .9) */
  border-bottom: var(--borders);
}

nav {
  margin: 10px;
}

ul {
  margin: 0;
  list-style: none;
  padding: 0;
}

main {
  width: 100%;
  padding: 0 10px;
}

h2 {
  font-size: var(--font-xl);
}

nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 600;
  font-size: 16px;
}

nav a:hover {
  color: var(--link-hover-color);
}

nav ul {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

nav li {
  padding: 5px 8px;
}

.header-logo-container {
  margin: auto;
  padding: 10px 20px 0;
  max-width: 500px;
}

.page-header {
  display: flex;
  align-items: center;
  margin: 20px;
}

.btn {
  font-size: var(--font-l);
  padding: 8px 16px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  text-decoration: none;
  background-color: var(--button-bg);
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  margin-right: 10px;
}

.btn:hover {
  background-color: var(--button-bg-hover);
}

.submit {
  color: var(--submit);
  border-color: var(--submit);
}

.secondary {
  color: var(--secondary);
  border-color: var(--secondary);
}

.warn {
  color: var(--warn);
  border-color: var(--warn);
}

.danger {
  color: var(--danger);
  border-color: var(--danger);
}

.page-header h1 {
  font-size: var(--font-xxl);
  margin: 0;
}

.page-header img {
  height: 40px;
  margin-left: 15px;
}

.page-header img:first-of-type {
  margin-left: 20px;
}

.page-content {
  font-size: var(--font-reg);
}

@media only screen and (min-width: 768px) {
  header {
    position: sticky;
    display: flex;
    flex-direction: row;
    top: 0;
    align-items: center;
  }

  main {
    max-width: 1300px;
    min-height: calc(100vh - 53px);
  }

  nav,
  .header-logo-container {
    margin: 10px 0;
    padding: 0 15px;
  }

  /* visual fix to help align logo */
  .header-logo-container {
    padding-top: 3px;
  }

  nav {
    margin-left: auto;
    display: flex;
    justify-content: center;
  }

  nav ul {
    flex-wrap: nowrap;
  }

  .header-logo-container {
    width: 213px;
  }

  .page-header h1 {
    font-size: var(--font-xtreme);
  }

  .page-header img {
    height: 50px;
    margin-left: 20px;
  }

  .page-header img:first-of-type {
    margin-left: 25px;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    header {
      background: var(--nav-bg);
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
    }
  }
}

@media only screen and (min-width: 1024px) {
  main {
    min-height: calc(100vh - 55px);
  }

  header {
    margin: 20px 20px 0 20px;
    width: calc(100vw - 40px);
    max-width: 1920px;
    top: 20px;
    background-color: transparent;
    border-bottom: none;
  }

  nav,
  .header-logo-container {
    margin: 0;
    background: var(--nav-bg-ff);
    border: var(--borders);
    border-radius: 18px;
  }

  nav {
    margin-left: auto;
  }

  .header-logo-container {
    /* visual fix to help align logo */
    padding-top: 6px;
    width: 256px;
    height: 35px;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    header {
      -webkit-backdrop-filter: none;
      backdrop-filter: none;
    }

    nav,
    .header-logo-container {
      background: rgba(104, 197, 248, 0.6);
      -webkit-backdrop-filter: blur(3px);
      backdrop-filter: blur(3px);
    }
  }
}
</code></pre>

<p>Refresh the page to see your changes.</p>

<blockquote>
  <p>⚠️ Note: If the changes don’t appear, you may need to do a hard refresh of your page with <code>Command</code> + <code>Shift</code> + <code>R</code> on macOS or <code>Ctrl</code> + <code>Shift</code> + <code>R</code> on Windows or Linux.</p>
</blockquote>

<p><img src="./public/css-added.png" alt="About page with CSS added" />
<!--  --></p>
</main>

<main class="container-lg px-3 mt-4 mb-6 markdown-body"><h1>
  <span class="headline">Cat Collector</span>
  <span class="subhead">Rendering Data in Templates</span>
</h1>

<!--  -->

<p><strong>Learning objective:</strong> By the end of this lesson, students will be able to render dynamic data within a Django template.</p>

<h2 id="render-data-in-a-template">Render Data in a Template</h2>

<p>To see how data is rendered dynamically using Django templating, we’re going to implement the following user story:</p>

<blockquote>
  <p>As a User, when I click the <strong>All Cats</strong> link, I want to see a page listing all of my cats so that I can see them all one one place.</p>
</blockquote>

<p>For this User story, we need to build an index page to render a list of all our our cats. To make the UI of this page more appealing , we’ll list our cats using “card” style elements in the UI. Each card will have an image placeholder and some brief details about each cat.</p>

<p>Here is a wireframe of the final design:</p>

<p><img src="./public/all-cats-wireframe.png" alt="All Cats Wireframe" /></p>

<h3 id="step-1---identify-the-route">Step 1 - Identify the route</h3>

<p>For this <strong>index</strong> page user story, what would the RESTful route be? <code>/cats</code></p>

<h3 id="step-2---create-the-ui">Step 2 - Create the UI</h3>

<p>For navigation, it makes sense to add an “All Cats” link to the nav bar in <code>base.html</code>:</p>

<pre><code class="language-html">&lt;li&gt;&lt;a href="/cats"&gt;All Cats&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="/about"&gt;About&lt;/a&gt;&lt;/li&gt;
</code></pre>

<blockquote>
  <p>Note: Be sure to continue to use leading slashes for routes in your HTML</p>
</blockquote>

<p>A quick refresh and we have our link:</p>

<p><img src="./public/nav-link.png" alt="New Link Added for All Cats" /></p>

<h3 id="step-3---define-the-route">Step 3 - Define the Route</h3>

<p>Add the new route for displaying cats to the <code>main_app/urls.py</code> file. This step involves updating the <code>urlpatterns</code> list by including a path for the cat index view.</p>

<p>Let’s add the new route to <code>main_app/urls.py</code>:</p>

<pre><code class="language-python">urlpatterns = [
  path('', views.home, name='home'),
  path('about/', views.about, name='about'),
  # route for cats index
  path('cats/', views.cat_index, name='cat-index'),
]
</code></pre>

<p>In this setup, we use a single <code>views.py</code> file for all our view functions. By naming the function <code>cat_index</code>, we anticipate potentially adding more index views for other types of resources (like <code>toys</code>) in the future.</p>

<blockquote>
  <p>Because we are referencing a <code>cat_index</code> view that hasn’t been defined yet, attempting to navigate to this route will currently result in an error. We’ll define the <code>cat_index</code> view in the next steps to resolve this.</p>
</blockquote>

<h3 id="step-4---code-the-view-controller-action">Step 4 - Code the View (Controller Action)</h3>

<p>Since we don’t yet have a database model for cats, or the infrastructure to add new cats yet, we’ll initially use mock data to populate our index page.</p>

<h3 id="lets-simulate-some-cats">Let’s simulate some cats</h3>

<p>In the <code>main_app/views.py</code>, we’ll create a simple <code>Cat</code> class and a list of cat instances to simulate a database of cats.</p>

<pre><code class="language-python"># views.py

class Cat:
    def __init__(self, name, breed, description, age):
        self.name = name
        self.breed = breed
        self.description = description
        self.age = age

# Create a list of Cat instances
cats = [
    Cat('Lolo', 'tabby', 'Kinda rude.', 3),
    Cat('Sachi', 'tortoiseshell', 'Looks like a turtle.', 0),
    Cat('Fancy', 'bombay', 'Happy fluff ball.', 4),
    Cat('Bonk', 'selkirk rex', 'Meows loudly.', 6)
]
</code></pre>

<blockquote>
  <p>🧠 Note: Everything in a Python module is automatically exported, thus, the Cat class and the cats list will be accessible in other modules.</p>
</blockquote>

<p>Next, let’s create the <code>cat_index</code> view function that will use this data to render our <code>index</code> page:</p>

<pre><code class="language-python"># views.py

def cat_index(request):
    # Render the cats/index.html template with the cats data
    return render(request, 'cats/index.html', {'cats': cats})
</code></pre>

<p>Two interesting things above:</p>

<ol>
  <li>We organize our templates by creating a dedicated directory for each type of entity. For the cats, we’ll store their templates in <code>templates/cats</code>.</li>
  <li>Just like in Express, where data is passed to templates via an object, in Django, we use a dictionary. This dictionary is passed as the third argument to Django’s <code>render</code> function, allowing the template to access the cat data.</li>
</ol>

<p>This setup not only structures our application neatly but also mimics familiar patterns from other frameworks like Express, making it easier to manage and understand.</p>

<h3 id="step-5---respond-to-the-clients-http-request">Step 5 - Respond to the client’s HTTP request</h3>

<p>Now that we have the code to respond with the <code>render</code> method in our view, let’s set up the template we’ll use for rendering.</p>

<h2 id="creating-the-template-directory">Creating the Template Directory</h2>

<p>First, create a directory to organize templates related to cats:</p>

<pre><code class="language-bash">mkdir main_app/templates/cats
</code></pre>

<h3 id="creating-the-template-file">Creating the template file</h3>

<p>Next, create the <code>cats/index.html</code> template file:</p>

<pre><code class="language-bash">touch main_app/templates/cats/index.html
</code></pre>

<h3 id="populating-the-template">Populating the template</h3>

<p>Now, let’s populate this new template with the necessary HTML and DTL tags. Copy and paste the following content into the <code>cats/index.html</code> file:</p>

<pre><code class="language-html">{% extends 'base.html' %} {% load static %} {% block head %}
&lt;link
  rel="stylesheet"
  href="{% static 'css/cats/cat-index.css' %}"
/&gt;
{% endblock %} {% block content %}

&lt;section class="page-header"&gt;
  &lt;h1&gt;Cat List&lt;/h1&gt;
  &lt;img
    src="{% static 'images/cool-cat.svg' %}"
    alt="A cool cat"
  /&gt;
  &lt;img
    src="{% static 'images/happy-cat.svg' %}"
    alt="A happy cat"
  /&gt;
  &lt;img
    src="{% static 'images/teacup-cat.svg' %}"
    alt="A cat in a teacup"
  /&gt;
  &lt;img
    src="{% static 'images/cat-in-box.svg' %}"
    alt="A cat in a box"
  /&gt;
&lt;/section&gt;

&lt;section class="card-container"&gt;
  {% for cat in cats %}
  &lt;div class="card"&gt;
    &lt;div class="card-content"&gt;
      &lt;div class="card-img-container"&gt;
        &lt;img
          src="{% static 'images/sk8r-boi-cat.svg' %}"
          alt="A skater boy cat"
        /&gt;
      &lt;/div&gt;
      &lt;h2 class="card-title"&gt;{{ cat.name }}&lt;/h2&gt;
      {% if cat.age &gt; 0 %}
      &lt;p&gt;A {{ cat.age }} year old {{ cat.breed }}&lt;/p&gt;
      {% else %}
      &lt;p&gt;A {{ cat.breed }} kitten.&lt;/p&gt;
      {% endif %}
      &lt;p&gt;&lt;small&gt;{{ cat.description }}&lt;/small&gt;&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  {% endfor %}
&lt;/section&gt;

{% endblock %}
</code></pre>

<h3 id="using-control-flow-in-templates">Using control flow in templates</h3>

<p>Django uses specific template tags to control flow within templates:</p>

<ul>
  <li>
    <p><strong>Looping</strong>: <code>{% for %}</code> and <code>{% endfor %}</code> tags allow looping over items in a list.</p>
  </li>
  <li>
    <p><strong>Conditional Statements</strong>: <code>{% if %}</code>, <code>{% elif %}</code>, and <code>{% else %}</code>, culminating in <code>{% endif %}</code>, manage conditional rendering of template sections.</p>
  </li>
</ul>

<blockquote>
  <p>These template tags mimic Python’s syntax but are specifically designed for template logic, not to execute Python code directly.</p>
</blockquote>

<h3 id="template-tags-and-accessing-data">Template tags and accessing data</h3>

<p>Notice the use of double curly braces <code>{{ }}</code> to output variables’ values directly in the HTML, which is a feature of Django’s template system. When accessing methods on objects, they are called automatically without needing parentheses, simplifying the syntax.</p>

<p>For more on how DTL works and its syntax, refer to the <strong><a href="https://docs.djangoproject.com/en/5.1/ref/templates/language/">official Django documentation on template language</a></strong>.</p>

<p>Refresh the page and see your index page come alive!</p>

<h2 id="adding-css-for-cat_index">Adding CSS for <code>cat_index</code></h2>

<p>Our HTML is in place, but right now the images are controlling the layout of the page. Let’s add some custom CSS to better control the appearance and spacing of the elements.</p>

<p>In the terminal create the files:</p>

<pre><code class="language-bash">mkdir main_app/static/css/cats
touch main_app/static/css/cats/cat-index.css
</code></pre>

<p>And add some CSS in that file:</p>

<pre><code class="language-css">.card-container {
  padding: 0 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  width: 275px;
  margin: 10px;
  border: var(--borders);
  box-shadow: var(--card-box-shadow);
}

.card-content {
  padding: 10px;
  width: 100%;
}

.usr-img {
  width: 100%;
  border-radius: var(--card-border-radius);
}

.card &gt; a {
  text-decoration: none;
  color: var(--text-color);
}

.card h2 {
  margin: 10px 0;
  font-size: var(--font-xl);
}

.card p {
  margin: 5px 0;
  font-size: var(--font-reg);
}
</code></pre>

<p>Refresh to see your new index page!</p>

<p><br /></p>

<p><img src="./public/index-page.png" alt="Final Index Page UI" /></p>

<p><br /></p>

<h2 id="-you-do-create-a-template-for-the-home-page">🎓 You Do: Create a template for the home page</h2>

<p>In this exercise, you’ll create a new template for the home page of our application, similar to the index page we just finished.</p>

<h3 id="step-1-create-the-home-page-template-file">Step 1: Create the home page template file</h3>

<ul>
  <li>Start by creating the template file <code>home.html</code> for the home page in the <code>main_app/templates/</code> directory.</li>
</ul>

<h3 id="step-2-update-the-home-view">Step 2: Update the home view</h3>

<ul>
  <li>
    <p>Modify the home view in your <code>main_app/views.py</code> to render the new <code>home.html</code> template.</p>
  </li>
  <li>
    <p>Since you are no longer using HttpResponse directly in this view, you can remove its import statement from the top of the file if it’s no longer used elsewhere.</p>
  </li>
</ul>

<h3 id="step-3-extend-the-base-template-and-add-content">Step 3: Extend the base template and add content</h3>

<ul>
  <li>
    <p>Open your newly created <code>home.html</code> and set it up to extend from the base template.</p>
  </li>
  <li>
    <p>Add some content and link the necessary CSS files with the following:</p>

    <pre><code class="language-html">{% extends 'base.html' %} {% load static %} {% block head %}

&lt;link
rel="stylesheet"
href="{% static 'css/home.css' %}"
/&gt;
{% endblock %} {% block content %}

&lt;section class="logo-container"&gt;
&lt;div class="cat-container"&gt;
&lt;img
src="{% static 'images/splash.svg' %}"
alt="The Cat Collector Cat"
/&gt;
&lt;/div&gt;
&lt;img
src="{% static 'images/logotype.svg' %}"
alt="Text reads: Cat Collector"
/&gt;
&lt;/section&gt;

{% endblock %}
</code></pre>

  </li>
</ul>

<h3 id="step-4-create-a-css-file-for-the-new-home-page">Step 4: Create a CSS file for the new home page</h3>

<ul>
  <li>
    <p>Create a new CSS file <code>home.css</code> in <code>static/css/</code> to style your home page.</p>
  </li>
  <li>
    <p>Add the following CSS code:</p>

    <pre><code class="language-css">main {

display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
height: 100%;
}

main &gt; section {
width: 100%;
padding: 10px 8px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
}

.header-logo-container {
display: none;
}

.logo-container {
max-width: 375px;
}

.cat-container {
width: 80%;
}

.login {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 80%;
}

.login h1 {
font-size: clamp(3.2rem, 3vw, 4.8rem);
margin: 10px 0;
}

.login &gt; p {
display: flex;
flex-direction: column;
width: 100%;
margin: 14px 0 0px;
}

.login label {
font-size: var(--font-reg);
margin-bottom: 6px;
}

.login input {
font-size: var(--font-l);
padding: 2px 4px;
}

.login .btn {
align-self: flex-end;
margin-right: 0;
margin-top: 16px;
}

@media only screen and (min-width: 768px) {
main {
justify-content: space-around;
}

main &gt; section {
width: 40%;
}

.login {
border: var(--borders);
padding: 20px;
border-radius: var(--card-border-radius);
box-shadow: var(--card-box-shadow);
width: 100%;
}

.logo-container {
max-width: 520px;
}
}
</code></pre>

  </li>
</ul>

<p>Refresh the browser to see your new home page in action!</p>

<h3 id="progress-recap">Progress recap</h3>

<p>You’ve successfully created a basic yet functional Django application that displays an index page with a dynamically rendered list of Cat objects. Congrats!</p>

<p>At this point, you’re probably familiar with the essentials of Django’s URL configuration and the general structure of a Django app. While we’ve covered the fundamentals of views and Django Template Language, there’s more to explore.</p>

<p>We’re going to get our first look at Models in the next lesson where we’ll use one to replace the current <code>Cat</code> class so that we can save cats in the database!</p>

<!--  -->
</main>
