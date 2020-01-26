from rest_framework import serializers
from .models import Profile

class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model=Profile
        fields="__all__"

    def validate_number(self,value):
        qs=Profile.objects.filter(phone__exact=value)
        if self.instance:
            qs=qs.exclude(pk=self.instance.pk)
        if qs.exists():
            raise serializers.ValidationError("Number is already Registered")
        return value

    def validate_email(self,value):
        qs=Profile.objects.filter(email__exact=value)
        if self.instance:
            qs=qs.exclude(pk=self.instance.pk)
        if qs.exists():
            raise serializers.ValidationError("Email is already Registered")
        return value