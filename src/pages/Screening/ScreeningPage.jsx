import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Grid,
  Tab,
  Tabs,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import IndexScreening from './IndexScreening';
import { ServiceOrder } from '../../models/serviceOrder';
import ThemeButton from '../_common/forms/ThemeButton';
import TabPanel from '../_common/components/TabPanel';
import ScreeningDialogForm from './ScreeningForm/ScreeningDialogForm';


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
    marginBottom: theme.spacing(3),
  },
  containerBottom: {
    paddingBottom: theme.spacing(6),
  },
  containerForm: {
    marginTop: theme.spacing(5),
  },
}));

const ScreeningPage = (props) => {
  const classes = useStyle();

  const {
    serviceOrders,
    reloadData,
    loadingData,
  } = props;

  const [tabValue, setTabValue] = useState(0);

  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [titleFormModal, setTitleFormModal] = useState('');
  const [editForm, setEditForm] = useState(false);
  const [serviceOrder, setServiceOrder] = useState(ServiceOrder({}));

  const [showAlert, setShowAlert] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  const changeTab = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleEditScreening = (data) => {
    const doc = serviceOrders
      .find((item) => item.numero_ordem_servico === data.numero_ordem_servico);
    setServiceOrder({ ...doc });
    setTitleFormModal('Editar Triagem');
    setEditForm(true);
    setOpenFormDialog(true);
  };

  const handleNewScreening = () => {
    setServiceOrder(ServiceOrder({}));
    setEditForm(false);
    setTitleFormModal('Cadastrar Nova Triagem');
    setOpenFormDialog(true);
  };

  const handleClose = () => {
    setOpenFormDialog(false);
  };

  return (
    <>
      <Container className={classes.containerBottom}>
        <Grid container className={classes.titleList}>
          <Grid item>
            <Tabs value={tabValue} onChange={changeTab} aria-label="abas-triagem" centered>
              <Tab
                label="Ordens de Serviço em triagem"
                aria-controls="lista-equipamentos-triagem"
              />
            </Tabs>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            {showAlert
              ? (
                <Alert
                  color={alertSuccess
                    ? 'success'
                    : 'error'}
                  onClose={() => setShowAlert(false)}
                >
                  {alertSuccess
                    ? 'Triagem salva com sucesso'
                    : 'Não é possível salvar. Verifique o formulário e preencha os campos corretamente.'}
                </Alert>
              )
              : ''}
          </Grid>
        </Grid>

        <Grid container justify="flex-end">
          <Grid item>
            <ThemeButton
              startIcon={<AddIcon />}
              onClick={handleNewScreening}
            >
              Cadastrar Nova Triagem
            </ThemeButton>
          </Grid>
        </Grid>
        <TabPanel value={tabValue} index={0}>
          <IndexScreening
            serviceOrders={serviceOrders}
            editScreening={handleEditScreening}
            loadingData={loadingData}
          />
        </TabPanel>

        <ScreeningDialogForm
          serviceOrder={serviceOrder}
          editForm={editForm}
          openFormDialog={openFormDialog}
          handleClose={handleClose}
          titleFormModal={titleFormModal}
          setOpenFormDialog={setOpenFormDialog}
          setAlertSuccess={setAlertSuccess}
          setShowAlert={setShowAlert}
          reloadData={reloadData}
        />
      </Container>
    </>
  );
};

ScreeningPage.propTypes = {
  serviceOrders: PropTypes.instanceOf(Array).isRequired,
  reloadData: PropTypes.func.isRequired,
  loadingData: PropTypes.bool.isRequired,
};

export default ScreeningPage;
