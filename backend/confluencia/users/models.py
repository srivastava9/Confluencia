from django.db import models


# Create your models here.
class Profile(models.Model):
    CATEGORY_CHOICES = [
        ("NR", "Non IIT Roorkee"),
        ("IR", "IIT Roorkee"),
        ("PF", "Professor"),
    ]
    GENDER_CHOICES = [("MM", "Male"), ("FM", "Female"), ("OO", "Others")]
    name = models.CharField(max_length=120)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    college = models.CharField(max_length=80)
    phone = models.IntegerField()
    category = models.CharField(max_length=2, choices=CATEGORY_CHOICES, default="NR")
    city = models.TextField(max_length=50)
    invitecode = models.CharField(max_length=120)
    year = models.CharField(max_length=10)
    gender = models.CharField(max_length=2, choices=GENDER_CHOICES, default="MM")

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"

    def __str__(self):
        return self.name

