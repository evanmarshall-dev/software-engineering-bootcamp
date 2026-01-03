from django.contrib import admin
# Add Feeding and Toy to the import
from .models import Cat, Feeding, Toy

admin.site.register(Cat)
# Register the new Feeding model
admin.site.register(Feeding)
# Add the Toy model
admin.site.register(Toy)
