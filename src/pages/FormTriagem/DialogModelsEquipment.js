import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import RadioControl from "../_common/form/RadioControl";

const DialogModelsEquipments = (props) => {
  React.useEffect(() => {
    setOpen(props.open);
  }, [props]);

  const [open, setOpen] = React.useState(false);
  const [inputOther, setInputOther] = React.useState('');
  const [radioValue, setRadioValue] = React.useState('');

  const {items, name, hasOther, action, label, dialogTitle} = props;

  function handleClose () {
    setOpen(false);
  }

  function changeRadio (event, value, other) {
    console.log(value)
    setRadioValue(value);

    if (value !== 'other') {
      return action(event);
    }

    setInputOther(other);
  }

  function updateParent () {
    const doc = {target: {name, value: ''}};
    if (radioValue === 'other') {
      doc.target.value = inputOther;
    } else {
      doc.target.value = radioValue;
    }

    return action(doc);
  }

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
          flexDirection={'column'}
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

export default DialogModelsEquipments;