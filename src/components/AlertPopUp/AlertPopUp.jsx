import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import AlertContext from '../../contexts/AlertContext';

const { useContext } = require('react');

const AlertPopUp = () => {
  const { alert, setAlertMessage } = useContext(AlertContext);
  return (
    <Snackbar
      open={!!alert.message}
      autoHideDuration={6000}
      onClose={() => setAlertMessage('')}
    >
      <Alert
        severity={alert.alertType}
        onClose={() => setAlertMessage('')}
        variant="filled"
      >
        <span data-testid="alert-message">{alert.message}</span>
      </Alert>
    </Snackbar>
  );
};

export default AlertPopUp;
