import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {
  Tab,
  Tabs,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import PurchaseOrderTable from './PurchaseOrderTable';
import ListItemServiceOrder from './ListItemsServiceOrder';
import TabPanel from '../_common/components/TabPanel';


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
    marginBottom: theme.spacing(3),
  },
  containerBottom: {
    paddingBottom: theme.spacing(6),
  },
}));

const DemandPage = (props) => {
  const classes = useStyles();

  const { purchaseOrders, serviceOrders, reloadData } = props;

  const [tabValue, setTabValue] = useState(0);
  const [itemsServiceOrders, setItemsServiceOrders] = useState({});
  const [itemsPurchaseOrder, setItemsPurchaseOrder] = useState([]);

  const getData = () => {
    const itemsPurchased = purchaseOrders.slice()
      .reduce((acc, curr) => {
        if (curr.itens) {
          curr.itens.forEach((item) => {
            const name = item.nome;
            if (!acc[name]) {
              acc[name] = { ...item };
              acc[name].quantidade = 0;
            }
            acc[name].quantidade += item.quantidade;
          });
        }
        return acc;
      }, {});

    setItemsPurchaseOrder(itemsPurchased);

    setItemsServiceOrders(serviceOrders
      .filter((item) => item.status === 'diagnostico' && item.diagnostico.itens && item.diagnostico.itens.length > 0)
      .map((item) => item.diagnostico.itens)
      .reduce((acc, curr) => {
        const newAcc = { ...acc };
        curr.forEach((item) => {
          const name = item.nome.trim().toLowerCase().replace(/\b/g, '_');
          if (!newAcc[name]) {
            newAcc[name] = { ...item };
            newAcc[name].quantidade = 0;
          }
          newAcc[name].quantidade += item.quantidade || 0;
        });
        return newAcc;
      }, {}));
  };

  useEffect(getData, [purchaseOrders, serviceOrders]);

  function changeTab(event, newValue) {
    setTabValue(newValue);
  }

  return (
    <>
      <Container className={classes.containerBottom}>
        <Grid container className={classes.titleList}>
          <Grid item>
            <Tabs
              value={tabValue}
              onChange={changeTab}
              aria-label="Abas de listagens de ordens de serviços"
              centered
            >
              <Tab label="Demanda de materiais" aria-controls="lista-items-quantidade" />
              <Tab label="Ordens de compra" aria-controls="lista-ordens-de-compra" />
            </Tabs>
          </Grid>
        </Grid>

        <TabPanel value={tabValue} index={0}>
          <ListItemServiceOrder
            reloadData={reloadData}
            itemsServiceOrder={itemsServiceOrders}
            itemsPurchaseOrder={itemsPurchaseOrder}
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Grid container justify="space-between" className={classes.titleList}>
            <Grid item>
              <Typography variant="h5" component="h5">
                Ordens de compras cadatradas
              </Typography>
            </Grid>
          </Grid>

          <Paper className={classes.paper}>
            <PurchaseOrderTable reloadData={reloadData} purchaseOrders={purchaseOrders} />
          </Paper>
        </TabPanel>
      </Container>
    </>
  );
};

DemandPage.propTypes = {
  purchaseOrders: PropTypes.instanceOf(Array).isRequired,
  serviceOrders: PropTypes.instanceOf(Array).isRequired,
  reloadData: PropTypes.func.isRequired,
};

export default DemandPage;
