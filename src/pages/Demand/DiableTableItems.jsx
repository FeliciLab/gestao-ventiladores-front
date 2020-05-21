import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import TableCheckedList from '../_common/SelectableTable/TableCheckedList';


const headerData = [
  { id: 'nome', name: 'Nome' },
  { id: 'tipo', name: 'Tipo' },
  { id: 'quantidade', name: 'Quantidade' },
  { id: 'descricao', name: 'Descrição' },
  { id: 'valor', name: 'Valor' },
  { id: 'prioridade', name: 'Prioridade' },
];

const DialogTableItems = (props) => {
  const history = useHistory();

  const { dataTable } = props;

  const actionPrint = (data) => {
    history.push({
      pathname: '/order-items',
      state: {
        data: dataTable.itens.filter((item) => data.find((d) => d.nome === item.nome)),
      },
    }, [dataTable]);
  };

  return (
    <TableCheckedList
      dataTable={dataTable}
      selectKeyField="nome"
      headerTable={headerData}
      actionFunction={actionPrint}
      actionBarTitle="Lista de Itens"
      actionBarTextButton="Gerar Ordem de Compra"
    />
  );
};

DialogTableItems.propTypes = {
  dataTable: PropTypes.instanceOf(Object).isRequired,
};

export default DialogTableItems;
