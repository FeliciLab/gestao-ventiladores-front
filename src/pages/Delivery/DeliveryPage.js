import React, {useState} from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {Tab, Tabs} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import TabPanel from "../_common/components/TabPanel";
import FormDeliveryOrder from "./FormDeliveryOrder";
import ListDeliveryOrders from "./ListDeliveryOrders";


const IndexDiagnosis = (props) => {
  const classes = useStyles();

  const {serviceOrders, deliveryOrders, realodData} = props;

  const [tabValue, setTabValue] = useState(0);

  function changeTab (event, newValue) {
    console.log('form', newValue)
    setTabValue(newValue);
  }

  return (
    <React.Fragment>
      <Container>
        <Grid container className={classes.titleList}>
          <Grid item xs={'auto'}>
            <Tabs
              value={tabValue} onChange={changeTab}
              aria-label={'Abas de listagens de ordens de serviços'} centered
            >
              <Tab label={"Formulário de entrega"} aria-controls={"lista-os-entrega"}/>
              <Tab label={"Lista de entregas"} aria-controls={"lista-equipamentos-entregas"}/>
            </Tabs>
          </Grid>
        </Grid>
        <TabPanel value={tabValue} index={0}>
          <FormDeliveryOrder realodData={realodData} serviceOrders={serviceOrders}/>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <ListDeliveryOrders deliveryOrders={deliveryOrders}/>
        </TabPanel>
      </Container>
    </React.Fragment>
  );
};

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
  },
  containerBottom: {
    paddingBottom: theme.spacing(6)
  }
}));
export default IndexDiagnosis;
