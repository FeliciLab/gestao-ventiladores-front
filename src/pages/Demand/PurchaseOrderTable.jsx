import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { blue } from '@material-ui/core/colors';
import EditDialogPurchaseOrder from './EditDialogPurchaseOrder';
import ColorIconButton from '../_common/forms/ColorIconButton';
import { randomIndex } from '../../utils';

const useStyle = makeStyles((theme) => ({
  tableRow: {
    maxHeight: '84px',
    overflowY: 'auto',
  },
  actionButtons: {
    marginRight: theme.spacing(1),
  },
}));

const headerData = [
  { id: 'tipo', name: 'Tipo' },
  { id: 'nome', name: 'Nome do item' },
  { id: 'unidade_medida', name: 'Unidade' },
  { id: 'quantidade', name: 'Quantidade' },
  { id: 'fabricante', name: 'Fabricante' },
  { id: 'codigo', name: 'Código do item' },
];

const PurchaseOrderTable = (props) => {
  const classes = useStyle();
  const history = useHistory();

  const {
    purchaseOrders,
    reloadData,
  } = props;

  const [openDialog, setOpenDiaglog] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState({});
  const [dataDialog, setDataDialog] = useState([]);

  const headerTable = [
    { id: 'numero_ordem_compra', label: 'Ordem de Compra' },
    { id: 'itens', label: 'Itens da OC' },
    { id: 'action', label: 'Ações' },
  ];

  const toogleDialog = (value) => {
    setOpenDiaglog(value);
  };

  const editOrder = (order) => {
    setPurchaseOrder(order);
    setDataDialog(order.itens);
    setOpenDiaglog(true);
  };

  const handlePrint = (doc) => {
    history.push(
      {
        pathname: '/ordem-compra',
        state: {
          data: doc,
        },
      },
      [doc],
    );
  };

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headerTable.map((head) => (
                <TableCell key={randomIndex()}>{head.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {purchaseOrders.map((rowPurchaseOrder) => (
              <TableRow key={randomIndex()}>
                {headerTable.map((head) => {
                  const indexHead = randomIndex();
                  if (head.id === 'itens') {
                    return (
                      <TableCell key={indexHead}>
                        <div className={classes.tableRow}>
                          {rowPurchaseOrder.itens.map((item) => (
                            <Typography key={randomIndex()} variant="body2">
                              { item.nome }
                              : { item.quantidade }
                            </Typography>
                          ))}
                        </div>
                      </TableCell>
                    );
                  }

                  if (head.id === 'action') {
                    return (
                      <TableCell key={indexHead}>
                        <span className={classes.actionButtons}>
                          <ColorIconButton
                            item={rowPurchaseOrder}
                            action={editOrder}
                            name={'Editar'}
                            icon={{ icon: <EditIcon /> }}
                          />
                        </span>
                        <ColorIconButton
                          item={rowPurchaseOrder}
                          action={handlePrint}
                          name={'Imprimir'}
                          icon={{
                            icon: <PrintIcon />,
                            bgColor: blue[600],
                            hoverColor: blue[800],
                          }}
                        />
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={indexHead}>
                      {rowPurchaseOrder[head.id]}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditDialogPurchaseOrder
        purchaseOrder={purchaseOrder}
        reloadData={reloadData}
        headerTable={headerData}
        openDialog={openDialog}
        dataDialog={dataDialog}
        toogleDialog={toogleDialog}
      />
    </>
  );
};

export default PurchaseOrderTable;
