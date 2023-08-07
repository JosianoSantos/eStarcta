from django.urls import reverse
from rest_framework import status
from rest_framework.test import APIClient, APITestCase
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Empresa


class EmpresaViewSetTests(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.url = reverse('empresa-list')
        self.user = User.objects.create_user(username='test@gmail.com', email='test@gmail.com', password='testpassword')
        response = self.client.post('/usuario/login/', {'email': self.user.email, 'password': 'testpassword'})
        self.token = response.data['access']

    def test_list_empresas(self):
        Empresa.objects.create(CNPJ='85669919000125', razao_social='Empresa A')
        Empresa.objects.create(CNPJ='22435209000110', razao_social='Empresa B')
        print(self.token)
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.token}')
        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['results']), 2)

    def test_create_empresa(self):
        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.token}')
        empresa_data = {
            'CNPJ': '22400551000185',
            'razao_social': 'Empresa A',
            'nome_fantasia': 'Nome fantasia',
            'CNAE_principal': '123',
        }
        response = self.client.post(self.url, empresa_data)

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Empresa.objects.count(), 1)

    def test_delete_empresa(self):
        empresa = Empresa.objects.create(CNPJ='22435209000110', razao_social='Empresa A')

        self.client.credentials(HTTP_AUTHORIZATION=f'Bearer {self.token}')
        response = self.client.delete(f'/empresa/{empresa.CNPJ}/')
        print(response)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Empresa.objects.count(), 0)
