import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function CadastroEquipamento() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        2. Cadastro de Itens
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tipoDoItem"
            name="tipoDoItem"
            label="Tipo do item"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="descricaoDoItem"
            name="descricaoDoItem"
            label="Descrição do Item"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="valorEstimado"
            name="valorEstimado"
            label="Valor Estimado"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="prioridade"
            name="prioridade"
            label="Prioridade"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
