from django.urls import path, include
from .views import Another, BookViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('books', BookViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('another', Another.as_view())
]