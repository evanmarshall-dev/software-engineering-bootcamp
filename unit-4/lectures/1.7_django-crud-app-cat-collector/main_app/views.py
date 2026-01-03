# main_app/views.py

# Add redirect import since we will be redirecting after a feed form submission
from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
from .models import Cat, Toy
# Import the FeedingForm
from .forms import FeedingForm

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

# ? class Cat:
#     ? def __init__(self, name, breed, description, age):
#         ? self.name = name
#         ? self.breed = breed
#         ? self.description = description
#         ? self.age = age

# Create a list of Cat instances
# ? cats = [
#     ? Cat('Lolo', 'tabby', 'Kinda rude.', 3),
#     ? Cat('Sachi', 'tortoiseshell', 'Looks like a turtle.', 0),
#     ? Cat('Fancy', 'bombay', 'Happy fluff ball.', 4),
#     ? Cat('Bonk', 'selkirk rex', 'Meows loudly.', 6)
# ]

def cat_index(request):
    # Render the cats/index.html template with the cats data
    cats = Cat.objects.all()
    return render(request, 'cats/index.html', {'cats': cats})

def cat_detail(request, cat_id):
    cat = Cat.objects.get(id=cat_id)
    # Only get the toys the cat does not have
    toys_cat_doesnt_have = Toy.objects.exclude(id__in = cat.toys.all().values_list('id'))
    # ? toys = Toy.objects.all()  # Fetch all toys
    # instantiate FeedingForm to be rendered in the template
    feeding_form = FeedingForm()
    return render(request, 'cats/detail.html', {
        # include the cat and feeding_form in the context
        'cat': cat,
        'feeding_form': feeding_form,
        # ? 'toys': toys  # Pass toys to the template
        'toys': toys_cat_doesnt_have  # send those toys
    })

class CatCreate(CreateView):
    model = Cat
    fields = ['name', 'breed', 'description', 'age']
    # ? fields = '__all__'
    # Remove success_url so Django uses get_absolute_url from Cat
    # ? success_url = '/cats/'

class CatUpdate(UpdateView):
    model = Cat
    # Let's disallow the renaming of a cat by excluding the name field!
    fields = ['breed', 'description', 'age']

class CatDelete(DeleteView):
    model = Cat
    success_url = '/cats/'

def add_feeding(request, cat_id):
    # create a ModelForm instance using the data in request.POST
    # First we capture data from the user via the FeedingForm(request.POST) and prepare it for the database.
    form = FeedingForm(request.POST)
    # The method form.is_valid() checks if the submitted form data is valid according to the form’s specifications, such as required fields being filled and data types matching the model’s requirements.
    if form.is_valid():
        # After ensuring that the form contains valid data, we save the form with the commit=False option, which returns an in-memory model object so that we can assign the cat_id before actually saving to the database.
        new_feeding = form.save(commit=False)
        new_feeding.cat_id = cat_id
        new_feeding.save()
    # Finally we will redirect instead of render since data has been changed in the database.
    return redirect('cat-detail', cat_id=cat_id)

class ToyCreate(CreateView):
    model = Toy
    fields = '__all__'

class ToyList(ListView):
    model = Toy

class ToyDetail(DetailView):
    model = Toy

class ToyUpdate(UpdateView):
    model = Toy
    fields = ['name', 'color']

class ToyDelete(DeleteView):
    model = Toy
    success_url = '/toys/'

def associate_toy(request, cat_id, toy_id):
    # Note that you can pass a toy's id instead of the whole object
    Cat.objects.get(id=cat_id).toys.add(toy_id)
    return redirect('cat-detail', cat_id=cat_id)

def remove_toy(request, cat_id, toy_id):
    # Look up the cat
    cat = Cat.objects.get(id=cat_id)
    # Look up the toy
    toy = Toy.objects.get(id=toy_id)
    # Remove the toy from the cat
    cat.toys.remove(toy)
    return redirect('cat-detail', cat_id=cat.id)

