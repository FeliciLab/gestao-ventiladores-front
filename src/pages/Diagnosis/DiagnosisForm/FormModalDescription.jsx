import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';


const FormModalDescription = (props) => {
  const {
    open,
    item,
    handleClose,
    updateValue
  } = props

  const [description, setDescription] = useState('');

  useEffect(() => {
    if (item && item.descricao && item.descricao !== '') {
      setDescription(item)
    }
  }, [item])

  return (<React.Fragment>
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar Descrição</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Digite a descrição para o item
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Descrição"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={() => updateValue(description)} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  </React.Fragment>)
}

export default FormModalDescription