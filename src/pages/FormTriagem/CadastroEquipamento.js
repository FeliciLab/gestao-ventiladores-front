import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import equipmentTypes from "../../models/equipmentTypes";
import getCities from "../../services/cities";
import typeInstitute from "../../models/typeInstitute";
import typeStateEquipment from "../../models/typeStateEquipment";
import SelectControl from "../_common/form/SelectControl";
// import InputFileImage from "../_common/form/InputFileImage";
import {sendEquipmentPhoto} from "../../modelServices/photoEquipmentService";
import {manufacturersEquipments, modelsEquipment} from "../../models/manufacturers";
import InputRadioDialog from "../_common/form/InputRadioDialog";
import {useForm} from "react-hook-form";
import ErrorAlertText from "../_common/alerts/ErrorAlertText";

export default function CadastroEquipamento (props) {
  React.useEffect(() => {
    setEquipamento(props.equipamento);
  }, [props]);


  const cities = getCities('CE');
  const {register, errors} = useForm({mode: 'onBlur'});
  const {updateErrors} = props;

  const [equipamento, setEquipamento] = React.useState({});

  function sendErrorsParent() {
    setTimeout(() => {
      updateErrors(Object.keys(errors));
    }, 1000)
  }

  function atualizarParent (event) {
    const doc = {};
    doc[event.target.name] = event.target.value.trim();
    return doc;
  }

  function atualizarEquipamentoParent (event) {
    props.atualizarEquipamento(atualizarParent(event));
  }

  function atualizarTriagemParent (event) {
    props.atualizarTriagem(atualizarParent(event));
  }

  const sendPhoto = (photo, name) => {
    sendEquipmentPhoto(photo, name, equipamento._id)
      .then((result) => {
        if (result) {
          props.atualizarEquipamento({_id: result});
          const doc = {};
          doc[name] = result + '_' + name + '.jpeg';
          props.atualizarTriagem(doc);
        }
      });
  };

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
          xs={12}
        >
          {/*<ErrorAlertBar*/}
          {/*  errors={errors}*/}
          {/*  type={'error'}*/}
          {/*/>*/}
        </Grid>
      </Grid>

      {/*<Grid container>*/}
      {/*  <Grid*/}
      {/*    item*/}
      {/*    xs={6}*/}
      {/*  >*/}
      {/*    <InputFileImage*/}
      {/*      name={"foto_antes_limpeza"}*/}
      {/*      label={"Foto antes da limpeza"}*/}
      {/*      action={sendPhoto}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}


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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            onChange={atualizarEquipamentoParent}
            defaultValue={props.equipamento.numero_ordem_servico}
            name="numero_ordem_servico"
            id="numeroDaOrdemDeServico"
            label="Número da Ordem de Serviço"
            fullWidth
          />
          <ErrorAlertText error={errors.numero_ordem_servico}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            inputRef={register({required: true})}
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.numero_de_serie}
            id="numeroDeSerie"
            name="numero_de_serie"
            label="Número de Série"
            required
            fullWidth
          />
          <ErrorAlertText error={errors.numero_de_serie}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            inputRef={register({required: true})}
            onChange={atualizarTriagemParent}
            defaultValue={props.triagem.nome_equipamento}
            id="nomeDoEquipamento"
            name="nome_equipamento"
            label="Nome do Equipamento"
            fullWidth
          />
          <ErrorAlertText error={errors.nome_equipamento}/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            inputRef={register({required: true})}
            defaultValue={props.triagem.numero_do_patrimonio}
            onChange={atualizarTriagemParent}
            name="numero_do_patrimonio"
            id="numeroDoPatrimonio"
            label="Número do Patrimônio"
            fullWidth
          />
          <ErrorAlertText error={errors.numero_do_patrimonio}/>
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
          <InputRadioDialog
            action={atualizarTriagemParent}
            name={"marca"}
            label={"Marca"}
            hasOther={true}
            defaultValue={manufacturersEquipments[0]}
            items={manufacturersEquipments.map(item => ({label: item, value: item}))}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={2}
        >
          <InputRadioDialog
            action={atualizarTriagemParent}
            name={"modelo"}
            label={"Modelo"}
            hasOther={true}
            defaultValue={modelsEquipment[0]}
            items={modelsEquipment.map(item => ({label: item, value: item}))}
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
            name="nome_instituicao_origem"
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

      {/*<Grid container>*/}
      {/*  <Grid*/}
      {/*    item*/}
      {/*    xs={6}*/}
      {/*  >*/}
      {/*    <InputFileImage*/}
      {/*      name={"foto_apos_limpeza"}*/}
      {/*      label={"Foto após da limpeza"}*/}
      {/*      action={sendPhoto}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </React.Fragment>
  );
}
