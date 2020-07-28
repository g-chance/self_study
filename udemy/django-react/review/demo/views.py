from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book
from rest_framework import viewsets
from .serializers import BookSerializer

# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()

class Another(View):

    books = Book.objects.all()
    output = ''

    for book in books:
        output += f'We have {book.title} in DB\n'

    def get(self, request):
        return HttpResponse(self.output)

def demo(request):

    books = Book.objects.all()
    context = {
        'books': books
    }

    return render(request, 'test.html', context)