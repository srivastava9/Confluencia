from django.urls import path
from .views import CreateProfile

urlpatterns = [
    path("new/",CreateProfile.as_view(),name="New_User")
]
