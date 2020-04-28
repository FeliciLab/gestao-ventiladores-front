import React, {useEffect, useState} from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Tab, Tabs} from "@material-ui/core";
import TabPanel from "../_common/components/TabPanel";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import TableCheckedList from "../_common/SelectableTable/TableCheckedList";
import PurchaseOrderTable from "./PurchaseOrderTable";
import DialogItems from "./DialogItems";
import {makeStyles} from "@material-ui/core/styles";

const DemandPage = (props) => {
  useEffect(() => {
    async function getData (props) {
      const data = props.purchaseOrders.slice().reduce((acc, curr, index) => {
        if (curr.itens) {
          for (let item of curr.itens) {
            if (!acc.hasOwnProperty(item.nome)) {
              acc[item.nome] = Object.assign({}, item);
              acc[item.nome]['quantidade'] = 0;
            }
            acc[item.nome]['quantidade'] += item.quantidade;
          }
        }

        return acc;
      }, {});

      await setPurchaseOrderItems(data);

      const _items = props.serviceOrders.filter((item) => {
        return item.status === 'diagnostico' && item.diagnostico && item.diagnostico.itens.length > 0;
      })
        .map(item => item.diagnostico.itens)
        .reduce((acc, curr) => {
          for (let item of curr) {
            acc = defineItemList(acc, item);
          }
          return acc;
        }, {});

      await setItems(_items);
      await setDataTable(Object.values(_items).map(item => {
        const ammountPurshased = data[item.nome] ? data[item.nome].quantidade : 0;
        return {
          "tipo": item.tipo || '',
          "nome": item.nome,
          "unidade_medida": item.unidade_medida || '',
          "quantidade": item.quantidade - ammountPurshased || 0,
          "fabricante": item.fabricante || '',
          "codigo": item.codigo || '',
        };
      })
        .filter(item => item.quantidade > 0)
        .sort((a, b) => a.nome.toUpperCase().localeCompare(b.nome.toUpperCase()))
        .sort((a, b) => b.quantidade - a.quantidade));
    }

    getData(props);
  }, [props]);

  const {purchaseOrders, reloadData} = props;

  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [items, setItems] = useState({});
  const [dataTable, setDataTable] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dataDialog, setDataDialog] = useState([]);
  const [purchaseOrderItems, setPurchaseOrderItems] = useState([]);

  function toogleDialog (value) {
    console.log(purchaseOrderItems);
    setOpenDialog(value);
  }

  function createNewBuyOrderDialog (dataChecked) {
    setDataDialog(dataChecked.map(data => items[data.nome]));
    setOpenDialog(true);
  }

  function changeTab (event, newValue) {
    setTabValue(newValue);
  }

  return (
    <React.Fragment>
      <Container>
        <Grid container className={classes.titleList}>
          <Grid item xs={12}>
            <Tabs
              value={tabValue} onChange={changeTab}
              variant={"fullWidth"} aria-label={'Abas de listagens de ordens de serviços'} centered
            >
              <Tab label={"Demanda de materiais"} aria-controls={"lista-items-quantidade"}/>
              <Tab label={"Ordens de compra"} aria-controls={"lista-ordens-de-compra"}/>
            </Tabs>
          </Grid>
        </Grid>

        <TabPanel value={tabValue} index={0}>
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
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Grid container justify={"space-between"} className={classes.titleList}>
            <Grid item xs={"auto"}>
              <Typography variant={"h5"} component={"h5"}>
                Ordens de compras cadatradas
              </Typography>
            </Grid>
            <Grid item xs={"auto"}></Grid>
          </Grid>

          <Paper className={classes.paper}>
            <PurchaseOrderTable purchaseOrders={purchaseOrders}/>
          </Paper>
        </TabPanel>

      </Container>
      <DialogItems
        reloadData={reloadData}
        headerTable={headerData}
        openDialog={openDialog}
        dataDialog={dataDialog}
        toogleDialog={toogleDialog}
      />
    </React.Fragment>
  );
};


const headerData = [
  {id: "tipo", name: "Tipo"},
  {id: "nome", name: "Nome do item"},
  {id: "unidade_medida", name: "Unidade"},
  {id: "quantidade", name: "Quantidade"},
  {id: "fabricante", name: "Fabricante"},
  {id: "codigo", name: "Código do item"},
];

function getListItemsDistinct (result) {
  return result.filter((item) => {
    return item.status === 'diagnostico' && item.diagnostico && item.diagnostico.itens.length > 0;
  })
    .map(item => item.diagnostico.itens)
    .reduce((acc, curr) => {
      for (let item of curr) {
        acc = defineItemList(acc, item);
      }
      return acc;
    }, {});
}

function defineItemList (acc, item) {
  if (!acc.hasOwnProperty(item.nome)) {
    acc[item.nome] = item;
    acc[item.nome]['quantidade'] = 0;
  }

  acc[item.nome]['quantidade'] += item.quantidade || 0;
  return acc;
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
  titleList: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));
export default DemandPage;