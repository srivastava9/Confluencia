from django.contrib import admin
from .models import Profile

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "phone", "email", "city", "college")
    search_fields = ("name", "phone", "email", "college")
    list_filter = ("college", "city", "category")


admin.site.register(Profile, ProfileAdmin)


