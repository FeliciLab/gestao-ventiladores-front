import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const useClass = makeStyles(() => ({
  texto: {
    color: grey[900],
    fontSize: '14pt',
    fontWeight: 'bold',
    paddingTop: '8px',
    paddingBottom: '8px',
  },
}));
const TopicPrint = (props) => {
  const { text } = props;
  const classes = useClass();
  return (
    <Typography className={classes.texto}>
      <strong>{text}</strong>
    </Typography>
  );
};

TopicPrint.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TopicPrint;
