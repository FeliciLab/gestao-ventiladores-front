import React from 'react';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const DialogModelsEquipments = (props) => {
  React.useEffect(() => {
    setOpen(props);
  }, [props]);

  const [open, setOpen] = React.useState(false);
  const {items, titleModal, hasOther} = props;

  function handleClose () {
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle
        id="form-dialog-title"
        onClose={handleClose}
      >
        {titleModal}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We will send updates
          occasionally.
        </DialogContentText>
        {
          hasOther ? () : ('')
        }
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          color="primary"
        >
          Cancelar
        </Button>
        <Button
          onClick={handleClose}
          color="primary"
        >
          Selecionar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogModelsEquipments;