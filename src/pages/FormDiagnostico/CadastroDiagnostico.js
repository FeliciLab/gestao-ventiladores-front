import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function CadastroEquipamento() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1. Cadastro De Diagnóstico
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            multiline
            rows="6"
            id="resultadoDoDiagnosticoTecnico"
            name="resultadoDoDiagnosticoTecnico"
            label="Resultado do Diagnostico Técnico"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            multiline
            rows="6"
            id="demandaPorServicos"
            name="demandaPorServicos"
            label="Demanda por Servicos"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            multiline
            rows="6"
            id="demandaPorInsumos"
            name="demandaPorInsumos"
            label="Demanda por Insumos"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
