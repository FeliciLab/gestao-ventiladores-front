import React from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';


const mapErrorsName = (errors) => {
  const names = [];
  Object.keys(errors).forEach((error) => {
    names.push({
      name: error,
      type: errors[error].type,
      message: errors[error].message,
    });
  });
  return names;
};

const ErrorAlertBar = (props) => {
  const {
    type,
    errors,
  } = props;

  const [errorsData, setErrorsData] = React.useState([]);

  React.useEffect(() => {
    setErrorsData(mapErrorsName(errors));
  }, [errors]);

  const errorsMap = {
    required: ' é obrigatório.',
  };

  return (
    <>
      {errorsData.map((item) => (
        <Alert
          key={item.type}
          severity={type}
        >
          {item.name}
          {item.message !== ''
            ? item.message
            : errorsMap[item.type]}
        </Alert>
      ))}
    </>
  );
};
ErrorAlertBar.defaultProps = {
  type: 'error',
};
ErrorAlertBar.propTypes = {
  type: PropTypes.string,
  errors: PropTypes.instanceOf(Object).isRequired,
};

export default ErrorAlertBar;
