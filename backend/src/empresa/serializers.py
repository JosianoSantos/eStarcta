from rest_framework import serializers
from .models import Empresa


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'


class EmpresaUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['nome_fantasia', 'CNAE_principal']
