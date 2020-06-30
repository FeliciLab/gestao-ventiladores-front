import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import ItemContext from './ItemContext';
import ErrorAlertText from '../_common/alerts/ErrorAlertText';

const CreateNewItem = ({ minAmount }) => {
  const { item, setItem } = useContext(ItemContext);

  const { register, errors, triggerValidation } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const updateItem = (event) => {
    const doc = {};
    doc[event.target.name] =
      event.target.name === 'quantidade' && event.target.value < minAmount
        ? minAmount
        : event.target.value;
    setItem({ ...item, ...doc });
  };

  return (
    <>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Tipo do item</FormLabel>
              <RadioGroup
                aria-label="tipo-do-item"
                name="tipo"
                value={item.tipo}
                onChange={updateItem}
                style={{ flexDirection: 'row' }}
                required>
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
            </FormControl>
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              value={item.fabricante}
              name="fabricante"
              label="Fabricante"
              onChange={updateItem}
            />
            <ErrorAlertText error={errors.fabricante} />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              value={item.codigo}
              label="Código do item"
              onChange={updateItem}
              name="codigo"
            />
            <ErrorAlertText error={errors.codigo} />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({ required: true })}
              fullWidth
              value={item.nome}
              label="Nome do item"
              onChange={updateItem}
              name="nome"
              required
            />
            <ErrorAlertText error={errors.nome} />
          </Grid>

          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({ required: true })}
              fullWidth
              value={item.unidade_medida}
              label="Unidade de medida"
              onChange={updateItem}
              name="unidade_medida"
              required
            />
            <ErrorAlertText error={errors.unidade_medida} />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              inputRef={register({ required: true })}
              fullWidth
              value={item.quantidade}
              label="Quantidade"
              onChange={updateItem}
              name="quantidade"
              type="number"
              required
            />
            <ErrorAlertText error={errors.quantidade} />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              value={item.descricao}
              label="Descrição do Item"
              onChange={updateItem}
              name="descricao"
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

CreateNewItem.defaultProps = {
  minAmount: 0,
};

CreateNewItem.propTypes = {
  minAmount: PropTypes.number,
};

export default CreateNewItem;
