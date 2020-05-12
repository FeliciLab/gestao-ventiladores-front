import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";


export default function DeliveryFormInfo (props) {
  const {updateForm, formModel} = props;

  function updateToForm (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateForm(doc);
  }

  return (<React.Fragment>
    <Grid container justify={'space-between'} spacing={3}>
      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'Data da entrega'}
          name={'data_entrega'}
          value={formModel.data_entrega}
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          onChange={updateToForm}
          label={'Horário da entrega'}
          name={'hora_entrega'}
          value={formModel.hora_entrega}
          type="time"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
        />
      </Grid>
    </Grid>
  </React.Fragment>);
}