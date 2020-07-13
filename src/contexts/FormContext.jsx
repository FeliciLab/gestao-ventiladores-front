import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const FormContext = createContext({});

export const FormProvider = ({ initValues, children }) => {
  const {
    register,
    errors,
    triggerValidation,
    handleSubmit,
    getValues,
    control,
  } = useForm({
    defaultValues: initValues || {},
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  return (
    <FormContext.Provider
      value={{
        register,
        errors,
        triggerValidation,
        handleSubmit,
        getValues,
        control,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

FormProvider.defaultProps = {
  initValues: {},
};

FormProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
  initValues: PropTypes.instanceOf(Object),
};

export default FormContext;
