from django.contrib.auth import authenticate, logout, login
from django.contrib.auth.models import User
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken


class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        if 'email' not in request.data or 'password' not in request.data:
            return Response({'msg': 'Envie e-mail e senha.'}, status=status.HTTP_400_BAD_REQUEST)
        user = authenticate(request, username=request.data.get('email'), password=request.data.get('password'))
        if user is not None:
            login(request, user)
            auth_data = get_tokens_for_user(request.user)
            return Response({'msg': 'Login realizado com sucesso.', **auth_data}, status=status.HTTP_200_OK)
        return Response({'msg': 'Dados inválidos.'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        logout(request)
        return Response({'msg': 'Logout realizado com sucesso.'}, status=status.HTTP_200_OK)


def get_tokens_for_user(user: User) -> dict:
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }
