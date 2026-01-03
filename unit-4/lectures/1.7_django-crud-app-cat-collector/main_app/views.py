# main_app/views.py

# Add redirect import since we will be redirecting after a feed form submission
from django.shortcuts import render, redirect
from django.views.generic.edit import CreateView, UpdateView, DeleteView
from django.views.generic import ListView, DetailView
# Add the two imports below
from django.contrib.auth import login
from django.contrib.auth.forms import UserCreationForm
# Import the login_required decorator
from django.contrib.auth.decorators import login_required
# Import the mixin for class-based views
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Cat, Toy
# Import the FeedingForm
from .forms import FeedingForm
from django.contrib.auth.views import LoginView

# Import HttpResponse to send text-based responses
# ? from django.http import HttpResponse

# Define the home view function
# ? def home(request):
    # Send a simple HTML response
    # ? return HttpResponse('<h1>Hello ᓚᘏᗢ</h1>')
    # Alternatively, render a template if needed
    # ? return render(request, 'home.html')
class Home(LoginView):
    template_name = 'home.html'

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

@login_required
def cat_index(request):
    # Render the cats/index.html template with the cats data
    # This reads ALL cats, not just the logged in user's cats
    # ? cats = Cat.objects.all()
    # To display just the logged in user’s cats, we just need to change the query to this:
    cats = Cat.objects.filter(user=request.user)
    # You could also retrieve the logged in user's cats like this
    # cats = request.user.cat_set.all()
    return render(request, 'cats/index.html', {'cats': cats})

@login_required
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

class CatCreate(LoginRequiredMixin, CreateView):
    model = Cat
    fields = ['name', 'breed', 'description', 'age']
    # ? fields = '__all__'
    # Remove success_url so Django uses get_absolute_url from Cat
    # ? success_url = '/cats/'

    # This inherited method is called when a
    # valid cat form is being submitted
    def form_valid(self, form):
        # Assign the logged in user (self.request.user)
        form.instance.user = self.request.user  # form.instance is the cat
        # Let the CreateView do its job as usual
        return super().form_valid(form)

class CatUpdate(LoginRequiredMixin, UpdateView):
    model = Cat
    # Let's disallow the renaming of a cat by excluding the name field!
    fields = ['breed', 'description', 'age']

class CatDelete(LoginRequiredMixin, DeleteView):
    model = Cat
    success_url = '/cats/'

@login_required
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

class ToyCreate(LoginRequiredMixin, CreateView):
    model = Toy
    fields = '__all__'

class ToyList(LoginRequiredMixin, ListView):
    model = Toy

class ToyDetail(LoginRequiredMixin, DetailView):
    model = Toy

class ToyUpdate(LoginRequiredMixin, UpdateView):
    model = Toy
    fields = ['name', 'color']

class ToyDelete(LoginRequiredMixin, DeleteView):
    model = Toy
    success_url = '/toys/'

@login_required
def associate_toy(request, cat_id, toy_id):
    # Note that you can pass a toy's id instead of the whole object
    Cat.objects.get(id=cat_id).toys.add(toy_id)
    return redirect('cat-detail', cat_id=cat_id)

@login_required
def remove_toy(request, cat_id, toy_id):
    # Look up the cat
    cat = Cat.objects.get(id=cat_id)
    # Look up the toy
    toy = Toy.objects.get(id=toy_id)
    # Remove the toy from the cat
    cat.toys.remove(toy)
    return redirect('cat-detail', cat_id=cat.id)

def signup(request):
    error_message = ''
    if request.method == 'POST':
        # This is how to create a 'user' form object
        # that includes the data from the browser
        form = UserCreationForm(request.POST)
        if form.is_valid():
            # This will add the user to the database
            user = form.save()
            # This is how we log a user in
            login(request, user)
            return redirect('cat-index')
        else:
            error_message = 'Invalid sign up - try again'
    # A bad POST or a GET request, so render signup.html with an empty form
    form = UserCreationForm()
    context = {'form': form, 'error_message': error_message}
    return render(request, 'signup.html', context)
    # Same as:
    # return render(
    #     request,
    #     'signup.html',
    #     {'form': form, 'error_message': error_message}
    # )
