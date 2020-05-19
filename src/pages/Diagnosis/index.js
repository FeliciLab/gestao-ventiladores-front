import React, {useEffect, useState} from 'react';
import {Container, Grid, Tab, Tabs} from "@material-ui/core";
import Layout from "../_layout/Layout";
import TabPanel from "../_common/components/TabPanel";
import TableScreeningServiceOrders from "./TableScreeningServiceOrders";
import TableDiagnosisServiceOrder from "./TableDiagnosisServiceOrder";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import LoadingBar from "../_common/components/LoadingBar";


const useStyle = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3)
  },
}));

export default function Diagnosis (props) {
  const classes = useStyle();
  const [tabValue, setTabValue] = useState(0);
  const [requestBlock, setRequestBlock] = useState(false);
  const [serviceOrders, setServiceOrders] = useState([]);
  const [progressLoad, setProgressLoad] = useState(0);

  useEffect(handleEffect, [requestBlock, serviceOrders]);

  function handleEffect () {
    if (!requestBlock) {
      setProgressLoad(30);
      getAllServiceOrder()
        .then(result => {
          setProgressLoad(70);
          if (!result) return;
          setServiceOrders(result);
          setRequestBlock(true);
        })
        .catch(error => {
          console.log('consultando triagem', error);
        });
    }
  }

  function reloadData () {
    setRequestBlock(false);
    handleEffect();
  }

  function changeTab (event, newValue) {
    setTabValue(newValue);
  }

  if (!requestBlock) {
    return <LoadingBar
      progress={progressLoad}
    />;
  }

  return (
    <Layout>
      <Container>
        <Grid container style={{marginBottom: '2rem', marginTop: '2rem'}}>
          <Grid item xs={'auto'}>
            <Tabs value={tabValue} onChange={changeTab} aria-label={'Abas de listagens de equipamentos'} centered>
              <Tab label={"Ordens de Serviço sem Diagnóstico"} aria-controls={"equipamentos-com-triagem"}/>
              <Tab label={"Ordens de Serviço com Diagnóstico"} aria-controls={"equipamentos-com-diagnostico"}/>
            </Tabs>
          </Grid>
        </Grid>

        <TabPanel value={tabValue} index={0}>
          <Paper className={classes.paper}>
            <TableScreeningServiceOrders
              reloadData={reloadData}
              serviceOrderScreening={serviceOrders.filter(item => item && item.status === 'triagem')}
            />
          </Paper>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Paper className={classes.paper}>
            <TableDiagnosisServiceOrder
              reloadData={reloadData}
              serviceOrderDiagnosis={serviceOrders.filter(item => item && item.status === 'diagnostico')}
            />
          </Paper>
        </TabPanel>
      </Container>
    </Layout>
  );
}