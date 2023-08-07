from rest_framework import serializers

from .models import Empresa

from validate_docbr import CNPJ


class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'


class EmpresaListSerializer(serializers.ModelSerializer):
    CNPJ = serializers.SerializerMethodField()

    class Meta:
        model = Empresa
        fields = '__all__'

    def get_CNPJ(self, obj):
        return CNPJ().mask(obj.CNPJ)


class EmpresaUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = ['nome_fantasia', 'CNAE_principal']
