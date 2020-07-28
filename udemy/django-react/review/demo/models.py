from django.db import models

# Create your models here.
class Book(models.Model):
    title = models.CharField(max_length=36, blank=False, unique=True)
    desc = models.TextField(max_length=256, blank=True)
    price = models.IntegerField(default=0)
    published = models.DateTimeField(blank=True, null=True, default=None)
    is_published = models.BooleanField(default=False)
    cover = models.FileField(upload_to='covers/', blank=True)

    # def __str__(self):
    #     return self.title