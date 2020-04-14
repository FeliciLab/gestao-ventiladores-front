import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import equipmentTypes from "../../models/equipmentTypes";
import getCities from "../../services/cities";
import typeInstitute from "../../models/typeInstitute";
import typeStateEquipment from "../../models/typeStateEquipment";
import SelectControl from "../_common/form/SelectControl";

export default function CadastroEquipamento (props) {
  const cities = getCities('CE');

  function atualizarParent (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    return doc;
  }

  function atualizarEquipamentoParent (event) {
    event.preventDefault();
    props.atualizarEquipamento(atualizarParent(event));
  }

  function atualizarTriagemParent (event) {
    event.preventDefault();
    props.atualizarTriagem(atualizarParent(event));
  }

  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
      >
        1. Cadastro de Equipamento
      </Typography>

      <Grid container>
        <Grid
          item
          xs={6}
        >

        </Grid>
      </Grid>
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            onChange={atualizarEquipamentoParent}
            defaultValue={props.equipamento.numero_ordem_servico}
            name="numero_ordem_servico"
            id="numeroDaOrdemDeServico"
            label="Número da Ordem de Serviço"
            required
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.numero_de_serie}
            id="numeroDeSerie"
            name="numero_de_serie"
            label="Número de Série"
            required
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            required
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.nome_equipamento}
            id="nomeDoEquipamento"
            name="nome_equipamento"
            label="Nome do Equipamento"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            defaultValue={props.triagem.numero_do_patrimonio}
            onChange={atualizarTriagemParent}
            name="numero_do_patrimonio"
            id="numeroDoPatrimonio"
            label="Número do Patrimônio"
            fullWidth
          />
        </Grid>


        <Grid
          item
          xs={12}
          sm={6}
        >
          <SelectControl
            label={"Tipo do Equipamento"}
            name={"tipo"}
            action={atualizarTriagemParent}
            defaultValue={''}
            menuItems={equipmentTypes.map(item => ({value: item, name: item}))}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
        >
          <TextField
            id="marca"
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.marca}
            name="marca"
            label="Marca"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
        >
          <TextField
            required
            id="modelo"
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.modelo}
            name="modelo"
            label="Modelo"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
        >
          <TextField
            required
            id="fabricante"
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.fabricante}
            name="fabricante"
            label="Fabricante"
            fullWidth
          />
        </Grid>


        <Grid
          item
          xs={12}
          sm={4}
        >
          <SelectControl
            label={"Município de Origem"}
            name={"municipio_origem"}
            action={atualizarTriagemParent}
            defaultValue={''}
            menuItems={cities.map(item => ({value: item, name: item}))}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
        >
          <TextField
            required
            id="nome_instituicao_origem"
            onChange={atualizarTriagemParent}
            name="nome_instituicao"
            label="Nome da Instituição"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
        >
          <SelectControl
            label={"Tipo da instituição"}
            name={"tipo_instituicao_origem"}
            action={atualizarTriagemParent}
            defaultValue={''}
            menuItems={typeInstitute.map(item => ({value: item, name: item}))}
          />
        </Grid>


        {/*ROW*/}
        <Grid
          item
          xs={6}
          sm={4}
        >
          <TextField
            required
            id="nomeDoResponsavel"
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.nome_responsavel}
            name="nome_responsavel"
            label="Nome do Responsável"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
        >
          <TextField
            required
            id="constatoDoResponsavel"
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.contato_responsavel}
            name="contato_responsavel"
            label="Contato do Responsável"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
        >
          <SelectControl
            label={"Estado de Conservação"}
            name={"estado_de_conservacao"}
            action={atualizarTriagemParent}
            defaultValue={''}
            menuItems={typeStateEquipment.map(item => ({value: item, name: item}))}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
