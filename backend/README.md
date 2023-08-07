# Platform backend
Django application for backend

Python 3.11

Django 4.2.3

Django rest framework 3.14.0

# Steps to run on Docker

## 1. Build:
```sh
docker-compose up -d --build
```
## 2. Run
```sh
# To run in foreground
docker-compose up

# To run in background
docker-compose up -d 

# To stop
docker-compose down

# To start Django shell
docker exec -it api python manage.py shell

# To generate a migration
docker exec -it api python manage.py makemigrations

# To apply the migrations
docker exec -it api python manage.py migrate
```

# Steps to run without docker:

### 1. Create a virtualenv the way you want and activate it

### 2. Install requirements
``
pip install -r requirements.txt
``
### 3. Access project folder
``
cd src
``

### 3. Run database migrations
``
python manage.py migrate
``

### Start the server

``
python manage.py runserver 8000
``


## SWAGGER
To open swagger: http://localhost:8000/api/swagger
