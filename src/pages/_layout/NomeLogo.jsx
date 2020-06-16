import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  text: {
    padding: '48px',
    height: '250px',
    width: 'fit-content',
    fontSize: '1.5rem',
  },
}));

const NomeLogo = () => {
  const { text } = useStyle();
  return (
    <Typography className={text} noWrap>
      <strong>
        CENTRAL
        <br />
        DE
        <br />
        VENTILADORES
      </strong>
    </Typography>
  );
};

export default NomeLogo;
