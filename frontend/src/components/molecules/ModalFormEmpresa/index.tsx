import React from 'react';
import { Modal, Form, Input } from 'antd';
import InputMask from 'react-input-mask';


interface ModalFormEmpresaProps {
    modalMode: 'create' | 'update' | undefined;
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    handleModalOk: () => void;
    handleModalCancel: () => void;
    form: any;
}

const ModalFormEmpresa: React.FC<ModalFormEmpresaProps> = ({
    modalMode,
    modalVisible,
    handleModalOk,
    handleModalCancel,
    form,
}) => (
    <Modal
        title={modalMode === 'create' ? 'Cadastrar Empresa' : 'Editar Empresa'}
        open={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
    >
        <Form form={form}>
            <Form.Item
                label="CNPJ"
                name="CNPJ"
                rules={[
                    { required: true, message: 'Insira o CNPJ!' },
                    {
                        pattern: /^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}|\d{14})$/,
                        message: 'CNPJ inválido!',
                    },
                ]}
            >
                <InputMask mask="99.999.999/0009-99" maskChar="" disabled={modalMode === 'update'}>
                    {(inputProps: any) => <Input {...inputProps} disabled={modalMode === 'update'} />}
                </InputMask>
            </Form.Item>
            <Form.Item
                label="Razão Social"
                name="razao_social"
                rules={[{ required: true, message: 'Insira a Razão Social!' }]}
            >
                <Input disabled={modalMode === 'update'} />
            </Form.Item>
            <Form.Item
                label="Nome Fantasia"
                name="nome_fantasia"
                rules={[{ required: true, message: 'Insira o Nome Fantasia!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="CNAE Principal"
                name="CNAE_principal"
                rules={[{ required: true, message: 'Insira o CNAE Principal!' }]}
            >
                <Input />
            </Form.Item>
        </Form>
    </Modal>
);

export default ModalFormEmpresa;