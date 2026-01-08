from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    technology = models.CharField(max_length=20)
    # In your Project model, you define a FileField with a subfolder named project_images/. That’s where Django should store the images when you upload them.
    # You also set blank to True. That way, it’s okay if a project doesn’t contain a picture.
    # You could be even more explicit and use an ImageField for your images. If you do so, then you need to install pillow into your development environment first.
    image = models.FileField(upload_to="project_images/", blank=True)
    # Django constructs the path to your upload folder using the MEDIA_ROOT setting and the upload_to value. To collect all the images in an uploads/ folder and serve them with a media/ URL, add two lines to settings.py.