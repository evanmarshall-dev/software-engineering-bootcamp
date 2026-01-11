from django.db import models
from django.urls import reverse
from django.contrib.auth.models import User

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=20)
    # In your Project model, you define a FileField with a subfolder named project_images/. That’s where Django should store the images when you upload them.
    # You also set blank to True. That way, it’s okay if a project doesn’t contain a picture.
    # You could be even more explicit and use an ImageField for your images. If you do so, then you need to install pillow into your development environment first.
    image = models.FileField(upload_to="project_images/", blank=True)
    # Django constructs the path to your upload folder using the MEDIA_ROOT setting and the upload_to value. To collect all the images in an uploads/ folder and serve them with a media/ URL, add two lines to settings.py.
    # Every project is associated with a user. If the user is deleted, all their projects will be deleted as well. Every project record must hold the PK of a user.
    # Since we already have projects when we create and make migrations we will need to provide a default user id for existing records.
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    # This method returns the URL to access a particular project instance.
    def get_absolute_url(self):
        # Use reverse() to dynamically generate the URL for the project_detail view, passing the primary key of the current instance.
        return reverse("project_detail", kwargs={"pk": self.pk})