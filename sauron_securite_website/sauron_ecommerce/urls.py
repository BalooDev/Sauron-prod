from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('produit/', views.ProduitListView.as_view(), name='produit'),
]