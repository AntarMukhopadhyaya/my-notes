from django.db import models
from django.contrib.auth.models import User
from taggit.managers import TaggableManager
# Create your models here.
class Note(models.Model):
    id = models.AutoField(primary_key=True)

    content =  models.TextField(default="",blank=False)
    title = models.TextField(max_length=100, null=True)
    user = models.ForeignKey(User, blank=False, on_delete=models.CASCADE)
    tags = TaggableManager()
    created_date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)