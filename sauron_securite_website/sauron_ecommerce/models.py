from django.contrib.auth.models import User
from django.db import models
from django.db.models.expressions import ValueRange
from django.db.models.fields import BooleanField, CharField, DateTimeField, EmailField, IntegerField
from django.urls import reverse # Cette fonction est utilisée pour formater les URL
from django.dispatch import receiver
from django.db.models.signals import post_save

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    adresse = models.CharField(max_length=200,default="")
    code_postal = models.CharField(max_length=6,default="00000")
    pays = models.CharField(max_length=50,default="France")
    email_confirmed = models.BooleanField(default=False)
    birth_date = models.DateField(null=True, blank=True)

@receiver(post_save, sender=User)
def update_user_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance)
    instance.profile.save()




class Produit(models.Model):
    """Classe qui définit un produit du site web: sauron securite"""
    #champs de formulaire    
    RESOLUTION_CHOICES = (
    ("none","none"),
    ("1080","hd"),
    ("2160",'hd+'),
    ("4320","4k"),
    ("8640","8k")
    )
    id = models.AutoField(primary_key=True)
    nom = models.CharField(max_length=100,help_text="nom du produit",unique=True)
    description = models.TextField(max_length=200,help_text="une description attractif du produit")
    prix = models.FloatField(help_text="le prix du produit en euro")
    date_ajout = models.DateTimeField()
    poids = models.FloatField(null=True,help_text="poids du produit en gramme")
    resolution = models.TextField(choices=RESOLUTION_CHOICES)
    image1 = models.ImageField(null=True, upload_to=None, height_field=None, width_field=None, max_length=100,default="null")
    image2 = models.ImageField(null=True, upload_to=None, height_field=None, width_field=None, max_length=100,default="null")
    image3 = models.ImageField(null=True, upload_to=None, height_field=None, width_field=None, max_length=100,default="null")
    image4 = models.ImageField(null=True, upload_to=None, height_field=None, width_field=None, max_length=100,default="null")
    image5 = models.ImageField(null=True, upload_to=None, height_field=None, width_field=None, max_length=100,default="null")
    note = models.FloatField(null=True)
    souscategorie = models.ForeignKey('SousCategorie', on_delete=models.SET_NULL, null=True)


    class Meta:
        ordering = ['nom','date_ajout']
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.nom

    def get_absolute_url(self):
        """Cette fonction est requise pas Django, lorsque vous souhaitez détailler le contenu d'un objet."""
        return reverse('produit-detail', args=[str(self.id)])

class Categorie(models.Model):
    """Classe qui définit les differentes categories du site: sauron securite"""
    #champs de formulaire    
    id = models.AutoField(primary_key=True)
    nom = models.TextField(max_length=100,help_text="nom du produit")
    description = models.TextField(max_length=200,help_text="une description attractif du produit")
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100,default=0)

    class Meta:
        ordering = ['nom',]
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.nom

class SousCategorie(models.Model):
    """Classe qui définit les differentes categories du site: sauron securite"""
    #champs de formulaire    
    id = models.AutoField(primary_key=True)
    nom = models.TextField(max_length=100,help_text="nom du produit")
    description = models.TextField(max_length=200,help_text="une description attractif du produit")
    categorie = models.ForeignKey("Categorie",on_delete=models.SET_NULL, null=True)
    image = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=100,default=0)

    class Meta:
        ordering = ['nom',]
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.nom

class Commentaire(models.Model):
    id = models.AutoField(primary_key=True)
    profile = models.ForeignKey("Profile",on_delete=models.SET_NULL, null=True)
    contenu = models.TextField(max_length=500)
    note = models.IntegerField(null=True)
    produit = models.ForeignKey("Produit",on_delete=models.SET_NULL, null=True)
    class Meta:
        ordering = ['profile',]
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.id

class Panier(models.Model):
    """Classe qui définit les differentes categories du site: sauron securite"""
    #champs de formulaire    
    id = models.AutoField(primary_key=True)
    profile = models.ForeignKey("Profile",on_delete=models.SET_NULL, null=True)
    produit = models.ManyToManyField(Produit)
    total = models.FloatField(max_length=200)

    class Meta:
        ordering = ['total',]
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.id

class Facture(models.Model):
    """Classe qui définit les differentes categories du site: sauron securite"""
    #champs de formulaire    
    id = models.AutoField(primary_key=True)
    profile = models.ForeignKey("Profile",on_delete=models.SET_NULL, null=True)
    panier = models.ForeignKey("Panier",on_delete=models.SET_NULL, null=True)
    payer = models.BooleanField(default=False)
    date_payer = models.DateTimeField()

    class Meta:
        ordering = ['date_payer',]
    
    def __str__(self):
        """String for representing the MyModelName object (in Admin site etc.)."""
        return self.date_payer
