import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { updateCalibration } from '../../modelServices/calibragemService';


const FormStatusCalibration = (props) => {
  const { serviceOrder } = props;

  function saveCalibration(value, name) {
    const doc = {};
    doc[name] = value;
    updateCalibration(serviceOrder._id.$oid || serviceOrder._id, doc);
    return true;
  }

  return (
    <>
      <TextField
        name="status"
        onChange={(event) => saveCalibration(event.target.value, event.target.name)}
        defaultValue={serviceOrder.calibragem.status}
        select
        fullWidth
      >
        <MenuItem value="descalibrado">Descalibrado</MenuItem>
        <MenuItem value="calibrado">Calibrado</MenuItem>
      </TextField>
    </>
  );
};

FormStatusCalibration.propTypes = {
  serviceOrder: PropTypes.instanceOf(Object).isRequired,
};

export default FormStatusCalibration;
