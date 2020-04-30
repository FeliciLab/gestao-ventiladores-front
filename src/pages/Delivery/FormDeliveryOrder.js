import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import ThemeButton from "../_common/forms/ThemeButton";
import SaveIcon from '@material-ui/icons/Save';
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import TableSearchEquipment from "./FormDelivery/TableSearchEquipment";
import ToInstituteFrom from "./FormDelivery/ToInstituteFrom";
import PersonTransportationForm from "./FormDelivery/PersonTransportationForm";
import {saveDelivery} from "../../modelServices/deliveryOrderService";

export default function FormDeliveryOrder (props) {
  const classes = useStyle();

  const {serviceOrders, realodData} = props;

  const [formModel, setFormModel] = useState({});

  function updateForm (value) {
    setFormModel(Object.assign(formModel, value));
  }

  function saveNewDeliveryOrder () {
    const doc = Object.assign({}, formModel, {tipo: "entregue"});
    doc.equipamentos_id = doc.equipamentos.map(item => (item.equipamento_id));
    saveDelivery(doc)
      .then(() => {
        realodData();
      });
  }

  return (<React.Fragment>
    <CssBaseline/>
    <Grid container justify={'space-between'} alignItems={"center"}>
      <Grid item xs={'auto'}>
        <Typography variant={'h5'}><strong> CADASTRO DE ORDEM DE ENTREGA DE EQUIPAMENTO</strong></Typography>
      </Grid>
      <Grid item xs={'auto'}>
        <ThemeButton onClick={saveNewDeliveryOrder} startIcon={<SaveIcon/>}>SALVAR</ThemeButton>
      </Grid>
    </Grid>

    <Grid container>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>1. Busca do Equipamento</Typography>
          <TableSearchEquipment updateForm={updateForm} serviceOrders={serviceOrders}/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>2. Dados do Destinatário</Typography>
          <ToInstituteFrom updateForm={updateForm} formModel={formModel}/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>3. Dados do responsável pelo transporte</Typography>
          <PersonTransportationForm updateForm={updateForm} formModel={formModel}/>
        </Paper>
      </Grid>
    </Grid>
  </React.Fragment>);
}

const useStyle = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    }
  },
  titlePaper: {
    fontWeight: "bold",
    marginBottom: theme.spacing(3)
  }
}));