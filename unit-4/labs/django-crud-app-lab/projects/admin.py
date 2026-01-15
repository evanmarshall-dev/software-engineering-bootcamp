from django.contrib import admin
# Import Project and Technology classes from models.py
from projects.models import Project, Technology

class ProjectAdmin(admin.ModelAdmin):
    pass

class TechnologyAdmin(admin.ModelAdmin):
    pass

admin.site.register(Project, ProjectAdmin)
admin.site.register(Technology, TechnologyAdmin)