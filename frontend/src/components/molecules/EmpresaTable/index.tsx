import { Table, Input, Select, Button } from 'antd';

const { Column } = Table;
const { Option } = Select;


interface TableMoleculeProps {
  data: any[];
  pagination: any;
  handleEdit: (record: any) => void;
  handleDelete: (record: any) => void;
  setCurrentPage: (page: number) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  ordering: string;
  setOrdering: (query: string) => void;
  fetchData: () => void;
  currentPage: number;
  limit: number;
  setLimit: (limit: number) => void;
}


export const EmpresaTable: React.FC<TableMoleculeProps> = ({
  data,
  pagination,
  currentPage,
  searchQuery,
  ordering,
  limit,
  handleEdit,
  handleDelete,
  setCurrentPage,
  setSearchQuery,
  fetchData,
  setOrdering,
  setLimit }) => (


  <div>

    <div>
      <Select value={ordering} onChange={setOrdering}>
        <Option value=""> Ordenar por </Option>
        <Option value="CNPJ">CNPJ</Option>
        <Option value="razao_social">Razão Social</Option>
        <Option value="nome_fantasia">Nome Fantasia</Option>
        <Option value="CNAE_principal">CNAE Principal</Option>
      </Select>

      <Input.Search
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Busca"
        onSearch={fetchData}
        style={{ width: 200, margin: '0 10px' }}
      />

      <Select
        value={limit}
        onChange={(value: number) => setLimit(value)}
      >
        <Option value={25}>Registros por página</Option>
        <Option value={50}>50</Option>
        <Option value={100}>100</Option>
      </Select>
    </div>

    <br /><br />
    <Table dataSource={data} pagination={false}>
      <Column title="CNPJ" dataIndex="CNPJ" key="CNPJ" />
      <Column title="Razão Social" dataIndex="razao_social" key="razao_social" />
      <Column title="Nome Fantasia" dataIndex="nome_fantasia" key="nome_fantasia" />
      <Column title="CNAE Principal" dataIndex="CNAE_principal" key="CNAE_principal" />
      <Column
        title="Ações"
        key="action"
        render={(text, record) => (
          <span>
            <Button onClick={() => handleEdit(record)}>Alterar</Button>
            <Button onClick={() => handleDelete(record)}>Excluir</Button>
          </span>
        )}
      />

    </Table>

    <div>
      <br />
      {pagination && (
        <div>
          <Button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={!pagination.previous}
          >
            Anterior
          </Button>
          <span> Página {searchQuery ? 1 : currentPage} </span>
          <Button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={!pagination.next}
          >
            Próxima
          </Button>
        </div>
      )}
    </div>

  </div>

);

export default EmpresaTable;