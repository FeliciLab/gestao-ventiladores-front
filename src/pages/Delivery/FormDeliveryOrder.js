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
import DeliveryFormInfo from "./DeliveryFormInfo";
import moment from "moment-timezone";
import EquipmentDetailDelivery from "./FormDelivery/EquipmentDetailDelivery";


export default function FormDeliveryOrder (props) {
  const classes = useStyle();

  const {serviceOrders, realodData} = props;

  const [formModel, setFormModel] = useState({});
  const [servicesOrdersEquipments, setServicesOrdersEquipments] = useState([]);

  function updateForm (value) {
    if (Object.keys(value)[0] === 'equipamentos') {
      setServicesOrdersEquipments(value.equipamentos.map(item => Object.assign({}, item, {equipamento: item.equipamento[0]})));
    }

    setFormModel(Object.assign(formModel, value));
  }

  function updateEquipment (value, name, index) {
  }

  function updateAccessories (value, _id) {
    const doc = {}
    doc[_id] = value
    setFormModel(Object.assign(formModel, {acessorios: doc}))
  }

  function saveNewDeliveryOrder () {
    const doc = Object.assign({}, formModel, {
      tipo: "entregue",
      data_entrega: moment(new Date(formModel.data_entrega + ' ' + formModel.hora_entrega + ':00')).tz('America/Fortaleza'),
      created_at: new Date(),
      updated_at: new Date()
    });
    delete (doc.hora_entrega);
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
          <Typography variant={'h6'} className={classes.titlePaper}>1. Informações</Typography>
          <DeliveryFormInfo updateForm={updateForm} formModel={formModel}/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>2. Busca do Equipamento</Typography>
          <TableSearchEquipment updateForm={updateForm} serviceOrders={serviceOrders}/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>2.1 Detalhes dos Equipamentos</Typography>
          <EquipmentDetailDelivery
            servicesOrdersEquipments={servicesOrdersEquipments}
            formModel={formModel}
            updateEquipment={updateEquipment}
            updateAccessories={updateAccessories}
          />
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>3. Dados do Destinatário</Typography>
          <ToInstituteFrom updateForm={updateForm} formModel={formModel}/>
        </Paper>
        <Paper className={classes.paper}>
          <Typography variant={'h6'} className={classes.titlePaper}>4. Dados do responsável pelo transporte</Typography>
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