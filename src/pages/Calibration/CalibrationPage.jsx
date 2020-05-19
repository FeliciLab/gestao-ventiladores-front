import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Tab, Tabs } from '@material-ui/core';
import TabPanel from '../_common/components/TabPanel';
import ListServiceOrderDiagnosisCalibration from './ListServiceOrderDiagnosisCalibration';


const CalibrationPage = (props) => {
  const classes = useStyles();

  const {serviceOrders} = props;

  const [tabValue, setTabValue] = useState(0);

  function changeTab (event, newValue) {
    setTabValue(newValue);
  }

  return (<React.Fragment>
    <Container className={classes.containerBottom}>
      <Grid container className={classes.titleList}>
        <Grid item xs={'auto'}>
          <Tabs
            value={tabValue} onChange={changeTab}
            variant={"fullWidth"} aria-label={'Abas de listagens de ordens de serviços'} centered
          >
            <Tab label={"Ordens de serviço para calibragem"} aria-controls={"lista-items-quantidade"}/>
          </Tabs>
        </Grid>
      </Grid>
      <TabPanel value={tabValue} index={0}>
        <ListServiceOrderDiagnosisCalibration
          serviceOrders={serviceOrders}
        />
      </TabPanel>
    </Container>
  </React.Fragment>);
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

export default CalibrationPage;