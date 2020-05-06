import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {Tab, Tabs} from "@material-ui/core";
import TabPanel from "../_common/components/TabPanel";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import IndexScreening from "./IndexScreening";
import FormScreening from "./ScreeningForm/FormScreening";
import {ServiceOrder} from "../../models/serviceOrder";


const useStyle = makeStyles((theme) => ({
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
  },
  containerBottom: {
    paddingBottom: theme.spacing(6)
  }
}));

export default function ScreeningPage (props) {
  const classes = useStyle();

  const {serviceOrders, reloadData, loadingData} = props;

  const [tabValue, setTabValue] = useState(0);
  const [serviceOrder, setServiceOrder] = useState(ServiceOrder({}));

  function changeTab (event, newValue) {
    setTabValue(newValue);
  }

  function handleEditScreening (data) {
    const doc = serviceOrders.find(item => item.numero_ordem_servico === data.numero_ordem_servico);
    setServiceOrder(Object.assign({}, doc));
    setTabValue(1)
  }

  function updateServiceOrder(value) {
    setServiceOrder(Object.assign({}, serviceOrder, value))
  }

  return (<React.Fragment>
    <Container>
      <Grid container className={classes.titleList}>
        <Grid item xs={12}>
          <Tabs
            value={tabValue} onChange={changeTab}
            variant={"fullWidth"} aria-label={'abas-triagem'} centered
          >
            <Tab label={"Ordens de Serviço com triagem"} aria-controls={"lista-equipamentos-triagem"}/>
            <Tab label={"Formulário de triagem"} aria-controls={"formulário-triagem"}/>
          </Tabs>
        </Grid>
      </Grid>
      <TabPanel value={tabValue} index={0}>
        <IndexScreening serviceOrders={serviceOrders} editScreening={handleEditScreening} loadingData={loadingData}/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <FormScreening serviceOrder={serviceOrder} updateServiceOrder={updateServiceOrder} reloadData={reloadData}/>
      </TabPanel>
    </Container>
  </React.Fragment>);
}