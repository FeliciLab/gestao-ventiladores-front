import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import orange from '@material-ui/core/colors/orange';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const CancelButton = (props) => {
  const { onClick, filled } = props;
  const variant = filled
    ? 'filled'
    : 'outlined';

  const backgroundColor = filled
    ? orange[600]
    : 'inherit';

  const color = filled
    ? '#fff'
    : orange[600];

  const hoverColorBg = filled
    ? orange[700]
    : orange[100];

  const hoverColorText = filled
    ? '#fff'
    : orange[600];

  const ColorButton = withStyles(() => ({
    root: {
      borderRadius: 20,
      color,
      backgroundColor,
      border: `solid 1px ${backgroundColor}`,
      borderColor: backgroundColor,
      '&:hover': {
        backgroundColor: hoverColorBg,
        color: hoverColorText,
      },
    },
  }))(Button);

  return (
    <ColorButton
      onClick={onClick}
      startIcon={<CloseIcon />}
      variant={variant}
    >
      Cancelar
    </ColorButton>
  );
};

CancelButton.defaultProps = {
  filled: false,
};

CancelButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  filled: PropTypes.bool,
};

export default CancelButton;
