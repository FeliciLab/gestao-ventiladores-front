import React, {useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import {makeStyles} from "@material-ui/core/styles";
import NewPurchaseOrderDialog from "./NewPurchaseOrderDialog";

const headerData = [
  {id: "tipo", name: "Tipo"},
  {id: "nome", name: "Nome do item"},
  {id: "unidade_medida", name: "Unidade"},
  {id: "quantidade", name: "Quantidade"},
  {id: "fabricante", name: "Fabricante"},
  {id: "codigo", name: "Código do item"},
];

const ListItemServiceOrder = (props) => {
  useEffect(() => {
    async function setData () {
      await setDataTable(Object.values(props.itemsServiceOrder).map(item => {
        const purchased = props.itemsPurchaseOrder[item.nome] ? props.itemsPurchaseOrder[item.nome].quantidade : 0;
        console.log(item.nome, purchased)
        return {
          "tipo": item.tipo || '',
          "nome": item.nome,
          "unidade_medida": item.unidade_medida || '',
          "quantidade": item.quantidade - purchased || 0,
          "fabricante": item.fabricante || '',
          "codigo": item.codigo || '',
        };
      })
        .filter(item => item.quantidade > 0)
        .sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))
      );
    }

    setData();
  }, [props]);

  const classes = useStyle();
  const {itemsServiceOrder, reloadData} = props;

  const [dataTable, setDataTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState([]);

  function toogleDialog (value) {
    setOpenDialog(value);
  }

  function createNewBuyOrderDialog (dataChecked) {
    setDataDialog(dataChecked.map(data => itemsServiceOrder[data.nome]));
    setOpenDialog(true);
  }

  return (<React.Fragment>
    <Grid container justify={"space-between"} className={classes.titleList}>
      <Grid item xs={"auto"}>
        <Typography variant={"h5"} component={"h5"}>
          Ordens de serviço com diagnóstico e itens cadastrados
        </Typography>
      </Grid>
      <Grid item xs={"auto"}></Grid>
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
  </React.Fragment>);
};




const useStyle = makeStyles((theme) => ({
  titleList: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

export default ListItemServiceOrder;