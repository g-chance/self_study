from rest_framework import serializers
from .models import Book, Character, Author

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = ['id', 'name']

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ['id', 'firstName', 'lastName']

class BookNumberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['isbn10', 'isbn13']

class BookSerializer(serializers.ModelSerializer):
    number = BookNumberSerializer(many=False)
    characters = CharacterSerializer(many=True)
    authors = CharacterSerializer(many=True)

    class Meta:
        model = Book
        fields = ['id', 'title', 'desc', 'price', 'published',
            'is_published', 'number', 'characters', 'authors']

class BookMiniSerializer(serializers.ModelSerializer):

    class Meta:
        model = Book
        fields = ['id', 'title']