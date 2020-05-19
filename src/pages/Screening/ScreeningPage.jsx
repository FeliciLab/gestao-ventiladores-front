import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Tab, Tabs } from '@material-ui/core';
import TabPanel from '../_common/components/TabPanel';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IndexScreening from './IndexScreening';
import { ServiceOrder } from '../../models/serviceOrder';
import ThemeButton from '../_common/forms/ThemeButton';
import AddIcon from '@material-ui/icons/Add';
import Alert from '@material-ui/lab/Alert';
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
    marginBottom: theme.spacing(3)
  },
  containerBottom: {
    paddingBottom: theme.spacing(6)
  },
  containerForm: {
    marginTop: theme.spacing(5)
  }
}));

export default function ScreeningPage (props) {
  const classes = useStyle();

  const {
    serviceOrders,
    reloadData,
    loadingData
  } = props;

  const [tabValue, setTabValue] = useState(0);

  const [openFormDialog, setOpenFormDialog] = useState(false);
  const [titleFormModal, setTitleFormModal] = useState('');
  const [editForm, setEditForm] = useState(false);
  const [serviceOrder, setServiceOrder] = useState(ServiceOrder({}));

  const [showAlert, setShowAlert] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(false);

  function changeTab (event, newValue) {
    setTabValue(newValue);
  }

  function handleEditScreening (data) {
    const doc = serviceOrders.find(item => item.numero_ordem_servico === data.numero_ordem_servico);
    setServiceOrder(Object.assign({}, doc));
    setTitleFormModal('Editar Triagem');
    setEditForm(true);
    setOpenFormDialog(true);
  }

  function handleNewScreening () {
    setServiceOrder(ServiceOrder({}));
    setEditForm(false);
    setTitleFormModal('Cadastrar Nova Triagem');
    setOpenFormDialog(true);
  }

  function handleClose () {
    setOpenFormDialog(false);
  }

  return (<React.Fragment>
    <Container className={classes.containerBottom}>
      <Grid container className={classes.titleList}>
        <Grid item xs={'auto'}>
          <Tabs value={tabValue} onChange={changeTab} aria-label={'abas-triagem'} centered>
            <Tab label={"Ordens de Serviço em triagem"} aria-controls={"lista-equipamentos-triagem"}/>
          </Tabs>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          {showAlert ? <Alert
              color={alertSuccess ? 'success' : 'error'}
              onClose={() => setShowAlert(false)}
            >
              {alertSuccess ? 'Triagem salva com sucesso' : 'Não é possível salvar. Verifique o formulário e preencha os campos corretamente.'}
            </Alert>
            : ''}
        </Grid>
      </Grid>

      <Grid container justify={'flex-end'}>
        <Grid item>
          <ThemeButton
            startIcon={<AddIcon/>}
            onClick={handleNewScreening}
          >
            Cadastrar Nova Triagem
          </ThemeButton>
        </Grid>
      </Grid>
      <TabPanel value={tabValue} index={0}>
        <IndexScreening serviceOrders={serviceOrders} editScreening={handleEditScreening} loadingData={loadingData}/>
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
  </React.Fragment>);
}