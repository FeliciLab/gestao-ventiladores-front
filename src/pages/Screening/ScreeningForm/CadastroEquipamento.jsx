import React from 'react';
import equipmentTypes from '../../../models/equipmentTypes';
import getCities from '../../../services/cities';
import typeInstitute from '../../../models/typeInstitute';
import typeStateEquipment from '../../../models/typeStateEquipment';
import InputFileImage from '../../_common/forms/InputFileImage';
import sendEquipmentPhoto from '../../../modelServices/photoEquipmentService';
import { manufacturersEquipments, modelsEquipment } from '../../../models/manufacturers';
import InputRadioDialog from '../../_common/forms/InputRadioDialog';
import ErrorAlertText from '../../_common/alerts/ErrorAlertText';
import { Grid, MenuItem, TextField, Typography } from '@material-ui/core';


export default function CadastroEquipamento (props) {
  const cities = getCities('CE');
  const {
    errors,
    register,
    serviceOrder,
    equipment,
    screening,
    updateEquipment,
    updateScreening,
    updateServiceOrder,
    editingForm
  } = props;

  function handleUpdateEquipmentParent (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    if (event.target.name === 'marca' && equipment.fabricante === '') {
      doc['fabricante'] = event.target.value;
    }
    updateEquipment(doc);
  }

  function handleUpdateScreeningParent (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateScreening(doc);
  }

  function updateServiceOrderParent (event) {
    const doc = {};
    doc[event.target.name] = event.target.value;
    updateServiceOrder(doc);
  }

  const sendPhoto = (photo, name) => {
    const id = serviceOrder._id['$oid'] || serviceOrder._id
    sendEquipmentPhoto(photo, name, id)
      .then((result) => {
        if (result) {
          updateServiceOrderParent({
            target: {
              name: '_id',
              value: result
            }
          });
          handleUpdateScreeningParent({
            target: {
              name,
              value: result + '_' + name + '.jpeg'
            }
          });
        }
      });
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        1. Cadastro de Equipamento
      </Typography>

      <Grid container>
        <Grid item xs={6}>
          <InputFileImage
            name={"foto_antes_limpeza"}
            label={"Foto antes da limpeza"}
            action={sendPhoto}
          />
        </Grid>
      </Grid>


      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register({required: true})}
            onChange={updateServiceOrderParent}
            value={serviceOrder.numero_ordem_servico}
            name="numero_ordem_servico"
            label="Número da Ordem de Serviço"
            InputProps={{
              readOnly: editingForm || false,
            }}
            required
            fullWidth
          />
          <ErrorAlertText error={errors.numero_ordem_servico}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register({required: true})}
            onChange={handleUpdateEquipmentParent}
            value={equipment.numero_de_serie}
            id="numeroDeSerie"
            name="numero_de_serie"
            label="Número de Série"
            required
            fullWidth
          />
          <ErrorAlertText error={errors.numero_de_serie}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register({required: true})}
            onChange={handleUpdateEquipmentParent}
            value={equipment.nome_equipamento}
            id="nomeDoEquipamento"
            name="nome_equipamento"
            label="Nome do Equipamento"
            fullWidth
          />
          <ErrorAlertText error={errors.nome_equipamento}/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            value={equipment.numero_do_patrimonio}
            onChange={handleUpdateEquipmentParent}
            name="numero_do_patrimonio"
            id="numeroDoPatrimonio"
            label="Número do Patrimônio"
            fullWidth
          />
          <ErrorAlertText error={errors.numero_do_patrimonio}/>
        </Grid>


        <Grid item xs={12} sm={6}>
          <InputRadioDialog
            action={handleUpdateEquipmentParent}
            name={'tipo'}
            label="Tipo do Equipamento"
            hasOther={true}
            value={equipment.tipo}
            defaultValue={equipment.tipo}
            items={equipmentTypes.map(item => ({label: item, value: item}))}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <InputRadioDialog
            action={handleUpdateEquipmentParent}
            name={"marca"}
            label={"Marca"}
            hasOther={true}
            value={equipment.marca}
            defaultValue={equipment.marca}
            items={manufacturersEquipments.map(item => ({label: item, value: item}))}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <InputRadioDialog
            action={handleUpdateEquipmentParent}
            name={"modelo"}
            label={"Modelo"}
            hasOther={true}
            value={equipment.modelo}
            defaultValue={equipment.modelo}
            items={modelsEquipment.map(item => ({label: item, value: item}))}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            inputRef={register({required: true})}
            required
            id="fabricante"
            onChange={handleUpdateEquipmentParent}
            value={equipment.fabricante}
            name="fabricante"
            label="Fabricante"
            fullWidth
          />
        </Grid>


        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Município de Origem"
            value={equipment.municipio_origem}
            onChange={handleUpdateEquipmentParent}
            name={'municipio_origem'}
          >
            {cities.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            inputRef={register({required: true})}
            required
            id="nome_instituicao_origem"
            onChange={handleUpdateEquipmentParent}
            value={equipment.nome_instituicao_origem}
            name="nome_instituicao_origem"
            label="Nome da Instituição"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            select
            label="Tipo da instituição"
            value={equipment.tipo_instituicao_origem}
            onChange={handleUpdateEquipmentParent}
            name={'tipo_instituicao_origem'}
          >
            {typeInstitute.map((option, index) => (
              <MenuItem key={index} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </Grid>


        {/*ROW*/}
        <Grid item xs={6} sm={4}>
          <TextField
            inputRef={register({required: true})}
            required
            id="nomeDoResponsavel"
            onChange={handleUpdateEquipmentParent}
            value={equipment.nome_responsavel}
            name="nome_responsavel"
            label="Nome do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            id="constatoDoResponsavel"
            onChange={handleUpdateEquipmentParent}
            value={equipment.contato_responsavel}
            name="contato_responsavel"
            label="Contato do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <InputRadioDialog
            action={handleUpdateScreeningParent}
            name={'estado_de_conservacao'}
            label="Estado de Conservação"
            value={screening.estado_de_conservacao}
            defaultValue={screening.estado_de_conservacao}
            items={typeStateEquipment.map(item => ({label: item, value: item}))}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <InputFileImage name={"foto_apos_limpeza"} label={"Foto após da limpeza"} action={sendPhoto}/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
