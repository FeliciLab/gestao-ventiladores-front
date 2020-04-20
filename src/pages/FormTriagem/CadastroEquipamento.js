import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import equipmentTypes from "../../models/equipmentTypes";
import getCities from "../../services/cities";
import typeInstitute from "../../models/typeInstitute";
import typeStateEquipment from "../../models/typeStateEquipment";
import SelectControl from "../_common/forms/SelectControl";
import InputFileImage from "../_common/forms/InputFileImage";
import {sendEquipmentPhoto} from "../../modelServices/photoEquipmentService";
import {manufacturersEquipments, modelsEquipment} from "../../models/manufacturers";
import InputRadioDialog from "../_common/forms/InputRadioDialog";
import {useForm} from "react-hook-form";
import ErrorAlertText from "../_common/alerts/ErrorAlertText";

export default function CadastroEquipamento (props) {
  const cities = getCities('CE');

  const {register, errors} = useForm({mode: 'onBlur'});
  const {updateErrors} = props;

  const [equipamento, setEquipamento] = React.useState({});
  const [screening, setScreening] = React.useState({});
  const [serviceOrder, setServiceOrder] = React.useState({});
  const [localErrors, setLocalErrors] = React.useState({});

  if (!equipamento.hasOwnProperty('numero_de_serie')) {
    setEquipamento(props.equipamento);
  }

  if (!serviceOrder.hasOwnProperty('numero_ordem_servico')) {
    setServiceOrder(props.serviceOrder);
  }

  if (!screening.hasOwnProperty('acessorios')) {
    setScreening(props.screening);
  }

  function sendErrorsParent () {
    setTimeout(() => {
      const keys = Object.keys(errors);
      const errorsKeys = Object.assign({}, localErrors);

      for (let index in errorsKeys) errorsKeys[index] = false;

      for (let key of keys) {
        errorsKeys[key] = true;
      }

      setLocalErrors(errorsKeys);
      updateErrors({cadastroEquipamento: errorsKeys});
    }, 500);
  }

  function updateEquipment (event) {
    const doc = Object.assign({}, equipamento);
    doc[event.target.name] = event.target.value.trim();
    if (event.target.name === 'marca' && equipamento.fabricante === '') {
      doc['fabricante'] = event.target.value.trim();
    }
    setEquipamento(doc);
    props.atualizarEquipamento(doc);
  }

  function updateScreening (event) {
    const doc = Object.assign({}, screening);
    doc[event.target.name] = event.target.value.trim();
    setEquipamento(doc);
    props.atualizarTriagem(doc);
  }

  function updateServiceOrder (event) {
    const doc = Object.assign({}, serviceOrder);
    doc[event.target.name] = event.target.value.trim();
    setServiceOrder(doc);
    props.updateServiceOrder(doc);
  }

  const sendPhoto = (photo, name) => {
    sendEquipmentPhoto(photo, name, serviceOrder._id)
      .then((result) => {
        if (result) {
          updateServiceOrder({
            target: {
              name: '_id',
              value: result
            }
          });
          updateScreening({
            target: {
              name,
              value: result + '_' + name + '.jpeg'
            }
          });
        }
      });
  };

  if (!equipamento.hasOwnProperty('numero_de_serie') || !serviceOrder.hasOwnProperty('numero_ordem_servico') || !screening.hasOwnProperty('acessorios')) {
    return <div></div>;
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
          <InputFileImage
            name={"foto_antes_limpeza"}
            label={"Foto antes da limpeza"}
            action={sendPhoto}
          />
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            onChange={updateServiceOrder}
            defaultValue={serviceOrder.numero_ordem_servico}
            name="numero_ordem_servico"
            id="numeroDaOrdemDeServico"
            label="Número da Ordem de Serviço"
            required
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            onChange={updateEquipment}
            defaultValue={equipamento.numero_de_serie}
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            onChange={updateEquipment}
            defaultValue={equipamento.nome_equipamento}
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
            defaultValue={equipamento.numero_do_patrimonio}
            onChange={updateEquipment}
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
            action={updateEquipment}
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
            action={updateEquipment}
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
            action={updateEquipment}
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            required
            id="fabricante"
            onChange={updateEquipment}
            value={equipamento.fabricante}
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
            action={updateEquipment}
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            required
            id="nome_instituicao_origem"
            onChange={updateEquipment}
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
            action={updateEquipment}
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            required
            id="nomeDoResponsavel"
            onChange={updateEquipment}
            defaultValue={equipamento.nome_responsavel}
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
            id="constatoDoResponsavel"
            onChange={updateEquipment}
            defaultValue={equipamento.contato_responsavel}
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
            onBlur={sendErrorsParent}
            inputRef={register({required: true})}
            label={"Estado de Conservação"}
            name={"estado_de_conservacao"}
            action={updateEquipment}
            defaultValue={''}
            menuItems={typeStateEquipment.map(item => ({value: item, name: item}))}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={6}
        >
          <InputFileImage
            name={"foto_apos_limpeza"}
            label={"Foto após da limpeza"}
            action={sendPhoto}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
