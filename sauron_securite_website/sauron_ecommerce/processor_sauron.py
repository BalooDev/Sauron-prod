from sauron_ecommerce.models import Categorie


def user(request):
    categories = Categorie.objects.all()
    if hasattr(request, 'user'):
        return {'user':request.user,'categories':categories }
    return {}