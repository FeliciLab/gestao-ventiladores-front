import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import RadioControl from '../../pages/_common/forms/RadioControl';


const FormInputRadio = (props) => {
  const [open, setOpen] = React.useState(false);
  const [inputOther, setInputOther] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');

  const {
    items,
    name,
    updateOpen,
    hasOther,
    action,
    label,
    dialogTitle,
    openDialog,
  } = props;

  React.useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const handleClose = () => {
    updateOpen(false);
    setOpen(false);
  };

  const changeRadio = (event, value, other) => {
    setRadioValue(value);

    if (value !== 'other') {
      return action(event);
    }

    setInputOther(other);
    return true;
  };

  const updateParent = () => {
    const doc = { target: { name, value: '' } };
    if (radioValue === 'other') {
      doc.target.value = inputOther;
    } else {
      doc.target.value = radioValue;
    }

    return action(doc);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        onClose={handleClose}
      >
        {dialogTitle}
      </DialogTitle>

      <DialogContent>
        <RadioControl
          name={name}
          action={changeRadio}
          flexDirection="column"
          formLabel={label}
          items={items}
          hasOther={hasOther}
        />
      </DialogContent>

      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
        >
          Cancelar
        </Button>
        <Button
          onClick={updateParent}
          color="primary"
        >
          Selecionar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

FormInputRadio.defaultProps = {
  hasOther: false,
  label: '',
  dialogTitle: '',
  openDialog: false,
};

FormInputRadio.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  updateOpen: PropTypes.func.isRequired,
  action: PropTypes.func.isRequired,
  openDialog: PropTypes.bool,
  hasOther: PropTypes.bool,
  label: PropTypes.string,
  dialogTitle: PropTypes.string,
};

export default FormInputRadio;
