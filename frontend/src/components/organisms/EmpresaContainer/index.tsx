import React, { useState, useEffect } from 'react';
import { Modal, Form, message } from 'antd';
import ModalFormEmpresa from '@/components/molecules/ModalFormEmpresa';
import EmpresaTable from '@/components/molecules/EmpresaTable';

import api from '@/api/api'
import LinearGradientButton from '@/components/atoms/LinearGradientButton';
import { useRouter } from 'next/router';


interface Empresa {
    id: number;
    CNPJ: string;
    razao_social: string;
    nome_fantasia: string;
    CNAE_principal: string;
}

const EmpresaContainer: React.FC = () => {
    const [data, setData] = useState<Empresa[]>([]);
    const [pagination, setPagination] = useState<any>({});
    const [ordering, setOrdering] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalMode, setModalMode] = useState<'create' | 'update' | undefined>();
    const [selectedEmpresa, setSelectedEmpresa] = useState<Empresa | undefined>();
    const [limit, setLimit] = useState<number>(25);
    const [form] = Form.useForm();

    const router = useRouter();


    useEffect(() => {
        if (!localStorage.getItem('access')) {
            router.push('/login');
        }
        fetchData();
    }, [ordering, currentPage, searchQuery, limit]);

    const fetchData = async () => {

        api.empresa.getEmpresas(
            {
                page: searchQuery ? 1 : currentPage,
                ordering,
                search: searchQuery,
                limit: limit,
            },
        ).then(response => {
            setData(response.data.results);
            setPagination(response.data);
        }).catch(error => {
            console.error('Error fetching data:', error);
        })

    };

    const handleCreate = () => {
        setModalMode('create');
        form.resetFields();
        setModalVisible(true);
    };

    const handleEdit = (empresa: Empresa) => {
        setModalMode('update');
        form.setFieldsValue(empresa);
        setSelectedEmpresa(empresa);
        setModalVisible(true);
    };

    const handleDelete = async (empresa: Empresa) => {
        try {
            api.empresa.delete(empresa.CNPJ.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '')).then(() => {
                message.success('Empresa excluída com sucesso.')
                fetchData();
            });

        } catch (error) {
            message.error('Erro ao deletar a empresa.');
        }
    };

    const handleModalOk = async () => {

        let values = await form.validateFields();
        values.CNPJ = values.CNPJ.replaceAll('.', '').replaceAll('/', '').replaceAll('-', '');

        if (modalMode === 'create') {

            api.empresa.create(values,).then(() => {
                message.success('Empesa cadastrada com sucesso!')
                reloadData();
            }).catch((e) => {
                try {
                    let errorMessage: string = "";
                    const errors = e.response.data;
                    for (const fieldName in errors) {
                        if (errors.hasOwnProperty(fieldName)) {
                            const messages = errors[fieldName];
                            errorMessage += '\n' + messages;
                        }
                    }
                    message.error(errorMessage);

                } catch (error) {
                    message.error('Erro ao cadastrar a empresa.');
                }
            });

        } else if (modalMode === 'update' && selectedEmpresa) {

            api.empresa.update(selectedEmpresa.CNPJ.replaceAll('.', '').replaceAll('/', '').replaceAll('-', ''), values).then(() => {
                message.success(`${selectedEmpresa.nome_fantasia} atualizada com sucesso!`)
                reloadData();
            }).catch(() => {
                message.error('Erro ao atualizar a empresa.');
            });

        }

    };

    const handleModalCancel = () => {
        form.resetFields();
        setModalVisible(false);
        setSelectedEmpresa(undefined);
    };

    const showDeleteConfirmation = (empresa: Empresa) => {
        Modal.confirm({
            title: 'Confirmar exclusão',
            content: `Tem certeza que deseja excluir a empresa ${empresa.nome_fantasia}?`,
            onOk: () => handleDelete(empresa),
        });
    };

    const reloadData = () => {
        form.resetFields();
        setModalVisible(false);
        setSelectedEmpresa(undefined);
        fetchData();
    }

    return (
        <div>
            <div >
                <LinearGradientButton text='CADASTRAR EMPRESA' onClick={handleCreate} />
                <br /><br />
            </div>

            <EmpresaTable
                data={data}
                fetchData={fetchData}
                pagination={pagination}
                handleEdit={handleEdit}
                handleDelete={showDeleteConfirmation}
                setCurrentPage={setCurrentPage}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                currentPage={currentPage}
                ordering={ordering}
                setOrdering={setOrdering}
                limit={limit}
                setLimit={setLimit}
            />


            <ModalFormEmpresa
                modalMode={modalMode}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                handleModalOk={handleModalOk}
                handleModalCancel={handleModalCancel}
                form={form}
            />
        </div>
    );
};

export default EmpresaContainer;