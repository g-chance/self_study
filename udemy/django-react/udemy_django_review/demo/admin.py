from django.contrib import admin
from .models import Book, BookNumber, Character, Author

# Register your models here.
# admin.site.register(Book)
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    # fields = ['title', 'desc']
    list_display = ['title', 'desc']

admin.site.register(BookNumber)
admin.site.register(Character)
admin.site.register(Author)