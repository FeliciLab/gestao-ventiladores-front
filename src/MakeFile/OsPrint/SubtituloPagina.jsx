import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const useClass = makeStyles(() => ({
  texto: {
    color: grey[900],
    fontSize: '12pt',
    fontWeight: 'bold',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
}));

const SubtituloPagina = (props) => {
  const classes = useClass();
  const {
    texto,
  } = props;

  return (
    <Typography className={classes.texto}>
      <strong>{texto}</strong>
    </Typography>
  );
};

SubtituloPagina.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default SubtituloPagina;
