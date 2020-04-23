import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import {green} from "@material-ui/core/colors";
import ColorIconButton from "../forms/ColorIconButton";
import {Grid, TableCell, TextField, Typography} from "@material-ui/core";

const LabelInput = (props) => {

  const {name, value, action, label} = props;
  const [showInput, setShowInput] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState('');

  const icons = {
    done: {
      icon: <DoneIcon fontSize={"small"}/>,
      color: green[100],
      bgColor: green[600],
      hoverColor: green[800]
    }
  };

  function changeInput () {
    if (!showInput) {
      setCurrentValue(value);
      setShowInput(true);
    }
  }

  function updateParent () {
    action(currentValue);
  }

  return (<React.Fragment>
    <TableCell onClick={changeInput}>
      {showInput ?
        (<React.Fragment>
          <Grid container>
            <Grid
              item
              xs={true}
            >
              <TextField
                onChange={(event) => setCurrentValue(event.target.value)} fullWidth label={label} name={name}
                value={currentValue}
              />
            </Grid>
            <Grid
              item
              xs={"auto"}
            >
              <ColorIconButton
                action={updateParent}
                name={"Aceitar"}
                icon={icons.done}
                item={value}
              />
            </Grid>
          </Grid>

        </React.Fragment>) : (<React.Fragment>
          <Typography variant={"subtitle2"}>
            {currentValue !== '' ? currentValue : value}
          </Typography>
        </React.Fragment>)}
    </TableCell>
  </React.Fragment>);
};
export default LabelInput;