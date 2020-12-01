from django.db import models
from django.contrib.auth.models import User as AdminUser
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.

class User(AdminUser):
    hair_color = models.CharField(max_length=30)

class Movie(models.Model):
    title = models.CharField(max_length=32)
    desc = models.TextField(max_length=256)

    def no_ratings(self):
        ratings = Rating.objects.filter(movie=self)
        return len(ratings)

    def avg_rating(self):
        su = 0
        ratings = Rating.objects.filter(movie=self)
        for rating in ratings:
            su += rating.stars
        return (su / len(ratings)) if len(ratings) > 0 else 0

class Rating(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[
        MinValueValidator(1),
        MaxValueValidator(5)
    ])
    class Meta:
        unique_together = (('user', 'movie'),)
        index_together = (('user', 'movie'),)
        