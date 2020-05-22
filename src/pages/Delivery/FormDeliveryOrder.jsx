import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import SaveIcon from '@material-ui/icons/Save';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Paper from '@material-ui/core/Paper';
import moment from 'moment-timezone';
import ThemeButton from '../_common/forms/ThemeButton';
import TableSearchEquipment from './FormDelivery/TableSearchEquipment';
import ToInstituteFrom from './FormDelivery/ToInstituteFrom';
import PersonTransportationForm from './FormDelivery/PersonTransportationForm';
import { saveDelivery } from '../../modelServices/deliveryOrderService';
import DeliveryFormInfo from './DeliveryFormInfo';
import EquipmentDetailDelivery from './FormDelivery/EquipmentDetailDelivery';
import { updateManyEquipmentRequest } from '../../modelServices/equipamentoService';


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
  titlePaper: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
  },
}));

const FormDeliveryOrder = (props) => {
  const classes = useStyle();

  const { serviceOrders, realodData } = props;

  const [formModel, setFormModel] = useState({});
  const [servicesOrdersEquipments, setServicesOrdersEquipments] = useState([]);

  const updateForm = (value) => {
    const form = value;
    if (Object.keys(value)[0] === 'equipamentos') {
      form.equipamentos = value.equipamentos.map((item) => ({
        ...item,
        equipamento: item.equipamento[0],
      }));
      setServicesOrdersEquipments(form.equipamentos);
    }
    setFormModel(Object.assign(formModel, value));
  };

  const updateEquipment = (doc, index) => {
    const docs = servicesOrdersEquipments.map((item) => {
      const order = item;
      if ((item._id.$oid || item._id) === index) {
        order.equipamento = { ...item.equipamento, ...doc };
      }
      return order;
    });

    setServicesOrdersEquipments(docs);
    setFormModel({ ...formModel, equipamentos: docs });
  };

  const updateAccessories = (value, _id) => {
    const doc = {};
    doc[_id] = value;
    setFormModel({
      ...formModel,
      acessorios: { ...formModel.acessorios, ...doc },
    });
  };

  const dataEntrega = `${formModel.data_entrega} ${formModel.hora_entrega}:00`;
  const saveNewDeliveryOrder = () => {
    const doc = {
      ...formModel,
      tipo: 'entregue',
      data_entrega: moment(new Date(dataEntrega)).tz('America/Fortaleza'),
      created_at: new Date(),
      updated_at: new Date(),
    };
    delete (doc.hora_entrega);
    doc.equipamentos_id = doc.equipamentos
      .map((item) => (item.equipamento_id.$oid || item.equipamento_id));
    updateManyEquipmentRequest(formModel.equipamentos.map((item) => item.equipamento))
      .then(() => {
        saveDelivery(doc)
          .then(() => {
            realodData();
          });
      });
  };

  return (
    <>
      <CssBaseline />
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs="auto">
          <Typography variant="h5">
            <strong>
              CADASTRO DE ORDEM DE ENTREGA DE EQUIPAMENTO
            </strong>
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <ThemeButton onClick={saveNewDeliveryOrder} startIcon={<SaveIcon />}>SALVAR</ThemeButton>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.titlePaper}>1. Informações</Typography>
            <DeliveryFormInfo updateForm={updateForm} formModel={formModel} />
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.titlePaper}>
              2. Busca do Equipamento
            </Typography>
            <TableSearchEquipment updateForm={updateForm} serviceOrders={serviceOrders} />
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.titlePaper}>
              2.1 Detalhes dos Equipamentos
            </Typography>
            <EquipmentDetailDelivery
              servicesOrdersEquipments={servicesOrdersEquipments}
              formModel={formModel}
              updateEquipment={updateEquipment}
              updateAccessories={updateAccessories}
            />
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.titlePaper}>
              3. Dados do Destinatário
            </Typography>
            <ToInstituteFrom updateForm={updateForm} formModel={formModel} />
          </Paper>
          <Paper className={classes.paper}>
            <Typography variant="h6" className={classes.titlePaper}>
              4. Dados do responsável pelo transporte
            </Typography>
            <PersonTransportationForm updateForm={updateForm} formModel={formModel} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

FormDeliveryOrder.propTypes = {
  serviceOrders: PropTypes.instanceOf(Array).isRequired,
  realodData: PropTypes.func.isRequired,
};

export default FormDeliveryOrder;
