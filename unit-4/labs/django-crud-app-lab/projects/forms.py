from django import forms
from projects.models import Project, Technology

class ProjectForm(forms.ModelForm):
    class Meta:
        model = Project
        fields = ['title', 'description', 'technologies', 'image']
        widgets = {
            'technologies': forms.CheckboxSelectMultiple(),
        }
