import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function CadastroEquipamento() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1. Cadastro de Equipamento
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numeroDaOrdemDeServico"
            name="numeroDaOrdemDeServico"
            label="Número da Ordem de Serviço"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numeroDeSerie"
            name="numeroDeSerie"
            label="Número de Série"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nomeDoEquipamento"
            name="nomeDoEquipamento"
            label="Nome do Equipamento"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="numeroDoPatrimonio"
            name="numeroDoPatrimonio"
            label="Número do Patrimônio"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="tipoDoEquipamento"
            name="tipoDoEquipamento"
            label="Tipo do Equipamento"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="marca" name="marca" label="Marca" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nomeDaInstituicaoDeOrigem"
            name="nomeDaInstituicaoDeOrigem"
            label="Nome da Instituição de Origem"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="modelo"
            name="modelo"
            label="Modelo"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="fabricante"
            name="fabricante"
            label="Fabricante"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="nomeDoResponsavel"
            name="nomeDoResponsavel"
            label="Nome do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="constatoDoResponsavel"
            name="constatoDoResponsavel"
            label="Contato do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="unidadeDeOrigem"
            name="unidadeDeOrigem"
            label="Unidade de Origem"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={3}>
          <TextField
            required
            id="estadoDeConservação"
            name="estadoDeConservação"
            label="Estado de Conservação"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
