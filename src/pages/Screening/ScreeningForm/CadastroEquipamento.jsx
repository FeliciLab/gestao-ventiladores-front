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
// import InputFileImage from '../../_common/forms/InputFileImage';
// import sendEquipmentPhoto from '../../../modelServices/photoEquipmentService';
import {
  manufacturersEquipments,
  modelsEquipment,
} from '../../../models/manufacturers';
import InputRadioDialog from '../../../components/InputRadioDialog/InputRadioDialog';
import ErrorAlertText from '../../_common/alerts/ErrorAlertText';
import { randomIndex } from '../../../utils';
import AlertContext from '../../../contexts/AlertContext';
import FormContext, { FormProvider } from '../../../contexts/FormContext'
import { Controller } from 'react-hook-form'

const CadastroEquipamento = ({ editingForm }) => {
  // const { setAlertMessage } = useContext(AlertContext);
  const cities = getCities('CE');

  const { register, errors, getValues, handleSubmit, control } = useContext(FormContext);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log(getValues());
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [])

  // const handleUpdateEquipmentParent = (event) => {
  //   const doc = {};
  //   doc[event.target.name] = event.target.value;
  //   if (event.target.name === 'marca' && equipment.fabricante === '') {
  //     doc.fabricante = event.target.value;
  //   }
  //   updateEquipment(doc);
  // };
  //
  // const handleUpdateScreeningParent = (event) => {
  //   const doc = {};
  //   doc[event.target.name] = event.target.value;
  //   updateScreening(doc);
  // };
  //
  // const updateServiceOrderParent = (event) => {
  //   const doc = {};
  //   doc[event.target.name] = event.target.value;
  //   updateServiceOrder(doc);
  // };
  //
  // const sendPhoto = (photo, name) => {
  //   const id = serviceOrder._id.$oid || serviceOrder._id;
  //   sendEquipmentPhoto(photo, name, id)
  //     .then((result) => {
  //       if (result) {
  //         setAlertMessage('Imagem anexada com sucesso');
  //         updateServiceOrderParent({
  //           target: {
  //             name: '_id',
  //             value: result,
  //           },
  //         });
  //         handleUpdateScreeningParent({
  //           target: {
  //             name,
  //             value: `${result}_${name}.jpeg`,
  //           },
  //         });
  //       }
  //     })
  //     .catch(() => {
  //       setAlertMessage('Erro no anexo, tente novamente', 'error');
  //     });
  // };

  return (
    <form onSubmit={handleSubmit((data, event) => {
      event.preventDefault();
      console.log(data, event);
    })}
    >
      <button type="submit">teste</button>

      <Typography variant="h6" gutterBottom>
        1. Cadastro de Equipamento
      </Typography>

      <Grid container>
        <Grid item xs={6}>
          {/*<InputFileImage*/}
          {/*  name="foto_antes_limpeza"*/}
          {/*  label="Foto antes da limpeza"*/}
          {/*  action={sendPhoto}*/}
          {/*/>*/}
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
          <Controller
            as={(
              <TextField
                inputRef={register}
                label="Município de Origem"
                defaultValue={cities[0]}
                fullWidth
                select
              >
                {cities.map((option) => (
                  <MenuItem key={randomIndex()} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="equipamento.municipio_origem"
            control={control}
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            label="Nome da Instituição"
            name="equipamento.nome_instituicao_origem"
            inputRef={register({ required: true })}
            id="nome_instituicao_origem"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            as={(
              <TextField
                inputRef={register}
                label="Tipo da instituição"
                defaultValue={typeInstitute[0]}
                fullWidth
                select
              >
                {typeInstitute.map((option) => (
                  <MenuItem key={randomIndex()} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            )}
            name="equipamento.tipo_instituicao_origem"
            control={control}
          />
        </Grid>

        <Grid item xs={6} sm={4}>
          <TextField
            name="equipamento.nome_responsavel"
            inputRef={register({ required: true })}
            id="nomeDoResponsavel"
            label="Nome do Responsável"
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <TextField
            inputRef={register}
            id="constatoDoResponsavel"
            name="equipamento.contato_responsavel"
            label="Contato do Responsável"
            fullWidth
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <InputRadioDialog
            name="estado_de_conservacao"
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
          {/*<InputFileImage*/}
          {/*  name="foto_apos_limpeza"*/}
          {/*  label="Foto após da limpeza"*/}
          {/*  action={sendPhoto}*/}
          {/*/>*/}
        </Grid>
      </Grid>
    </form>
  );
};

CadastroEquipamento.defaultProps = {
  editingForm: true,
};

CadastroEquipamento.propTypes = {
  editingForm: PropTypes.bool,
};

export default CadastroEquipamento;
