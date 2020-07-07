import React, {
  createContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ message: '', alertType: 'success' });

  const setAlertMessage = (message, alertType = 'success') => {
    setAlert({ message, alertType });
  };

  return (
    <AlertContext.Provider value={{ alert, setAlertMessage }}>
      {children}
    </AlertContext.Provider>
  );
};

AlertProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default AlertContext;
