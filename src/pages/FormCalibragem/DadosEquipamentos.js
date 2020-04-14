import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

export default function DadosEquipamentos(props) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1. Dados do Equipamento
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6} sm={6}>
          <TextField
            name="numero_ordem_servico"
            id="mumeroDaOrdemDeServico"
            label="Número da Ordem de Serviço"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            id="numeroDeSerie"
            name="numero_serie"
            label="Numero de Série"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="nomeDoEquipamento"
            name="nome_equipamento"
            label="Nome do Equipamento"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="numeroDoPatrimonio"
            name="numero_patrimonio"
            label="Número do Patrimônio"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          <TextField
            required
            id="tipoEquipamento"
            name="tipo_equipamento"
            label="Tipo de Equipamento"
            fullWidth
          />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField required id="marca" name="marca" label="Marca" fullWidth />
        </Grid>
        <Grid item xs={3} sm={3}>
          <TextField
            required
            id="modelo"
            name="modelo"
            label="Modelo"
            fullWidth
          />
        </Grid>

        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="municipioOrigem"
            name="municipio_origem"
            label="Município de Origem"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="nomeInstituição"
            name="nome_instituicao"
            label="Nome da Instituição"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="tipoDaInstituicaoDeOrigem"
            name="tipo_instituicao_origem"
            label="Tipo da instituição de origem"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="nomeDoResponsavel"
            name="nome_responsavel"
            label="Nome do responável"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="contatoResponsavel"
            name="contato_responsavel"
            label="Contato do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={4} sm={4}>
          <TextField
            required
            id="estadoDeConservacao"
            name="estado_conservacao"
            label="Estado de conservação"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
