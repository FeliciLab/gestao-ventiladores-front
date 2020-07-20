import React, {
  createContext,
  useState,
} from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [openLoading, setOpenLoading] = useState(false);
  const [progressLoading, setProgressLoading] = useState(0);
  const [messageLoading, setMessageLoading] = useState('Carregando...');

  return (
    <LoadingContext.Provider
      value={{
        openLoading,
        setOpenLoading,
        progressLoading,
        setProgressLoading,
        messageLoading,
        setMessageLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default LoadingContext;
