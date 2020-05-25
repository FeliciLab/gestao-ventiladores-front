import React, { useEffect, useState } from 'react';
import { Container, Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../_layout/Layout';
import TabPanel from '../_common/components/TabPanel';
import TableScreeningServiceOrders from './TableScreeningServiceOrders';
import TableDiagnosisServiceOrder from './TableDiagnosisServiceOrder';
import { getAllServiceOrder } from '../../modelServices/serviceOrderService';
import LoadingBar from '../_common/components/LoadingBar';


const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
}));

const Diagnosis = () => {
  const classes = useStyle();
  const [tabValue, setTabValue] = useState(0);
  const [requestBlock, setRequestBlock] = useState(false);
  const [serviceOrders, setServiceOrders] = useState([]);
  const [progressLoad, setProgressLoad] = useState(0);

  const handleEffect = () => {
    if (!requestBlock) {
      setProgressLoad(30);
      getAllServiceOrder()
        .then((result) => {
          setProgressLoad(70);
          if (!result) return;
          setServiceOrders(result);
          setRequestBlock(true);
        });
    }
  };

  useEffect(handleEffect, [requestBlock, serviceOrders]);

  const reloadData = () => {
    setRequestBlock(false);
    handleEffect();
  };

  const changeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  if (!requestBlock) {
    return <LoadingBar progress={progressLoad} />;
  }

  return (
    <Layout>
      <Container>
        <Grid container style={{ marginBottom: '2rem', marginTop: '2rem' }}>
          <Grid item xs="auto">
            <Tabs
              value={tabValue}
              onChange={changeTab}
              aria-label="Abas de listagens de equipamentos"
              centered
            >
              <Tab
                label="Ordens de Serviço em Triagem"
                aria-controls="equipamentos-com-triagem"
              />
              <Tab
                label="Ordens de Serviço Diagnósticadas"
                aria-controls="equipamentos-com-diagnostico"
              />
            </Tabs>
          </Grid>
        </Grid>

        <TabPanel value={tabValue} index={0}>
          <Paper className={classes.paper}>
            <TableScreeningServiceOrders
              reloadData={reloadData}
              serviceOrderScreening={serviceOrders.filter((item) => item && item.status === 'triagem')}
            />
          </Paper>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <Paper className={classes.paper}>
            <TableDiagnosisServiceOrder
              reloadData={reloadData}
              serviceOrderDiagnosis={serviceOrders.filter((item) => item && item.status === 'diagnostico')}
            />
          </Paper>
        </TabPanel>
      </Container>
    </Layout>
  );
};

export default Diagnosis;
