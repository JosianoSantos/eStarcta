from django.db import models


class BaseAbstractModel(models.Model):
    """Base model for all other that need timestamps."""

    date_updated = models.DateTimeField('Last update at', auto_now=True)
    date_created = models.DateTimeField('Created at', auto_now_add=True)
    active = models.BooleanField('Active', default=True)

    # Managers
    objects = models.Manager()  # default manager.

    class Meta:
        """Meta."""

        abstract = True
