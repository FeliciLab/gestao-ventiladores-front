import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import ErrorAlertText from '../_common/alerts/ErrorAlertText';
import FormContext from '../../contexts/FormContext';

const FormItem = ({ minAmount }) => {
  const {
    errors,
    register,
    getValues,
    control,
  } = useContext(FormContext);

  return (
    <>
      <input
        type="text"
        hidden
        name="_id"
        ref={register}
        defaultValue={getValues('_id')}
        readOnly
      />
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Tipo do item</FormLabel>
            <Controller
              as={(
                <RadioGroup
                  aria-label="tipo-do-item"
                  style={{ flexDirection: 'row' }}
                  required
                >
                  <FormControlLabel
                    value="pecas"
                    name="tipo"
                    control={<Radio color="default" />}
                    label="Peça"
                  />
                  <FormControlLabel
                    value="acessorio"
                    name="tipo"
                    control={<Radio color="default" />}
                    label="Acessório"
                  />
                  <FormControlLabel
                    value="insumo"
                    name="tipo"
                    control={<Radio color="default" />}
                    label="Insumo"
                  />
                </RadioGroup>
              )}
              name="tipo"
              control={control}
            />

          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            inputRef={register}
            fullWidth
            name="fabricante"
            label="Fabricante"
          />
          <ErrorAlertText error={errors.fabricante} />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            inputRef={register}
            label="Código do item"
            name="codigo"
          />
          <ErrorAlertText error={errors.codigo} />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            inputRef={register({ required: true })}
            fullWidth
            label="Nome do item"
            name="nome"
            required
          />
          <ErrorAlertText error={errors.nome} />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            inputRef={register({ required: true })}
            fullWidth
            label="Unidade de medida"
            name="unidade_medida"
            required
          />
          <ErrorAlertText error={errors.unidade_medida} />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            inputRef={register({ required: true, min: minAmount })}
            fullWidth
            label="Quantidade"
            name="quantidade"
            type="number"
            required
          />
          <ErrorAlertText error={errors.quantidade} />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            inputRef={register}
            label="Descrição do Item"
            name="descricao"
          />
        </Grid>
      </Grid>
    </>
  );
};

FormItem.defaultProps = {
  minAmount: 0,
};

FormItem.propTypes = {
  minAmount: PropTypes.number,
};

export default FormItem;
