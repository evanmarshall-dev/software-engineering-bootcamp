from django.urls import path
from projects import views

urlpatterns = [
    # You connect the root URL of the projects app to the project_index view.
    path("", views.project_index, name="project_index"),
    # You want the URL to be /1, /2, or whatever number corresponds to the primary key of the project. The pk value in the URL is the same pk passed to the view function, so you need to dynamically generate these URLs depending on which project you want to view. To do this, you use the <int:pk> notation.
    # This notation tells Django that the value passed in the URL is an integer, and its variable name is pk. That’s the parameter of your project_detail() view function.
    path("<int:pk>/", views.project_detail, name="project_detail"),
]