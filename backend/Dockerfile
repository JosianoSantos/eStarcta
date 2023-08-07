FROM python:3.11

EXPOSE 8000
WORKDIR /usr/src/app

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN pip install --upgrade pip

COPY /src/requirements.txt /usr/src/app
RUN pip install -r requirements.txt

# copy project
COPY src /usr/src/app

CMD ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]