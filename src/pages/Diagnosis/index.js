import React, {useEffect, useState} from 'react';
import {Container, Grid, Tab, Tabs} from "@material-ui/core";
import Layout from "../_layout/Layout";
import TabPanel from "../_common/components/TabPanel";
import TableScreeningServiceOrders from "./TableScreeningServiceOrders";
import TableDiagnosisServiceOrder from "./TableDiagnosisServiceOrder";
import {getAllServiceOrder} from "../../modelServices/serviceOrderService";

export default function Diagnosis (props) {
  const [tabValue, setTabValue] = useState(0);
  const [requestBlock, setRequestBlock] = useState(false);
  const [serviceOrders, setServiceOrders] = useState([]);

  useEffect(() => {
    if (serviceOrders.length === 0 && !requestBlock) {
      getAllServiceOrder()
        .then(result => {
          if (!result) return;
          setServiceOrders(result);
        })
        .catch(error => {
          console.log('consultando triagem', error);
        });

      setRequestBlock(true);
    }
  }, [requestBlock, serviceOrders]);


  function changeTab (event, newValue) {
    setTabValue(newValue);
  }

  return (
    <Layout>
      <Container>
        <Grid container style={{marginTop: '2rem'}}>
          <Grid item xs={12}>
            <Tabs
              value={tabValue} onChange={changeTab}
              variant={"fullWidth"} aria-label={'Abas de listagens de equipamentos'} centered
            >
              <Tab label={"OS em Triagens"} aria-controls={"equipamentos-com-triagem"}/>
              <Tab label={"OS em Diagnósticos"} aria-controls={"equipamentos-com-diagnostico"}/>
            </Tabs>
          </Grid>
        </Grid>


        <TabPanel value={tabValue} index={0}>
          <TableScreeningServiceOrders serviceOrderScreening={serviceOrders.filter(item => item && item.status === 'triagem')}/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <TableDiagnosisServiceOrder serviceOrderDiagnosis={serviceOrders.filter(item => item && item.status === 'diagnostico')}/>
        </TabPanel>
      </Container>
    </Layout>
  );
}