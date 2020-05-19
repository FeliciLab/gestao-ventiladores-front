import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ThemeButton from '../_common/forms/ThemeButton';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import FormDiagnosis from './DiagnosisForm/FormDiagnosis';
import { updateServiceOrderRequest } from '../../modelServices/serviceOrderService';
import FullDialog from '../_common/components/FullDialog';
import { ServiceOrderDiagnosis } from '../../models/serviceOrder';


export default function DiagnosisFormDialog (props) {
  const {
    handleClose,
    serviceOrder,
    openModal,
    reloadData
  } = props;

  const [serviceOrderForm, setServiceOrderForm] = useState({});

  useEffect(handleEffect, [serviceOrder]);

  function handleEffect () {
    setServiceOrderForm(
      Object.assign(
        {},
        ServiceOrderDiagnosis({dignostico: {}}),
        serviceOrder
      )
    );
  }

  function updateServiceForm (value) {
    setServiceOrderForm(
      Object.assign(
        {},
        serviceOrder,
        {diagnostico: serviceOrderForm.diagnostico},
        value
      )
    );
  }

  async function saveForm () {
    try {
      await updateServiceOrderRequest(
        Object.assign(
          {},
          {diagnostico: serviceOrderForm.diagnostico},
          {status: 'diagnostico'},
          {updated_at: new Date()}
        ),
        serviceOrderForm._id['$oid']
      );
      reloadData();
    } catch (e) {
      console.log('erro ao salvar ordem de serviço', e);
    }
  }

  const titleFormModal = serviceOrder.status === 'diagnostico' ?
    `OS ${serviceOrder.numero_ordem_servico} - Editar Diagnóstico` :
    `OS ${serviceOrder.numero_ordem_servico} - Cadastrar Diagnóstico`;

  return (<React.Fragment>
    <FullDialog
      open={openModal}
      handleClose={handleClose}
      title={titleFormModal}
      actionChildren={<React.Fragment>
        <Grid container spacing={2}>
          <Grid item>
            <ThemeButton
              onClick={handleClose}
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
      <FormDiagnosis
        updateServiceForm={updateServiceForm}
        serviceOrder={serviceOrderForm}
      />
    </FullDialog>
  </React.Fragment>);
}