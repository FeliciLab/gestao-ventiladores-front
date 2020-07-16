import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CssBaseline, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RelacaoDeMaterial from './RelacaoDeMaterial';
import { listaFormAcessorios } from '../../../models/acessorio';
import { ServiceOrderScreening } from '../../../models/serviceOrder';
import Equipamento from '../../../models/equipamentos';
import CadastroEquipamento from './CadastroEquipamento';
import TitleFormScreening from './TitleFormScreening';

const useStyles = makeStyles((theme) => ({
  divTextFooter: {
    height: 60,
    justifyContent: 'space-evenly',
    display: 'flex',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    flexDirection: 'row',
  },

  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(1200 + theme.spacing(2) * 2)]: {
      width: 1200,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
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
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const FormScreening = (props) => {
  const {
    register,
    errors,
    serviceOrder,
    updateFormModel,
    editingForm,
    items,
  } = props;

  const classes = useStyles();

  const [blockEffect, setBlockEffect] = useState(false);

  const [serviceOrderForm, setServiceOrderForm] = useState({});
  const [formErrors, setFormErrors] = useState({});

  const [equipamento, setEquipamento] = useState({});
  const [screening, setScreening] = useState({});
  const [acessorios, setAcessorios] = useState([]);

  const handleEffect = () => {
    if (blockEffect) {
      return;
    }

    setServiceOrderForm({ ...serviceOrder });

    if (!equipamento.numero_de_serie) {
      if (serviceOrder.equipamento) {
        setEquipamento(
          Object.assign(Equipamento({}), serviceOrder.equipamento[0]),
        );
      } else {
        setEquipamento({ ...Equipamento({}) });
      }
    }

    if (!screening.acessorios) {
      if (serviceOrder.triagem) {
        setScreening(ServiceOrderScreening({ triagem: serviceOrder.triagem }));
      } else {
        setScreening(ServiceOrderScreening({ triagem: {} }));
      }
    }

    if (acessorios.length === 0) {
      if (serviceOrder.triagem && serviceOrder.triagem.acessorios) {
        setAcessorios(listaFormAcessorios(serviceOrder.triagem.acessorios));
      } else {
        setAcessorios(listaFormAcessorios([]));
      }
    }

    setBlockEffect(true);
  };

  useEffect(handleEffect, [serviceOrderForm]);

  const updateErrors = (values) => {
    const dataFormErrors = { ...formErrors };
    Object.keys(values).forEach((indexValue) => {
      Object.keys(dataFormErrors[indexValue]).forEach((item, index) => {
        dataFormErrors[indexValue][index] = false;
      });
    });

    setFormErrors({ ...dataFormErrors, values });
  };

  const handleUpdateServiceOrder = (value) => {
    const doc = { ...serviceOrderForm, ...value };
    setServiceOrderForm(doc);
    updateFormModel(doc);
  };

  const atualizarEquipamento = (value) => {
    const equip = { ...equipamento, ...value };
    setEquipamento(equip);
    updateFormModel({ equipamento: equip });
  };

  const atualizarTriagem = (value) => {
    const dataScreening = { ...screening, ...value };
    setScreening(dataScreening);
    updateFormModel({ triagem: dataScreening });
  };

  const atualizarAcessorios = (value) => {
    setAcessorios(value);
    console.log(value);
    atualizarTriagem({ acessorios: value });
    const dataScreening = { ...screening };
    screening.acessorios = value;
    updateFormModel({ triagem: dataScreening });
  };

  if (!blockEffect) {
    return <>Carregando...</>;
  }

  return (
    <>
      <CssBaseline />

      <main className={classes.layout}>
        <TitleFormScreening />

        <Paper className={classes.paper}>
          <CadastroEquipamento
            errors={errors}
            register={register}
            serviceOrder={serviceOrderForm}
            equipment={equipamento}
            screening={screening}
            updateErrors={updateErrors}
            updateEquipment={atualizarEquipamento}
            updateScreening={atualizarTriagem}
            updateServiceOrder={handleUpdateServiceOrder}
            editingForm={editingForm}
          />
        </Paper>

        <Paper className={classes.paper}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={12} sm={7}>
              <Typography variant="h6" gutterBottom>
                2. Relação de Material / Acessórios Entregues
              </Typography>
            </Grid>
          </Grid>

          <RelacaoDeMaterial
            acessorios={acessorios}
            atualizarAcessorios={atualizarAcessorios}
            items={items}
          />
        </Paper>
      </main>
    </>
  );
};

FormScreening.defaultProps = {
  editingForm: false,
};

FormScreening.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
  updateFormModel: PropTypes.func.isRequired,
  editingForm: PropTypes.bool,
};

export default FormScreening;
