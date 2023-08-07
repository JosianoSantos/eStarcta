FROM python:3.11

EXPOSE 8000
WORKDIR /usr/src/app

RUN pip install --upgrade pip

COPY py-requirements /usr/src/app
RUN pip install -r base.txt
RUN pip install -r dev.txt

# copy project
COPY src /usr/src/app

CMD ["python", "manage.py", "migrate"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
