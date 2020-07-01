import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const AlertPopUp = (props) => {
  const { alertMessage, alertType } = props;
  const [msg, setMsg] = useState(alertMessage);

  useEffect(() => {
    setMsg(msg);
  }, [alertMessage]);

  return (
    <Snackbar open={!!msg} autoHideDuration={6000} onClose={() => setMsg('')}>
      <Alert severity={alertType} onClose={() => setMsg('')} variant="filled">
        {msg}
      </Alert>
    </Snackbar>
  );
};

AlertPopUp.defaultProps = {
  alertType: 'success',
};

AlertPopUp.propTypes = {
  alertMessage: PropTypes.string.isRequired,
  alertType: PropTypes.string,
};

export default AlertPopUp;
