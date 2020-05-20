import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import messageErros from './ErrorMessages';


const ErrorAlertText = (props) => {
  const { error } = props;
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (error) {
      setType(error.type);
      setMessage(error.message);
    }
  }, [error]);

  if (!error) {
    return (<></>);
  }

  return (
    <>
      <Typography
        variant="caption"
        component="small"
        color="error"
      >
        {!message || message === ''
          ? messageErros[type]
          : message}
      </Typography>
    </>
  );
};

ErrorAlertText.defaultProps = {
  error: {
    type: '',
    message: '',
  },
};
ErrorAlertText.propTypes = {
  error: PropTypes.instanceOf(Object),
};

export default ErrorAlertText;
