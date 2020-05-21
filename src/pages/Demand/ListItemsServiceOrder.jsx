import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import NewPurchaseOrderDialog from './NewPurchaseOrderDialog';
import TableCheckedList from '../_common/SelectableTable/TableCheckedList';

const headerData = [
  { id: 'tipo', name: 'Tipo' },
  { id: 'nome', name: 'Nome do item' },
  { id: 'unidade_medida', name: 'Unidade' },
  { id: 'quantidade', name: 'Quantidade' },
  { id: 'fabricante', name: 'Fabricante' },
  { id: 'codigo', name: 'Código do item' },
];

const useStyle = makeStyles((theme) => ({
  titleList: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const ListItemServiceOrder = (props) => {
  const classes = useStyle();
  const {
    itemsServiceOrder,
    reloadData,
    itemsPurchaseOrder
  } = props;

  const [dataTable, setDataTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState([]);

  const handleEffect = () => {
    setDataTable(
      Object.values(itemsServiceOrder)
        .map((item) => {
          const purchased = itemsPurchaseOrder[item.nome]
            ? itemsPurchaseOrder[item.nome].quantidade
            : 0;
          return {
            tipo: item.tipo || '',
            nome: item.nome,
            unidade_medida: item.unidade_medida || '',
            quantidade: item.quantidade - purchased || 0,
            fabricante: item.fabricante || '',
            codigo: item.codigo || '',
          };
        })
        .filter((item) => item.quantidade > 0)
        .sort((a, b) =>
          a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()),
        ),
    );
  };

  const toogleDialog = (value) => {
    setOpenDialog(value);
  };

  const createNewBuyOrderDialog = (dataChecked) => {
    setDataDialog(dataChecked.map((data) => itemsServiceOrder[data]));
    setOpenDialog(true);
  };

  useEffect(handleEffect, [itemsServiceOrder]);

  return (
    <>
      <Grid container justify="space-between" className={classes.titleList}>
        <Grid item xs="auto">
          <Typography variant="h5" component="h5">
            Ordens de serviço com diagnóstico e itens cadastrados
          </Typography>
        </Grid>
      </Grid>

      <Paper className={classes.paper}>
        <TableCheckedList
          dataTable={dataTable}
          selectKeyField="nome"
          headerTable={headerData}
          actionFunction={createNewBuyOrderDialog}
          actionBarTitle="Lista de Itens"
          actionBarTextButton="Gerar Ordem de Compra"
        />
      </Paper>

      <NewPurchaseOrderDialog
        reloadData={reloadData}
        headerTable={headerData}
        openDialog={openDialog}
        dataDialog={dataDialog}
        toogleDialog={toogleDialog}
      />
    </>
  );
};

ListItemServiceOrder.propTypes = {
  itemsServiceOrder: PropTypes.instanceOf(Array).isRequired,
  reloadData: PropTypes.func.isRequired,
  itemsPurchaseOrder: PropTypes.instanceOf(Array).isRequired,
};

export default ListItemServiceOrder;
