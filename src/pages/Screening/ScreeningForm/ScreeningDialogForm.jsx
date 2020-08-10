import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import { useForm } from 'react-hook-form';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Alert from '@material-ui/lab/Alert';
import ThemeButton from '../../_common/forms/ThemeButton';
import FormScreening from './FormScreening';
import {
  deleteEquipmentRequest,
  mapEquipmentRequest,
  saveNewEquipment,
  updateEquipment,
} from '../../../modelServices/equipamentoService';
import {
  saveNewOrderService,
  updateServiceOrderRequest,
} from '../../../modelServices/serviceOrderService';

import { randomIndex } from '../../../utils';
import { FormProvider } from '../../../contexts/FormContext';
import FormDialog from '../../../components/FormDialog/FormDialog'

const ScreeningDialogForm = (props) => {
  const { register, errors, triggerValidation } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const {
    serviceOrder,
    editingForm,
    openFormDialog,
    handleClose,
    titleFormModal,
    setOpenFormDialog,
    reloadData,
    setAlertSuccess,
    setShowAlert,
    items,
  } = props;

  const [serviceOrderForm, setServiceOrderForm] = useState({});
  const [errorsFound, setErrorsFound] = useState(false);

  const showErrorBar = () => {
    setErrorsFound(true);
    setTimeout(() => {
      setErrorsFound(false);
    }, 5000);
  };

  const saveEquipment = async (equipment) => {
    try {
      if (equipment._id && equipment._id !== '') {
        await updateEquipment(equipment);
        return equipment._id;
      }

      const equip = await saveNewEquipment(equipment);
      return equip._id;
    } catch (e) {
      return false;
    }
  };

  const saveScreening = async (screening, equipmentId) => {
    
    let acessorios = screening.triagem.acessorios.map((acessorio) =>{
      let novoAcessorio = {};
      novoAcessorio.item_id = acessorio.descricao;
      novoAcessorio.estado_de_conservacao = acessorio.estado_de_conservacao;
      novoAcessorio.quantidade = acessorio.quantidade;
      novoAcessorio.acompanha = acessorio.acompanha;
      return novoAcessorio;
    });

    screening.triagem.acessorios = acessorios.filter((acessorio) =>{
      return acessorio !== '' && acessorio.acompanha && acessorio.quantidade > 0;
    });
    const screen = {
      ...screening,
      acessorios: acessorios.filter(
        (item) => item !== '' && item.acompanha && item.quantidade > 0,
      ),
    };

    const order = {
      ...serviceOrder,
      ...serviceOrderForm,
      ...screening,
      triagem: screen.triagem,
      equipamento_id: equipmentId.$oid || equipmentId,
      _id: serviceOrder._id.$oid || serviceOrder._id,
      created_at: new Date(
        serviceOrder.created_at.$date || serviceOrder.created_at,
      ),
    };

    delete order.calibragem;
    delete order.diagnostico;
    delete order.equipamento;

    try {
      if (order._id && order._id !== '') {
        await updateServiceOrderRequest(
          Object.assign(order, { status: 'triagem' }),
          order._id,
        );
      } else {
        await saveNewOrderService(Object.assign(order, { status: 'triagem' }));
      }

      return true;
    } catch (e) {
      if (!editingForm) {
        await deleteEquipmentRequest(equipmentId);
      }

      return false;
    }
  };

  const saveForm = async (data, event) => {
    event.preventDefault();
    return;

    await triggerValidation();
    if (Object.keys(errors).length > 0) {
      showErrorBar();
      return;
    }

    const equipment = {
      ...Array.isArray(serviceOrderForm.equipamento)
      ? serviceOrderForm.equipamento[0]
        : serviceOrderForm.equipamento,
    };

    const equipmentId = await saveEquipment(equipment);
    if (!equipmentId) {
      return;
    }
    const saved = saveScreening(serviceOrderForm, equipmentId);

    if (saved) {
      setOpenFormDialog(false);
      setTimeout(() => {
        reloadData();
        window.location.reload();
      }, 1500);
      return;
    }

    setAlertSuccess(false);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const closeDialog = () => {
    handleClose();
  };

  console.log("Screening Dialog Form");

  return (
    <FormProvider key={randomIndex()}>
      <FormDialog
        open={openFormDialog}
        handleCancel={closeDialog}
        handleSave={saveForm}
        title={titleFormModal}
        >
        <Grid container spacing={4} >
          <Grid item xs={12}>
            {errorsFound ? (
              <Alert color="error" onClose={() => setErrorsFound(false)}>
                Não é possível salvar. Verifique o formulário e preencha os
                campos corretamente.
              </Alert>
            ) : (
              ''
            )}
          </Grid>
          <Grid item xs={12}>
            <FormScreening
              register={register}
              errors={errors}
              editingForm={editingForm}
              serviceOrder={serviceOrderForm}
              saveForm={saveForm}
              items={items}
            />
          </Grid>
        </Grid>
      </FormDialog>
    </FormProvider>
  );
};

ScreeningDialogForm.defaultProps = {
  editingForm: false,
};

ScreeningDialogForm.propTypes = {
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
  editingForm: PropTypes.bool,
  openFormDialog: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  titleFormModal: PropTypes.string.isRequired,
  setOpenFormDialog: PropTypes.func.isRequired,
  reloadData: PropTypes.func.isRequired,
  setAlertSuccess: PropTypes.func.isRequired,
  setShowAlert: PropTypes.func.isRequired,
};

export default ScreeningDialogForm;
