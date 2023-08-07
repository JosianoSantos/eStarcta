from rest_framework import viewsets, permissions
from rest_framework import filters

from lib.pagination import CustomPagination
from lib.mixins import MultipleSerializerClassMixin

from .models import Empresa
from .serializers import EmpresaSerializer, EmpresaUpdateSerializer, EmpresaListSerializer


class EmpresaViewSet(MultipleSerializerClassMixin, viewsets.ModelViewSet):
    queryset = Empresa.objects.all()
    serializer_class = EmpresaSerializer
    serializer_action_classes = {
        'list': EmpresaListSerializer,
        'update': EmpresaUpdateSerializer,
        'partial_update': EmpresaUpdateSerializer,
    }
    pagination_class = CustomPagination
    permission_classes = [permissions.IsAuthenticated]
    filter_backends = [filters.SearchFilter, filters.OrderingFilter]
    ordering_fields = ['CNPJ', 'razao_social', 'nome_fantasia', 'CNAE_principal']
    search_fields = ['CNPJ', 'razao_social', 'nome_fantasia', 'CNAE_principal']
    lookup_field = 'CNPJ'  # Alterando para fazer  update pelo cnpj, e não pelo id (padrão)
