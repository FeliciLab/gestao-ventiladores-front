import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import FormDiagnosis from './DiagnosisForm/FormDiagnosis';
import ThemeButton from '../_common/forms/ThemeButton';
import { updateServiceOrderRequest } from '../../modelServices/serviceOrderService';
import FullDialog from '../_common/components/FullDialog';
import { ServiceOrderDiagnosis } from '../../models/serviceOrder';


const DiagnosisFormDialog = (props) => {
  const {
    handleClose,
    serviceOrder,
    openModal,
    reloadData,
  } = props;

  const [serviceOrderForm, setServiceOrderForm] = useState({});

  const handleEffect = () => {
    setServiceOrderForm(
      { ...ServiceOrderDiagnosis({ dignostico: {} }), serviceOrder },
    );
  };

  useEffect(handleEffect, [serviceOrder]);

  const updateServiceForm = (value) => {
    setServiceOrderForm(
      { ...serviceOrder, diagnostico: serviceOrderForm.diagnostico, value },
    );
  };

  const saveForm = async () => {
    try {
      await updateServiceOrderRequest(
        {
          diagnostico: serviceOrderForm.diagnostico,
          status: 'diagnostico',
          updated_at: new Date(),
        },
        serviceOrderForm._id.$oid,
      );
      reloadData();
      return true;
    } catch (e) {
      return false;
    }
  };

  const titleFormModal = serviceOrder.status === 'diagnostico'
    ? `OS ${serviceOrder.numero_ordem_servico} - Editar Diagnóstico`
    : `OS ${serviceOrder.numero_ordem_servico} - Cadastrar Diagnóstico`;

  return (
    <>
      <FullDialog
        open={openModal}
        handleClose={handleClose}
        title={titleFormModal}
        actionChildren={(
          <>
            <Grid container spacing={2}>
              <Grid item>
                <ThemeButton
                  onClick={handleClose}
                  startIcon={<CloseIcon />}
                  variant="outlined"
                  borderColor="white"
                >
                  Cancelar
                </ThemeButton>
              </Grid>
              <Grid item>
                <ThemeButton
                  startIcon={<SaveIcon />}
                  onClick={saveForm}
                  name="Salvar"
                  color={orange[600]}
                  bgColor="#FFF"
                  hoverColor={orange[50]}
                >
                  Salvar
                </ThemeButton>
              </Grid>
            </Grid>
          </>
        )}
      >
        <FormDiagnosis
          updateServiceForm={updateServiceForm}
          serviceOrder={serviceOrderForm}
        />
      </FullDialog>
    </>
  );
};

DiagnosisFormDialog.propTypes = {
  handleClose: PropTypes.func.isRequired,
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
  openModal: PropTypes.bool.isRequired,
  reloadData: PropTypes.func.isRequired,
};

export default DiagnosisFormDialog;
