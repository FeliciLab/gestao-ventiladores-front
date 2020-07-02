import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState({
    open: false,
    progress: 0,
    message: 'Carregando...',
  });

  const setLoadingContext = ({ open, progress, message }) => {
    setLoading({
      open: !!open,
      progress: progress >= 0 || progress <= 100 ? progress : 0,
      message: message || loading.message,
    });
  };

  return (
    <LoadingContext.Provider value={{ loading, setLoadingContext }}>
      {children}
    </LoadingContext.Provider>
  );
};

LoadingProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default LoadingContext;
