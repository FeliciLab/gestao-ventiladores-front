import React from 'react';
import Typography from "@material-ui/core/Typography";
import messageErros from "./errorMessages";


export default function ErrorAlertText (props) {
  React.useEffect(() => {
    if (props.error) {
      setType(props.error.type);
      setMessage(props.error.message);
    }
  }, [props]);
  const [type, setType] = React.useState('');
  const [message, setMessage] = React.useState('');

  // const messageErros = messageErros;

  if (!props.error) {
    return (<React.Fragment></React.Fragment>);
  }

  return (<React.Fragment>
    <Typography
      variant={'caption'}
      component={'small'}
      color={'error'}
    >
      {!message || message === '' ? messageErros[type] : message}
    </Typography>
  </React.Fragment>);
}