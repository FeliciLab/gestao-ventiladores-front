import React from 'react'
import {grey} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(() => ({
    quadro: {
      padding: '5px',
      border: 1,
      borderStyle: 'solid',
      borderColor: grey[900],
      display: 'flex',
      justifyContent: 'space-around'
    }
}));
export default function CheckBoxDiagnostic (props) {
    const classes = useStyles();
    return (
        <div className={classes.quadro}>
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Circuito duplo/UTI/COVID-19" />
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Circuito único/Enfermaria/Não COVID-19" />
            <FormControlLabel control={<Checkbox name="checkedC" />} label="Transporte" />
        </div>
    )
}