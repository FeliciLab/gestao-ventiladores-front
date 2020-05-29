import React from 'react';
import PropTypes from 'prop-types';
import { orange } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper';
import TableCheckedList from '../_common/SelectableTable/TableCheckedList';

const ItemsPage = (props) => {
  const { items } = props;
  const selectKeyField = 'nome';

  const headerData = [
    { id: 'tipo', name: 'Tipo' },
    { id: 'fabricante', name: 'Fabricante' },
    { id: 'codigo', name: 'Código' },
    { id: 'nome', name: 'Nome' },
    { id: 'unidade_medida', name: 'Unidade de Medida' },
    { id: 'quantidade', name: 'Quantidade' },
    { id: 'descricao', name: 'Descrição' },
  ];

  const editItem = () => {};

  const mergeItems = () => {};

  const actions = [
    {
      name: 'Editar',
      handleEvent: editItem,
      icon: {
        bgColor: orange[500],
        hoverColor: orange[700],
        icon: <EditIcon />,
      },
    },
  ];

  return (
    <>
      <Paper>
        <TableCheckedList
          actions={actions}
          dataTable={items}
          selectKeyField={selectKeyField}
          headerTable={headerData}
          actionFunction={mergeItems}
          actionBarTitle="Lista de Items (Nenhum item selecionado)"
          actionBarTextButton="Mesclar itens"
        />
      </Paper>
    </>
  );
};

ItemsPage.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
};

export default ItemsPage;
