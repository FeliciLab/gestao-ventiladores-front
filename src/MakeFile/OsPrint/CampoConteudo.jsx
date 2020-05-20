import React from 'react';
import PropTypes from 'prop-types';
import grey from '@material-ui/core/colors/grey';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useClass = makeStyles(() => ({
  titulo: {
    color: grey[500],
    fontSize: '10pt',
  },
  texto: {
    color: grey[900],
    fontSize: '12pt',
  },
}));

const CampoConteudo = (props) => {
  const classes = useClass();
  const {
    titulo,
    texto,
  } = props;
  return (
    <div>
      <Typography className={classes.titulo}>{titulo}</Typography>
      <Typography className={classes.texto}>{texto}</Typography>
    </div>
  );
};

CampoConteudo.defaultProps = {
  titulo: '---',
  texto: '---',
};

CampoConteudo.propTypes = {
  titulo: PropTypes.string,
  texto: PropTypes.string,
};

export default CampoConteudo;
