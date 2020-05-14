import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";


export default function PersonTransportationForm (props) {
  const {updateForm, formModel} = props;

  function updatePersonForm (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateForm(doc);
  }

  return (<React.Fragment>
    <Grid container justify={'space-between'} spacing={3}>
      <Grid item xs={6}>
        <TextField
          name={'nome_responsavel_transporte'}
          label={"Nome do responsável do transporte"}
          value={formModel.nome_responsavel_transporte}
          onChange={updatePersonForm}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name={'contato_responsavel_transporte'}
          label={"Contato do responsável do transporte"}
          value={formModel.contato_responsavel_transporte}
          onChange={updatePersonForm}
          fullWidth
          required
        />
      </Grid>
    </Grid>
  </React.Fragment>);
}