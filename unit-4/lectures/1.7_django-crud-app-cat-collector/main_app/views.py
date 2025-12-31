# main_app/views.py

from django.shortcuts import render

# Import HttpResponse to send text-based responses
# ? from django.http import HttpResponse

# Define the home view function
def home(request):
    # Send a simple HTML response
    # ? return HttpResponse('<h1>Hello ᓚᘏᗢ</h1>')
    # Alternatively, render a template if needed
    return render(request, 'home.html')

# Define the about view function
def about(request):
    # Send a simple HTML response
    # ? return HttpResponse('<h1>About the CatCollector</h1>')
    # Alternatively, render a template if needed
    return render(request, 'about.html')

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

def cat_index(request):
    # Render the cats/index.html template with the cats data
    return render(request, 'cats/index.html', {'cats': cats})