class MultipleSerializerClassMixin(object):
    def get_serializer_class(self):
        """
        Uma classe que herda esses mixins deve ter variável
        `serializer_action_classes`.
        Esse mixin busca por self.serializer_action_classes, que
        deve ser um dict onde a chave é para a action e o valor para o serializer,
        i.e.:
        class ExemploViewSet(viewsets.ViewSet):
            serializer_class = DocumentSerializer
            serializer_action_classes = {
               'upload': UploadDocumentSerializer,
               'download': DownloadDocumentSerializer,
            }
            @action
            def custom_action:
                ...
        Possui um fallback para o get_serializer_class padrão.
        """
        try:
            return self.serializer_action_classes[self.action]
        except (KeyError, AttributeError):
            return super().get_serializer_class()
