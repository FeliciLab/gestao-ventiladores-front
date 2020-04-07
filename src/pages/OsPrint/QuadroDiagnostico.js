import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles(() => ({
  quadro: {
    padding: '5px',
    border: 1,
    borderStyle: 'solid',
    borderColor: grey[900]
  },
  quadroInterno: {
    borderColor: grey[300],
    height: '140px'
  }
}));
export default function QuadroDiagnosticos (props) {
  const classes = useStyles();

  return (
    <div className={classes.quadro}>
      <div className={`${classes.quadro} ${classes.quadroInterno}`}></div>
    </div>

  )
}