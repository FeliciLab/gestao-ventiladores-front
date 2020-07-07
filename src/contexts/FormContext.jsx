import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const {
    register,
    errors,
    triggerValidation,
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const resetForm = () => {
    reset();
  };

  return (
    <FormContext.Provider value={{ register, errors, triggerValidation, handleSubmit, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

FormProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default FormContext;
