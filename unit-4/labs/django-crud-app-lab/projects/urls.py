from django.urls import path
from projects import views

urlpatterns = [
    # You connect the root URL of the projects app to the project_index view.
    # ? path("", views.project_index, name="project_index"),
    # Alternative using class-based view.
    # Django does not care to change the name of the URL pattern when switching from a function-based view to a class-based view but I will change it here for clarity.
    # ? path("", views.ProjectList.as_view(), name="project_index"),
    path("", views.ProjectList.as_view(), name="project_list"),
    # You want the URL to be /1, /2, or whatever number corresponds to the primary key of the project. The pk value in the URL is the same pk passed to the view function, so you need to dynamically generate these URLs depending on which project you want to view. To do this, you use the <int:pk> notation.
    # This notation tells Django that the value passed in the URL is an integer, and its variable name is pk. That’s the parameter of your project_detail() view function.
    # ? path("<int:pk>/", views.project_detail, name="project_detail"),
    path("<int:pk>/", views.ProjectDetail.as_view(), name="project_detail"),
    # The path() function needs a view function as a second argument which is what as_view() provides.
    path('create/', views.ProjectCreate.as_view(), name='project_create'),
    path('<int:pk>/update/', views.ProjectUpdate.as_view(), name='project_update'),
    path('<int:pk>/delete/', views.ProjectDelete.as_view(), name='project_delete'),
]