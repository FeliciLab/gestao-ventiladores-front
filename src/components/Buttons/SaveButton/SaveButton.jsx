import React from 'react';
import PropTypes from 'prop-types';
import ThemeButton from '../../../pages/_common/forms/ThemeButton';
import SaveIcon from '@material-ui/icons/Save';

const SaveButton = (props) => {
  const { onClick, filled } = props;
  const variant = filled
    ? 'contained'
    : 'outlined';

  return (
    <ThemeButton
      onClick={onClick}
      startIcon={<SaveIcon />}
      variant={variant}
      borderColor="white"
    >
      Salvar
    </ThemeButton>
  );
};

SaveButton.defaultProps = {
  filled: true,
};

SaveButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
};

export default SaveButton;
