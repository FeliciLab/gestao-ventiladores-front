import React, {useState} from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@material-ui/core";
import ColorIconButton from "../_common/forms/ColorIconButton";
import PrintIcon from '@material-ui/icons/Print';
import EditIcon from '@material-ui/icons/Edit';
import {useHistory} from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {blue} from "@material-ui/core/colors";
import EditDialogPurchaseOrder from "./EditDialogPurchaseOrder";


const PurchaseOrderTable = (props) => {
  const classes = useStyle();
  const history = useHistory();

  const {purchaseOrders, reloadData} = props;

  const [openDialog, setOpenDiaglog] = useState(false);
  const [purchaseOrder, setPurchaseOrder] = useState({});
  const [dataDialog, setDataDialog] = useState([]);

  const headerTable = [
    {id: 'numero_ordem_compra', label: 'Ordem de Compra'},
    {id: 'itens', label: 'Itens da OC'},
    {id: 'action', label: 'Ações'}
  ];

  function toogleDialog (value) {
    setOpenDiaglog(value)
  }

  function editOrder (order) {
    setPurchaseOrder(order)
    setDataDialog(order.itens)
    setOpenDiaglog(true)
  }

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
          {purchaseOrders.map((_purchaseOrder, indexPurchaseOrder) => (
            <TableRow key={indexPurchaseOrder}>
              {headerTable.map((head, indexHead) => {
                if (head.id === 'itens') {
                  return <TableCell key={indexHead}>
                    <div className={classes.tableRow}>

                      {_purchaseOrder['itens'].map((item, indexItem) => (
                        <Typography key={indexItem} variant={'body2'}>{item.nome}: {item.quantidade}</Typography>
                      ))}
                    </div>
                  </TableCell>;
                }

                if (head.id === 'action') {
                  return (
                    <TableCell key={indexHead}>
                      <span className={classes.actionButtons}>

                      <ColorIconButton
                        item={_purchaseOrder}
                        action={editOrder}
                        name={"Editar"}
                        icon={{icon: <EditIcon/>}}
                      />
                      </span>
                      <ColorIconButton
                        item={_purchaseOrder}
                        action={handlePrint}
                        name={"Imprimir"}
                        icon={{icon: <PrintIcon/>, bgColor: blue[600], hoverColor: blue[800]}}
                      />
                    </TableCell>
                  );
                }

                return <TableCell key={indexHead}>{_purchaseOrder[head.id]}</TableCell>;
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
  </React.Fragment>);
};

const useStyle = makeStyles((theme) => ({
  tableRow: {
    maxHeight: "84px",
    overflowY: "auto"
  },
  actionButtons: {
    marginRight: theme.spacing(1)
  }
}));

const headerData = [
  {id: "tipo", name: "Tipo"},
  {id: "nome", name: "Nome do item"},
  {id: "unidade_medida", name: "Unidade"},
  {id: "quantidade", name: "Quantidade"},
  {id: "fabricante", name: "Fabricante"},
  {id: "codigo", name: "Código do item"},
];

export default PurchaseOrderTable;