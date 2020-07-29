from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from .models import Book
from .serializers import BookSerializer
from rest_framework import viewsets
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class BookViewSet(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()
    authentication_classes = (TokenAuthentication,)
    permission_classes = (IsAuthenticated,)

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