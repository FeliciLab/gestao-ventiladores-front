import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function BuscarEquipamento(props) {

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1. Busca do Equipamento
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField

            name="numero_serie_equipamento"
            id="numerioDeSerieEquipamento"
            label="Número de Serie do Equipamento"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            id="nomeDoEquipamento"
            name="nome_equipamento"
            label="Nome do Equipamento"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="marca"
            name='marca'
            label="Marca"
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            name="modelo"
            id="modelo"
            label="Modelo"
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="numeroDeSerie"
            name="numero_serie"
            label="Número de Série"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
