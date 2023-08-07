from django.core.exceptions import ValidationError
from django.core.validators import BaseValidator
from validate_docbr import CNPJ


class CnpjValidator(BaseValidator):
    def __init__(self, message=None, code=None):
        message = "CNPJ inváldo"
        super().__init__(message, code)

    def __call__(self, value):
        if not CNPJ().validate(value):
            raise ValidationError(self.message, code=self.code)
