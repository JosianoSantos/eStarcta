from django.db import models

from lib.validator import CnpjValidator


class Empresa(models.Model):
    CNPJ = models.CharField(max_length=18, unique=True, validators=[CnpjValidator()])
    razao_social = models.CharField(max_length=500)
    nome_fantasia = models.CharField(max_length=500)
    CNAE_principal = models.CharField(max_length=1000)
