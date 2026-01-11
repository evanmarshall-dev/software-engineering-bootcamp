from django.shortcuts import render
from django.contrib.auth.views import LoginView
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm

# ? def home(request):
    # ? return render(request, "pages/home.html", {})

# When LoginView renders the home.html template, it passes in the context a default form object we can display in home.html.
class Home(LoginView):
    template_name = "pages/home.html"

def signup(request):
    error_message = ""
    # This is how to create a user form object that includes data from the browser’s POST request.
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # Add user to the database.
            user = form.save()
            # Log in the user after signing up.
            login(request, user)
            return render(request, "pages/home.html")
        else:
            error_message = "Invalid sign up - try again"
    # A bad GET or invalid POST request will render the signup template with an empty form.
    form = UserCreationForm()
    context = {"form": form, "error_message": error_message}
    return render(request, "pages/signup.html", context)