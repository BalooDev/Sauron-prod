from django.http.response import HttpResponse
from sauron_ecommerce.forms import  ConnexionForm, UserForm
from django.shortcuts import render
from django.contrib.sites.shortcuts import get_current_site
from django.shortcuts import render, redirect
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from django.template.loader import render_to_string
from sauron_ecommerce.tokens import account_activation_token
# Create your views here.
from sauron_ecommerce.models import Produit, Categorie, SousCategorie, Panier, Commentaire
categories = Categorie.objects.all()
def index(request):
    """View function for home page of site."""
    
    
    # Generate counts of some of the main objects

    # Render the HTML template index.html with the data in the context variable
    return render(request,'index.html', context = {'user': request.user,'categories':categories})


from django.views import generic
class ProduitListView(generic.ListView):
    model = Produit

from django.contrib.auth import authenticate, login

def connexion(request):
    error = False

    if request.method == "POST":
        form = ConnexionForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            user = authenticate(username=username, password=password)  # Nous vérifions si les données sont correctes
            if user:  # Si l'objet renvoyé n'est pas None
                login(request, user)  # nous connectons l'utilisateur
            else: # sinon une erreur sera affichée
                error = True
    else:
        form = ConnexionForm()
    return render(request, 'login.html', {'form': form,'categories':categories})

from django.contrib.auth import logout
from django.shortcuts import render
from django.urls import reverse

def deconnexion(request):
    logout(request)
    return redirect(reverse(connexion))
    
def signup(request):
    if request.method == 'POST':
        user_form = UserForm(request.POST)
        if user_form.is_valid():
            user = user_form.save()
            user.refresh_from_db() 
            user.is_active = False
            user.profile.birth_date = user_form.cleaned_data.get('birth_date')
            user.profile.adresse = user_form.cleaned_data.get('adresse')
            user.profile.pays = user_form.cleaned_data.get('pays')
            user.profile.code_postal = user_form.cleaned_data.get('code_postal')
            user.save()
            current_site = get_current_site(request)
            subject = 'Activate Your MySite Account'
            message = render_to_string('account_activation_email.html', {
                'user': user,
                'domain': current_site.domain,
                'uid':force_text(urlsafe_base64_encode(force_bytes(user.pk))),
                'token': account_activation_token.make_token(user),
            })
            user.email_user(subject, message)
            return redirect('account_activation_sent')
    else:
        user_form = UserForm()
    return render(request, 'signup.html', {'user_form': user_form,'categories':categories})

from django.contrib.auth import login
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from django.utils.encoding import force_text
from django.utils.http import urlsafe_base64_decode
from sauron_ecommerce.tokens import account_activation_token

def account_activation_sent(request):
    return render(request, 'account_activation_sent.html')

def activate(request, uidb64, token):
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
    if user is not None and account_activation_token.check_token(user, token):
        user.is_active = True
        user.save()
        login(request, user)
        return HttpResponse('Thank you for your email confirmation. Now you can login your account.')
    else:
        return HttpResponse('Activation link is invalid!')

from django.contrib.auth import authenticate, login
