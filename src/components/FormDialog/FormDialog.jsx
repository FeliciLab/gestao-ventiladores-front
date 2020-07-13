import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  useTheme,
} from '@material-ui/core';
import FormContext from '../../contexts/FormContext';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import ModalActionSaveCancel from '../ModalActionSaveCancel/ModalActionSaveCancel';

const FormAppBar = ({ title, handleCancel, handleSave }) => (
  <AppBar style={{ position: 'fixed', backgroundColor: orange[600] }}>
    <Toolbar>
      <Grid container alignItems="center" justify="space-between">
        <Grid item>
          <Grid container alignItems="center">
            <Grid item>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleCancel}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">{title}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <ModalActionSaveCancel
            handleCancel={handleCancel}
            handleSave={handleSave}
          />
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
);

FormAppBar.defaultProps = {
  handleCancel: () => false,
  handleSave: () => false,
  title: 'Formulário',
};

FormAppBar.propTypes = {
  title: PropTypes.string,
  handleCancel: PropTypes.func,
  handleSave: PropTypes.func,
};

const useStyle = makeStyles((theme) => ({
  fullDialogBody: {
    paddingTop: theme.spacing(10),
  },
}));

const FormDialog = (props) => {
  const classes = useStyle();
  const { open, title, handleCancel, children, handleSave } = props;
  const theme = useTheme();

  const { handleSubmit } = useContext(FormContext);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleCancel}
      aria-labelledby="form-dialog-title"
    >
      <form onSubmit={handleSubmit(handleSave)}>
        <FormAppBar title={title} handleCancel={handleCancel} handleSave={handleSave} />
        <div className={classes.fullDialogBody}>
          <div style={{ paddingTop: theme.spacing(6) }}>
            {children}
          </div>
        </div>
      </form>
    </Dialog>
  );
};

FormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  handleCancel: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
};

export default FormDialog;
