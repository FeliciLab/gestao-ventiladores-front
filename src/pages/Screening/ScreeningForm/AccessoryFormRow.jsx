import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { accessoryMapOptionsConservationState } from '../../../models/conservationState';
import { randomIndex } from '../../../utils';
import FormRadioDialog from '../../_common/forms/FormRadioDialog';
import { useContext } from 'react';
import FormContext from '../../../contexts/FormContext';
import { Controller } from 'react-hook-form';

const AccessoryFormRow = (props) => {
  const { acessorio, atualizarAcessorio, removerLinha, index, items } = props;
  const conservationOption = accessoryMapOptionsConservationState();

  const { register , control } = useContext(FormContext);

  const atualizarAcessorioParent = (event) => {
    const doc = {};
    doc[event.target.name] = event.target.value;
    atualizarAcessorio(index, doc);
  };

  const handleAcessorioUpdate = (event) => {
    const doc = {};
    doc[event.target.name] = event.target.value;
    console.log(event.target.value);
    atualizarAcessorio(index, doc);
    // updateEquipment(doc);
  };

  const prefixName = `triagem.acessorios[${index}]`;

  return (
    <Grid container spacing={3} justify="flex-start" alignItems="flex-end">
      <Grid item xs={6} sm={5}>
        <FormRadioDialog
          action={handleAcessorioUpdate}
          name={`${prefixName}.descricao`}
          label="Descrição"
          hasOther
          defaultValue={acessorio.nome ? acessorio.nome : acessorio.descricao}
          items={items.map((item) => ({
            label: item.nome,
            value: item._id ? item._id : item.nome,
          }))}
        />
      </Grid>
      <Grid item xs={6} sm={1}>
      <Controller as ={(
        <FormControl fullWidth>
          <InputLabel>Acompanha</InputLabel>
          <Select
            >
            <MenuItem value>Sim</MenuItem>
            <MenuItem value={false}>Não</MenuItem>
          </Select>
        </FormControl>
      )} name={`${prefixName}.acompanha`} control = {control} />
      </Grid>
      <Grid item xs={6} sm={2}>
        <TextField
          name={`${prefixName}.quantidade`}
          label="Quantidade"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={5} sm={3}>
        <Controller as={(
          <TextField
            select
            label="Estado de Conservação"
            fullWidth>
            {conservationOption.map((item) => (
              <MenuItem key={randomIndex()} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        )} name={`${prefixName}.estado_de_conservacao`} control = {control}
        />
      </Grid>
      <Grid item xs={12} sm={1}>
        <Tooltip title="Remover">
          <Button onClick={() => removerLinha(index)}>
            <DeleteIcon />
          </Button>
        </Tooltip>
      </Grid>
    </Grid>
  );
};
AccessoryFormRow.propTypes = {
  acessorio: PropTypes.instanceOf(Object).isRequired,
  atualizarAcessorio: PropTypes.func.isRequired,
  removerLinha: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
export default AccessoryFormRow;
