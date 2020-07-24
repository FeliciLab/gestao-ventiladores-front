import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';
import equipmentTypes from '../../../models/equipmentTypes';
import getCities from '../../../services/cities';
import typeInstitute from '../../../models/typeInstitute';
import typeStateEquipment from '../../../models/typeStateEquipment';
import InputFileImage from '../../_common/forms/InputFileImage';
import sendEquipmentPhoto from '../../../modelServices/photoEquipmentService';
import {
  manufacturersEquipments,
  modelsEquipment,
} from '../../../models/manufacturers';
import InputRadioDialog from '../../../components/InputRadioDialog/InputRadioDialog';
import ErrorAlertText from '../../_common/alerts/ErrorAlertText';
import { randomIndex } from '../../../utils';
import AlertContext from '../../../contexts/AlertContext';
import FormContext from '../../../contexts/FormContext';
import { NearMeSharp } from '@material-ui/icons';
import { Controller } from 'react-hook-form';

const CadastroEquipamento = (props) => {
  const { setAlertMessage } = useContext(AlertContext);
  const { register, errors , control , getValues , setValue } = useContext(FormContext);
  const cities = getCities('CE');
  const {
    editingForm,
  } = props;

  const sendPhoto = (photo, name) => {
    sendEquipmentPhoto(photo, name.replace('triagem.',''), getValues('_id'))
      .then((result) => {
        if (result) {
          setAlertMessage('Imagem anexada com sucesso');
          setValue('_id', result);
          setValue(name, `${result}_${name.replace('triagem','')}.jpeg`);
        }
      })
      .catch(() => {
        setAlertMessage('Erro no anexo, tente novamente', 'error');
      });
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        1. Cadastro de Equipamento
      </Typography>

      <Grid container>
        <Grid item xs={6}>
          <InputFileImage
            name="triagem.foto_antes_limpeza"
            label="Foto antes da limpeza"
            action={sendPhoto}
          />
          <ErrorAlertText error={errors.foto_antes_limpeza} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register({ required: true })}
            name="numero_ordem_servico"
            label="Número da Ordem de Serviço"
            InputProps={{
              readOnly: editingForm || false,
            }}
            required
            fullWidth
          />
          <ErrorAlertText error={errors.numero_ordem_servico} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register({ required: true })}
            id="numeroDeSerie"
            name="equipamento.numero_de_serie"
            label="Número de Série"
            required
            fullWidth
          />
          <ErrorAlertText error={errors.numero_de_serie} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register({ required: true })}
            id="nomeDoEquipamento"
            name="equipamento.nome_equipamento"
            label="Nome do Equipamento"
            fullWidth
          />
          <ErrorAlertText error={errors.nome_equipamento} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            inputRef={register}
            name="equipamento.numero_do_patrimonio"
            id="numeroDoPatrimonio"
            label="Número do Patrimônio"
            fullWidth
          />
          <ErrorAlertText error={errors.numero_do_patrimonio} />
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputRadioDialog
            name="equipamento.tipo"
            label="Tipo do Equipamento"
            hasOther
            items={equipmentTypes.map((item) => ({ label: item, value: item }))}
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <InputRadioDialog
            name="equipamento.marca"
            label="Marca"
            hasOther
            items={manufacturersEquipments.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <InputRadioDialog
            name="equipamento.modelo"
            label="Modelo"
            hasOther
            items={modelsEquipment.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            inputRef={register({ required: true })}
            required
            id="fabricante"
            name="equipamento.fabricante"
            label="Fabricante"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Controller as={(
            <TextField
              fullWidth
              select
              label="Município de Origem"
              >
              {cities.map((option) => (
                <MenuItem key={randomIndex()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          )} name="equipamento.municipio_origem" control={control} />    
        </Grid>
        <Grid item xs={6} sm={4}>
            <TextField
              inputRef={register({ required: true })}
              required
              id="nome_instituicao_origem"
              label="Nome da Instituição"
              name="equipamento.nome_instituicao_origem"
              fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller as={(
            <TextField
              fullWidth
              select
              label="Tipo da instituição"
              >
              {typeInstitute.map((option) => (
                <MenuItem key={randomIndex()} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

          )} name="equipamento.tipo_instituicao_origem" control={control}/>
        </Grid>

        <Grid item xs={6} sm={4}>
          <TextField
            inputRef={register({ required: true })}
            required
            id="nomeDoResponsavel"
            name="nome_responsavel"
            label="Nome do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            inputRef={register}
            id="constatoDoResponsavel"
            name="contato_responsavel"
            label="Contato do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <InputRadioDialog
            name="triagem.estado_de_conservacao"
            label="Estado de Conservação"
            items={typeStateEquipment.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6}>
          <InputFileImage
            name="triagem.foto_apos_limpeza"
            label="Foto após da limpeza"
            action={sendPhoto}
          />
        </Grid>
      </Grid>
    </>
  );
};

CadastroEquipamento.defaultProps = {
  editingForm: false,
};

CadastroEquipamento.propTypes = {
  errors: PropTypes.instanceOf(Object).isRequired,
  register: PropTypes.func.isRequired,
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
  equipment: PropTypes.instanceOf(Object).isRequired,
  screening: PropTypes.instanceOf(Object).isRequired,
  updateEquipment: PropTypes.func.isRequired,
  updateScreening: PropTypes.func.isRequired,
  updateServiceOrder: PropTypes.func.isRequired,
  editingForm: PropTypes.bool,
};

export default CadastroEquipamento;
