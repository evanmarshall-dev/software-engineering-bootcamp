from django.contrib import admin
# Import Project class from models.py
from projects.models import Project

class ProjectAdmin(admin.ModelAdmin):
    pass

admin.site.register(Project, ProjectAdmin)