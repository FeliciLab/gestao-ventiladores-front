import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ThemeButton from '../../_common/forms/ThemeButton';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import FormScreening from './FormScreening';
import FullDialog from '../../_common/components/FullDialog';
import {
  deleteEquipmentRequest,
  mapEquipmentRequest,
  saveNewEquipment,
  updateEquipment,
} from '../../../modelServices/equipamentoService';
import {
  mapModelRequest,
  saveNewOrderService,
  updateServiceOrderRequest,
} from '../../../modelServices/serviceOrderService';
import { useForm } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Alert from '@material-ui/lab/Alert';


const ScreeningDialogForm = (props) => {
  const classes = useStyle();
  const {register, errors, triggerValidation} = useForm({mode: 'onBlur', reValidateMode: 'onChange'});

  const {
    serviceOrder,
    editingForm,
    openFormDialog,
    handleClose,
    titleFormModal,
    setOpenFormDialog,
    reloadData,
    setAlertSuccess,
    setShowAlert
  } = props;

  const [serviceOrderForm, setServiceOrderForm] = useState({});
  const [errorsFound, setErrorsFound] = useState(false);

  useEffect(handleEffect, [serviceOrder]);

  function handleEffect () {
    setServiceOrderForm(Object.assign({}, serviceOrder));
  }

  function updateFormModel (value) {
    setServiceOrderForm(Object.assign(serviceOrderForm, value));
  }

  function showErrorBar () {
    setErrorsFound(true);
    setTimeout(() => {
      setErrorsFound(false);
    }, 5000);
  }

  async function saveEquipment (equipment) {
    try {
      if (equipment._id && equipment._id !== '') {
        await updateEquipment(equipment);
        return equipment._id;
      }

      const equip = await saveNewEquipment(equipment);
      return equip._id;
    } catch (e) {
      console.log('falha ao salvar equipamento', e);
      return false;
    }
  }

  async function saveScreening (screening, equipmentId) {
    const screen = Object.assign(
      {},
      screening,
      {acessorios: screening.triagem.acessorios.filter(
        item => item !== '' && item.acompanha && item.quantidade > 0
        )}
    );

    const order = mapModelRequest(Object.assign({},
      serviceOrder,
      screening,
      {triagem: screen.triagem},
      {equipamento_id: equipmentId}
    ));

    delete order.calibragem
    delete order.diagnostico

    try {
      if (order._id && order._id !== '') {
        await updateServiceOrderRequest(Object.assign(order, {status: 'triagem'}), order._id);
      } else {
        await saveNewOrderService(Object.assign(order, {status: 'triagem'}));
      }

      return true;
    } catch (e) {
      if (!editingForm) {
        deleteEquipmentRequest(equipmentId);
      }

      console.log('falha ao salvar ordem de serviço', e);
      return false;
    }
  }

  async function saveForm () {
    await triggerValidation();
    if (Object.keys(errors).length > 0) {
      showErrorBar();
      return;
    }

    const equipment = Object.assign({}, mapEquipmentRequest(Array.isArray(serviceOrderForm.equipamento) ? serviceOrderForm.equipamento[0] : serviceOrderForm.equipamento));
    console.log(equipment, serviceOrderForm.equipamento)
    const equipmentId = await saveEquipment(equipment);
    if (!equipmentId) {
      return false;
    }

    const saved = saveScreening(serviceOrderForm, equipmentId);

    if (saved) {
      setOpenFormDialog(false);
      setTimeout(() => {
        reloadData();
      }, 1500);
      return;
    }

    setAlertSuccess(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  }

  function closeDialog () {
    handleClose();
  }

  return (<React.Fragment>
    <FullDialog
      open={openFormDialog}
      handleClose={closeDialog}
      title={titleFormModal}
      actionChildren={<React.Fragment>
        <Grid container spacing={2}>
          <Grid item>
            <ThemeButton
              onClick={closeDialog}
              startIcon={<CloseIcon/>}
              variant={'outlined'}
              borderColor={'white'}
            >
              Cancelar
            </ThemeButton>
          </Grid>
          <Grid item>
            <ThemeButton
              startIcon={<SaveIcon/>}
              onClick={saveForm}
              name={'Salvar'}
              color={orange[600]}
              bgColor={'#FFF'}
              hoverColor={orange[50]}
            >
              Salvar
            </ThemeButton>
          </Grid>
        </Grid>
      </React.Fragment>}
    >
      <Grid container spacing={4} className={classes.containerForm}>
        <Grid item xs={12}>
          {errorsFound ?
            <Alert
              color={"error"}
              onClose={() => setErrorsFound(false)}
            >
              Não é possível salvar. Verifique o formulário e preencha os campos
              corretamente.
            </Alert>
            : ''}
        </Grid>
        <Grid item xs={12}>
          <FormScreening
            register={register}
            errors={errors}
            editingForm={editingForm}
            serviceOrder={serviceOrderForm}
            updateFormModel={updateFormModel}
            saveForm={saveForm}
          />
        </Grid>
      </Grid>
    </FullDialog>
  </React.Fragment>);
};

const useStyle = makeStyles(theme => ({
  containerForm: {
    marginTop: theme.spacing(5)
  }
}));

export default ScreeningDialogForm;