import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


const PersonTransportationForm = (props) => {
  const {
    updateForm,
    formModel,
  } = props;

  function updatePersonForm(event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateForm(doc);
  }

  return (
    <>
      <Grid container justify="space-between" spacing={3}>
        <Grid item xs={6}>
          <TextField
            name="nome_responsavel_transporte"
            label="Nome do responsável do transporte"
            value={formModel.nome_responsavel_transporte}
            onChange={updatePersonForm}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="contato_responsavel_transporte"
            label="Contato do responsável do transporte"
            value={formModel.contato_responsavel_transporte}
            onChange={updatePersonForm}
            fullWidth
            required
          />
        </Grid>
      </Grid>
    </>
  );
};

PersonTransportationForm.propTypes = {
  updateForm: PropTypes.func.isRequired,
  formModel: PropTypes.instanceOf(Object).isRequired,
};

export default PersonTransportationForm;
