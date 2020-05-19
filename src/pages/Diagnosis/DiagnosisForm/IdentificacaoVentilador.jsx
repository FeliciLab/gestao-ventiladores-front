import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function CadastroEquipamento() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        3. Identificação do Ventilador
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="nomeDoItem"
            name="nomeDoItem"
            label="Nome do item"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
