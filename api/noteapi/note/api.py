from .models import Note
from rest_framework import viewsets, permissions
from .serializers import NoteSerializers

class NoteViewSet(viewsets.ModelViewSet):
    queryset = Note.objects.all()


    serializer_class = NoteSerializers
    permission_classes = [permissions.AllowAny]
