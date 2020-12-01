from django.db import models

# Create your models here.

class BookNumber(models.Model):
    isbn_10 = models.CharField(max_length=10, blank=True)
    isbn_13 = models.CharField(max_length=13, blank=True)

class Book(models.Model):
    title = models.CharField(max_length=36, blank=False, unique=True)
    desc = models.TextField(max_length=256, blank=True)
    price = models.IntegerField(default=0)
    published = models.DateTimeField(blank=True, null=True, default=None)
    is_published = models.BooleanField(default=False)
    cover = models.FileField(upload_to='covers/', blank=True)

    number = models.OneToOneField(BookNumber, null=True, blank=True, on_delete=models.CASCADE)
    
    # characters

    def __str__(self):
        return self.title

class Author(models.Model):
    firstName = models.CharField(max_length=30)
    lastName = models.CharField(max_length=30)
    books = models.ManyToManyField(Book, related_name='authors')

class Character(models.Model):
    name = models.CharField(max_length=30)
    book = models.ForeignKey(Book, on_delete=models.CASCADE, 
        related_name='characters')