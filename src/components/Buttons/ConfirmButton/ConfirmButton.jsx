import React from 'react';
import PropTypes from 'prop-types';
import ThemeButton from '../../../pages/_common/forms/ThemeButton';
import green from '@material-ui/core/colors/green';
import DoneIcon from '@material-ui/icons/Done';

const ConfirmButton = (props) => {
  const { onClick, filled } = props;
  const variant = filled
    ? 'contained'
    : 'outlined';

  return (
    <ThemeButton
      onClick={onClick}
      startIcon={<DoneIcon />}
      variant={variant}
      bgColor={green.A700}
      hoverColor={green.A400}
    >
      Ok
    </ThemeButton>
  );
};

ConfirmButton.defaultProps = {
  filled: true,
};

ConfirmButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
};

export default ConfirmButton;
