import React, {useState} from "react";
import Layout from "../_layout/Layout";
import Container from "@material-ui/core/Container";
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import DialogItems from "./DialogItems";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";

const headerData = [
  {id: "tipo", name: "Tipo"},
  {id: "nome", name: "Nome do item"},
  {id: "unidade_medida", name: "Unidade"},
  {id: "quantidade", name: "Quantidade"},
  {id: "fabricante", name: "Fabricante"},
  {id: "codigo", name: "Código do item"},
];

const IndexDemand = (props) => {
  const classes = useStyles();
  const [requestBlock, setRequestBlock] = useState(false);
  const [serviceOrder, setServiceOrder] = useState([]);
  const [items, setItems] = useState({});
  const [dataTable, setDataTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState([]);

  if (serviceOrder.length === 0 && !requestBlock) {
    getAllServiceOrder()
      .then(async (result) => {
        if (!result) return;
        await setServiceOrder(result);
        const _items = getListItemsDistinct(result);
        await setItems(_items);
        await setDataTable(getItemsDataTable(_items));
      })
      .catch((error) => {
        console.log("consultando triagem", error);
      });
    setRequestBlock(true);
  }

  function getListItemsDistinct (result) {
    return result.filter((item) => {
      return item.status === 'diagnostico' && item.diagnostico && item.diagnostico.itens.length > 0;
    })
      .map(item => item.diagnostico.itens)
      .reduce((acc, curr) => {
        for (let item of curr) {
          if (!acc.hasOwnProperty(item.nome)) {
            acc[item.nome] = item;
            acc[item.nome]['quantidade'] = 0;
          }

          acc[item.nome]['quantidade'] += item.quantidade || 0;
        }
        return acc;
      }, {});
  }

  function getItemsDataTable (_items) {
    return Object.values(_items).map(item => {
      return {
        "tipo": item.tipo || '',
        "nome": item.nome,
        "unidade_medida": item.unidade_medida || '',
        "quantidade": item.quantidade || 0,
        "fabricante": item.fabricante || '',
        "codigo": item.codigo || '',
      };
    })
      .sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))
      .sort((a, b) => b.quantidade - a.quantidade);
  }

  function toogleDialog (value) {
    setOpenDialog(value);
  }

  function createNewBuyOrderDialog (dataChecked) {
    setDataDialog(dataChecked.map(data => items[data.nome]));
    setOpenDialog(true);
  }

  return (
    <div>
      <Layout>
        <Container>
          <div style={{marginTop: "2rem"}}>
            <Grid container justify={"space-between"}>
              <Grid item xs={"auto"}>
                <Typography variant={"h5"} component={"h5"}>
                  Ordens de serviço com diagnóstico e itens cadastrados
                </Typography>
              </Grid>
              <Grid item xs={"auto"}></Grid>
            </Grid>
          </div>

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
        </Container>
      </Layout>
      <DialogItems
        headerTable={headerData}
        openDialog={openDialog}
        dataDialog={dataDialog}
        toogleDialog={toogleDialog}
      />
    </div>
  );
};

export default IndexDemand;

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
}));
