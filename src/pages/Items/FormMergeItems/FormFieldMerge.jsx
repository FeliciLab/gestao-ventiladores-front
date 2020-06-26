import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import { randomIndex } from '../../../utils';


const { useState } = require('react');

const FormFieldMerge = (props) => {
  const { choices, index, handleSetModel, value, name, label } = props;

  const [selectValue, setSelectValue] = useState(choices[0] ? choices[0] : '');

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        {choices.length === 0 ? (
          'Não há opções'
        ) : (
          <TextField
            id="standard-select-currency"
            label={`Valores antigos de: ${label}`}
            value={selectValue}
            onChange={(event) => {
              setSelectValue(event.target.value);
              handleSetModel(event, index);
            }}
            helperText="Selecione um valor desejado para o novo item"
            name={name}
            select
            fullWidth>
            {choices.map((option) => (
              <MenuItem key={randomIndex()} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        )}
      </Grid>
      <Grid item xs={6}>
        <TextField
          label={label}
          name={name}
          value={value}
          onChange={(event) => handleSetModel(event, index)}
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

FormFieldMerge.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  choices: PropTypes.instanceOf(Array).isRequired,
  index: PropTypes.number.isRequired,
  handleSetModel: PropTypes.func.isRequired,
};

export default FormFieldMerge;
