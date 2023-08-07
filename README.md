Como uma melhoria á o teste solicitado, foi unificado a tarefa de frontend e backend, fazendo uma integração entre as
funcionalidades:

No frontend, há um CRUD de empresas, com paginação, busca e ordenação, que por sua vez, consome a API onde há os
endpoints de gestão das mesmas.

Dados fictícios de empresas foram gerados utilizado a biblioteca Faker.

# Backend

### Requisitos

- **Python 3.11**
- **Django 4.2.4**
- **Django Rest Framework 3.14.0**

## Tecnologias Utilizadas

O projeto foi criado utilizando o Django Rest Framework, proporcionando uma estrutura robusta para o desenvolvimento da
API. A documentação da API foi construída utilizando o Swagger, facilitando a compreensão e teste dos endpoints. Para as
views, foram utilizados os viewsets, que simplificam a implementação das funcionalidades.

A autenticação no sistema é feita através do JWT (JSON Web Tokens), oferecendo uma camada adicional de segurança.

## Executando com Docker

Para executar o projeto, siga os seguintes passos:

1. Construa a imagem Docker:

    ```sh
    docker build -t backend .
    ```

2. Execute o contêiner:

    ```sh
    docker run -it -p 8000:8000 backend 
    ```

## Executando sem Docker

Caso deseje executar o projeto sem o uso do Docker, siga as instruções abaixo:

1. Crie uma virtualenv com a biblioteca de sua preferência. Por exemplo, utilizando o `venv`:

    ```sh
    python -m venv myenv
    source myenv/bin/activate
    ```

2. Navegue até a pasta do projeto:

    ```sh
    cd src
    ```

3. Instale as dependências do projeto:

    ```sh
    pip install -r requirements.txt
    ```

4. Inicie o servidor:

    ```sh
    python manage.py runserver 8000
    ```

## Testes

```sh
python manage.py test
```

## Documentação Swagger

Acesse a documentação interativa da API através do Swagger:

[http://localhost:8000/api/swagger](http://localhost:8000/api/swagger)

# ---------------

# Frontend


## Tecnologias Utilizadas

- Frameworks e libs: Next.js, Ant Design e Styled Components para a criação de estilos.
- Máscaras: Utilizada a biblioteca "masked input" para aplicar máscaras em campos de entrada.
- Requisições: Utilizada a biblioteca Axios para realizar requisições à API.

## Executando com Docker

Para executar o projeto utilizando Docker. Basta executar os seguintes comandos:

```bash
docker build -t estracta-frontend .
docker run -p 3000:3000 estracta-frontend
```

Isso irá construir a imagem Docker e executar o contêiner, permitindo que você acesse o frontend
em [http://localhost:3000](http://localhost:3000).

## Executando sem Docker

## Pré-requisitos

Antes de iniciar, certifique-se de que o Node.js está instalado em seu sistema. Caso não esteja, você pode baixá-lo e
instalá-lo a partir do site oficial: [Node.js](https://nodejs.org/).

## Configurações de Ambiente

Para rodar o projeto corretamente, você precisará definir algumas variáveis de ambiente. Crie um arquivo `.env` na raiz
do projeto e adicione as seguintes informações:

```env
BACKEND_URL=http://localhost:8000
```

Primeiramente, instale as dependências do projeto executando o seguinte comando:

```bash
npm install
# ou
yarn install
```

Após instalar as dependências, inicie o servidor de desenvolvimento com os seguintes comandos:

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) em seu navegador para visualizar o resultado.

## Autenticação:

Para testar a autenticação, você pode usar o seguinte usuário de exemplo:

- Email: test@gmail.com
- Senha: teste123

Este usuário foi criado para fins de demonstração e teste.