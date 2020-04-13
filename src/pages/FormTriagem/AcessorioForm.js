import React from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function AcessorioForm (props) {
  function atualizarAcessorioParent (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    props.atualizarAcessorio(props.index, doc);
    if (props.ultimo && event.target.name === 'descricao' && event.target.value.trim() !== '') {
      props.adicionarAcessorio()
    }
    if (props.penultimo && event.target.name === 'descricao' && event.target.value.trim() === '') {
        props.removerLinha(props.index + 1);
    }
  }

  function removerLinhaParent () {
    props.removerLinha(props.index);
  }

  return (
    <Grid
      container
      spacing={3}
      justify={"flex-start"}
      alignItems={"flex-end"}
    >
      <Grid
        item
        xs={6}
        sm={5}
      >
        <TextField
          required
          id="descricao"
          onChange={atualizarAcessorioParent}
          defaultValue={props.acessorio.descricao}
          name="descricao"
          label="Descrição"
          fullWidth
        />
      </Grid>
      <Grid
        item
        xs={6}
        sm={1}
      >
        <FormControl fullWidth>
          <InputLabel>Acompanha</InputLabel>
          <Select
            name={"acompanha"}
            defaultValue={props.acessorio.acompanha || true}
            onChange={atualizarAcessorioParent}
          >
            <MenuItem value={true}>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid
        item
        xs={6}
        sm={2}
      >
        <TextField
          required
          id="quantidade"
          onChange={atualizarAcessorioParent}
          defaultValue={props.acessorio.quantidade}
          name="quantidade"
          label="Quantidade"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid
        item
        xs={5}
        sm={3}
      >
        <TextField
          required
          id="estadoDeConservacao"
          onChange={atualizarAcessorioParent}
          defaultValue={props.acessorio.estado_de_conservacao}
          name="estado_de_conservacao"
          label="Estado de Conservação"
          fullWidth
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={1}
      >
        <Tooltip title="Remover">
          <Button onClick={() => removerLinhaParent()}>
            <DeleteIcon></DeleteIcon>
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
}