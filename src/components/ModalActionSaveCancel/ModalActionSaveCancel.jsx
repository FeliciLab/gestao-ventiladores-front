import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';
import orange from '@material-ui/core/colors/orange';
import ThemeButton from '../../pages/_common/forms/ThemeButton';

const ModalActionSaveCancel = ({ handleSave, handleCancel }) => {
  if (!handleSave || !handleCancel) {
    throw new Error(
      'handleSave or handleCancel props are undefined or not a function',
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <ThemeButton
            onClick={handleCancel}
            startIcon={<CloseIcon />}
            variant="outlined"
            borderColor="white">
            Cancelar
          </ThemeButton>
        </Grid>
        <Grid item>
          <ThemeButton
            startIcon={<SaveIcon />}
            onClick={() => handleSave()}
            name="Salvar"
            color={orange[600]}
            bgColor="#FFF"
            hoverColor={orange[50]}>
            Salvar
          </ThemeButton>
        </Grid>
      </Grid>
    </>
  );
};

ModalActionSaveCancel.propTypes = {
  handleSave: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};

export default ModalActionSaveCancel;
