import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


export default function BuscarEquipamento(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        3. Anexo de Certificado
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={4} sm={4}>
          <TextField required id="data" name="data" label="Data" fullWidth />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            name="responsavel"
            id="responsavel"
            label="Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="anexoDoCertificado"
            name="anexo_certificado"
            label="Anexo do Certificado"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
