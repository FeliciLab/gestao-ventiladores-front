import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@material-ui/core";
import ColorIconButton from "../_common/forms/ColorIconButton";
import PrintIcon from '@material-ui/icons/Print';
import {useHistory} from 'react-router-dom';

const PurchaseOrderTable = (props) => {
  const history = useHistory();
  const {purchaseOrders} = props;

  const headerTable = [
    {id: 'numero_ordem_compra', label: 'Ordem de Compra'},
    {id: 'itens', label: 'Itens da OC'},
    {id: 'action', label: 'Ações'}
  ];

  function handlePrint (doc) {
    console.log("print", doc);
    history.push({
      pathname: "/ordem-compra",
      state: {
        data: doc
      }
    }, [doc]);
  }

  return (<React.Fragment>
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {headerTable.map((head, headIndex) => (
              <TableCell key={headIndex}>{head.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {purchaseOrders.map((purchaseOrder, indexPurchaseOrder) => (
            <TableRow key={indexPurchaseOrder}>
              {headerTable.map((head, indexHead) => {
                if (head.id === 'itens') {
                  return <TableCell key={indexHead}>
                    {purchaseOrder['itens'].map((item, indexItem) => (
                      <Typography key={indexItem} variant={'body2'}>{item.nome}: {item.quantidade}</Typography>
                    ))}
                  </TableCell>;
                }

                if (head.id === 'action') {
                  return (
                    <TableCell key={indexHead}>
                      <ColorIconButton
                        item={purchaseOrder}
                        action={handlePrint}
                        name={"Imprimir"}
                        icon={{icon: <PrintIcon/>}}
                      />
                    </TableCell>
                  );
                }

                return <TableCell key={indexHead}>{purchaseOrder[head.id]}</TableCell>;
              })}
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  </React.Fragment>);
};

export default PurchaseOrderTable;