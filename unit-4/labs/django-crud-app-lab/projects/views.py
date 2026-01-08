from django.shortcuts import render
# Import Project class from models.py
from projects.models import Project

# * You can test the below queries using the Django shell:
# ? python manage.py shell
# ? >>> from projects.models import Project
# ? >>> Project.objects.all()

def project_index(request):
    # Query database to retrieve all objects in the projects table.
    projects = Project.objects.all()
    # Define dictionary named context with one entry "projects" to which we assign the Queryset containing all the projects. Django uses context dictionary to send info to the template.
    context = {
        "projects": projects
    }
    # Add context as an argument to render. This allows entries in the context dictionary to be accessible within the template. This is required for every view function.
    # You also add the path to a template named project_index.html to render(). We will have to create this template later.
    return render(request, "projects/project_index.html", context)

def project_detail(request, pk):
    # Another query to retrieve the project with a primary key, pk, equal to the function’s argument. The primary key is the unique identifier of a database entry.
    project = Project.objects.get(pk=pk)
    context = {
        "project": project
    }
    # You pass in a template named project_detail.html. We will have to create this template later.
    return render(request, "projects/project_detail.html", context)