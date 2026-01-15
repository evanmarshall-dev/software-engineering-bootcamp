# NOTES FOR SWITCHING TO CLASS-BASED VIEWS:
# List view for multiple objects: Defaults to context variable object_list or <model_name>_list (e.g., project_list for Project model)
# Detail view for single object: Defaults to context variable object or <model_name> (e.g., project for Project model)
# The reasoning: Single-object views (Create/Update/Delete) know they're working with one instance, so Django names it after the model. List views work with querysets of multiple objects, so Django uses object_list for clarity.
# If you wanted ListView to use projects instead of object_list, you'd add context_object_name = "projects" to ProjectList—but using defaults means less code to maintain.

from django.shortcuts import render
# Import Project class from models.py
from projects.models import Project
# Import the custom form
from projects.forms import ProjectForm
# In order to add class based views, you need to import the generic views module from Django and the model itself.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
# Import the login_required decorator
# ? from django.contrib.auth.decorators import login_required
# Import the mixin for class-based views
from django.contrib.auth.mixins import LoginRequiredMixin

# * You can test the below queries using the Django shell:
# ? python manage.py shell
# ? from projects.models import Project
# ? Project.objects.all()

class ProjectList(LoginRequiredMixin, ListView):
    model = Project
    # Uses default template projects/project_list.html and context object_list/project_list

    def get_queryset(self):
        # Override to only return projects belonging to the logged-in user
        return Project.objects.filter(user=self.request.user)

# ? def project_index(request):
    # Query database to retrieve all objects in the projects table.
    # ? projects = Project.objects.all()
    # Define dictionary named context with one entry "projects" to which we assign the Queryset containing all the projects. Django uses context dictionary to send info to the template.
    # ? context = {
    #     ? "projects": projects
    # ? }
    # Add context as an argument to render. This allows entries in the context dictionary to be accessible within the template. This is required for every view function.
    # You also add the path to a template named project_index.html to render(). We will have to create this template later.
    # ? return render(request, "projects/project_index.html", context)

class ProjectDetail(LoginRequiredMixin, DetailView):
    model = Project
    # Uses default template projects/project_detail.html and context object/project

# ? def project_detail(request, pk):
    # Another query to retrieve the project with a primary key, pk, equal to the function’s argument. The primary key is the unique identifier of a database entry.
    # ? project = Project.objects.get(pk=pk)
    # ? context = {
    # ?     "project": project
    # ? }
    # You pass in a template named project_detail.html. We will have to create this template later.
    # ? return render(request, "projects/project_detail.html", context)

class ProjectCreate(LoginRequiredMixin, CreateView):
    model = Project
    form_class = ProjectForm
    # ? fields = '__all__'
    # fields = ['title', 'description', 'technologies', 'image']
    # Only need template_name if you want to use a custom template name.
    # ? template_name = 'projects/project_form.html'
    # Do not need success URL because get_absolute_url is defined in the Project model.
    # ? success_url = '/projects/'
    # This inherited method is called when a valid form is submitted.
    def form_valid(self, form):
        # Assign the logged in user (self.request.user).
        # form.instance is the project.
        form.instance.user = self.request.user
        # Override the CreateView's form_valid() method to set the logged in user (self.request.user) before saving.
        # In Python, methods inherited by the superclass can be invoked by prefacing the method name with super().
        # Accordingly, after updating the form to include the user, we’re calling super().form_valid(form) to let the CreateView do its usual job of creating the model in the database and redirecting.
        return super().form_valid(form)

class ProjectUpdate(LoginRequiredMixin, UpdateView):
    model = Project
    form_class = ProjectForm
    # fields = ['title', 'description', 'technologies', 'image']

class ProjectDelete(LoginRequiredMixin, DeleteView):
    model = Project
    # After deleting a project, redirect to the project index page.
    success_url = '/projects/'