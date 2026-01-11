from django.urls import path
from pages import views

urlpatterns = [
    # ? path("", views.home, name="home"),
    path("", views.Home.as_view(), name="home"),
    path('accounts/signup/', views.signup, name='signup'),
]