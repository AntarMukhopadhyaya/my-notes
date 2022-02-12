from rest_framework import serializers
from .models import Note
from taggit_serializer.serializers import (TagListSerializerField,
                                           TaggitSerializer)

class NoteSerializers(TaggitSerializer,serializers.ModelSerializer):
    tags = TagListSerializerField()

    class Meta:
        model = Note
        fields = "__all__"
