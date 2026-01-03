from django.urls import path
from . import views # Import views to connect routes to view functions

urlpatterns = [
    # Routes will be added here
    # ? path('', views.home, name='home'),
    path('', views.Home.as_view(), name='home'),
    path('about/', views.about, name='about'),
    # route for cats index
    path('cats/', views.cat_index, name='cat-index'),
    path('cats/<int:cat_id>/', views.cat_detail, name='cat-detail'),
    path('cats/create/', views.CatCreate.as_view(), name='cat-create'),
    # By convention, CBVs that work with individual model instances will expect to find a named parameter of pk for “primary key”. This is why we didn’t use cat_id as we did in the detail entry.
    path('cats/<int:pk>/update/', views.CatUpdate.as_view(), name='cat-update'),
    path('cats/<int:pk>/delete/', views.CatDelete.as_view(), name='cat-delete'),
    path(
        'cats/<int:cat_id>/add-feeding/',
        views.add_feeding,
        name='add-feeding'
    ),
    path('toys/create/', views.ToyCreate.as_view(), name='toy-create'),
    path('toys/<int:pk>/', views.ToyDetail.as_view(), name='toy-detail'),
    path('toys/', views.ToyList.as_view(), name='toy-index'),
    path('toys/<int:pk>/update/', views.ToyUpdate.as_view(), name='toy-update'),
    path('toys/<int:pk>/delete/', views.ToyDelete.as_view(), name='toy-delete'),
    # New URL to associate a toy with a cat
    path('cats/<int:cat_id>/associate-toy/<int:toy_id>/', views.associate_toy, name='associate-toy'),
    path('cats/<int:cat_id>/remove-toy/<int:toy_id>/', views.remove_toy, name='remove-toy'),
    path('accounts/signup/', views.signup, name='signup'),
]
