import React from 'react';
import ControlledInput from "../forms/ControlledInput";
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import {green, red} from "@material-ui/core/colors";
import ColorIconButton from "../forms/ColorIconButton";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export default function CellInput (props) {

  const {name, defaultValue, action, label} = props;

  const [showInput, setShowInput] = React.useState(false);
  const [valueInput, setValueInput] = React.useState('')

  const icons = {
    done: {
      icon: <DoneIcon fontSize={"small"}/>,
      color: green[100],
      bgColor: green[600],
      hoverColor: green[800]
    },
    close: {
      icon: <CloseIcon fontSize={"small"}/>,
      color: red[100],
      bgColor: red[600],
      hoverColor: red[800]
    }
  };

  function changeInput () {
    if (!showInput) {
      setShowInput(true);
    }
  }

  function updateParent (event) {
    setValueInput(event.target.value)
    action(event);
  }

  return (<React.Fragment>
    <div onClick={changeInput}>

      {showInput ?
        (<React.Fragment>
          <Grid container>
            <Grid
              item
              xs={true}
            >
              <ControlledInput
                fullWidth={false}
                label={label}
                name={name}
                action={updateParent}
                defaultValue={defaultValue}
              />
            </Grid>
            <Grid
              item
              xs={"auto"}
            >
              <ColorIconButton
                action={() => setShowInput(false)}
                name={"Aceitar"}
                icon={icons.done}
                item={defaultValue}
              />
            </Grid>
          </Grid>

        </React.Fragment>) : (<React.Fragment>
          <Typography variant={"subtitle2"}>
            {valueInput === '' ? defaultValue : valueInput}
          </Typography>
        </React.Fragment>)}
    </div>
  </React.Fragment>);
}