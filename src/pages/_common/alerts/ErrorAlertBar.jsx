import React from 'react';
import Alert from '@material-ui/lab/Alert';


const ErrorAlertBar = (props) => {
  React.useEffect(() => {
    setErrors(mapErrorsName(props.errors));
  }, props);

  const [errors, setErrors] = React.useState([]);

  const {type} = props;

  const errorsMap = {
    required: ' é obrigatório.'
  };

  function mapErrorsName (errors) {
    const names = [];
    for (let error in errors) {
      names.push({
        name: error,
        type: errors[error].type,
        message: errors[error].message
      });
    }
    return names;
  }

  return (<React.Fragment>
    {errors.map((item, index) => (
      <Alert
        key={index}
        severity={type || 'error'}
      >
        {item.name} {item.message !== '' ? item.message : errorsMap[item.type]}
      </Alert>
    ))}
  </React.Fragment>);
};

export default ErrorAlertBar;