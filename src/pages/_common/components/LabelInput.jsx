import React from 'react';
import PropTypes from 'prop-types';
import DoneIcon from '@material-ui/icons/Done';
import { green } from '@material-ui/core/colors';
import {
  Grid,
  TableCell,
  TextField,
  Typography,
} from '@material-ui/core';
import ColorIconButton from '../forms/ColorIconButton';


const LabelInput = (props) => {
  const {
    name,
    value,
    action,
    label,
  } = props;
  const [showInput, setShowInput] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState('');

  const icons = {
    done: {
      icon: <DoneIcon fontSize="small" />,
      color: green[100],
      bgColor: green[600],
      hoverColor: green[800],
    },
  };

  function changeInput() {
    if (!showInput) {
      setCurrentValue(value);
      setShowInput(true);
    }
  }

  function updateParent() {
    action(currentValue);
  }

  return (
    <>
      <TableCell onClick={changeInput}>
        {showInput
          ? (
            <>
              <Grid container>
                <Grid item xs>
                  <TextField
                    onChange={(event) => setCurrentValue(event.target.value)}
                    fullWidth
                    label={label}
                    name={name}
                    value={currentValue}
                  />
                </Grid>
                <Grid item xs="auto">
                  <ColorIconButton
                    action={updateParent}
                    name="Aceitar"
                    icon={icons.done}
                    item={{ value }}
                  />
                </Grid>
              </Grid>

            </>
          )
          : (
            <>
              <Typography variant="subtitle2">
                {currentValue !== ''
                  ? currentValue
                  : value}
              </Typography>
            </>
          )}
      </TableCell>
    </>
  );
};

LabelInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default LabelInput;
