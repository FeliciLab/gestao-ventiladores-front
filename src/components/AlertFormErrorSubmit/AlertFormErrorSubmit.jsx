import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';

const AlertFormErrorSubmit = ({ show, setShow, timeout }) => {
  const createTimeout = () => {
    if (!timeout) {
      return;
    }

    setTimeout(() => {
      setShow(false);
    }, 5000);
  };

  useEffect(createTimeout, [show]);

  if (!show) {
    return <></>;
  }

  return (
    <Alert color="error" onClose={() => setShow(false)}>
      Não é possível salvar. Verifique o formulário e preencha os campos
      corretamente.
    </Alert>
  );
};

AlertFormErrorSubmit.defaultProps = {
  timeout: false,
};

AlertFormErrorSubmit.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  timeout: PropTypes.bool,
};

export default AlertFormErrorSubmit;
