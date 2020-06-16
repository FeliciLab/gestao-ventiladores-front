import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
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
    updateValue,
  } = props;

  const [description, setDescription] = useState('');
};

FormModalDescription.propTypes = {
  open: PropTypes.bool.isRequired,
  item: PropTypes.instanceOf(Object).isRequired,
  handleClose: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default FormModalDescription;
