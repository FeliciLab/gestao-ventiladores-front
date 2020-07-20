import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import CancelButton from '../Buttons/CancelButton/CancelButton';
import ConfirmButton from '../Buttons/ConfirmButton/ConfirmButton';

const ConfirmModal = (props) => {
  const { action, open, children } = props;

  const [openDialog, setOpenDialog] = useState(false);

  const handleEffects = () => {
    setOpenDialog(open);
  };

  useEffect(handleEffects, [open]);

  return (
    <Dialog
      open={openDialog}
      aria-labelledby="modal-de-confirmacao"
    >
      <DialogTitle
        id="titulo-modal-confirmacao"
        aria-labelledby="titulo-modal-confirmacao-confirmacao"
      >
        Confirmação
      </DialogTitle>
      <DialogContent>
        <Typography variant="h5">
          {children}
        </Typography>
      </DialogContent>
      <DialogActions>
        <CancelButton onClick={() => setOpenDialog(false)} />
        <ConfirmButton onClick={action}></ConfirmButton>
      </DialogActions>
    </Dialog>
  );
};

ConfirmModal.defaultProps = {
  open: false,
  children: <>Deseja realmente continuar? </>,
};

ConfirmModal.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object),
  open: PropTypes.bool,
};

export default ConfirmModal;
