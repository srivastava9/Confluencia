from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .models import Profile
from .serializers import (ProfileSerializers)
# Create your views here.

class CreateProfile(APIView):
    permission_classes=[AllowAny]
    serializer_class=ProfileSerializers
    
    def post(self,request):
        serializer=ProfileSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
        else:
            print(serializer.errors)
            return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)