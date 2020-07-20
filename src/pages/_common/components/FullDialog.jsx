import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import {
  AppBar,
  Dialog,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';

const useStyle = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    backgroundColor: orange[600],
  },
  fullDialogBody: {
    paddingTop: theme.spacing(10),
  },
}));

const FullDialog = (props) => {
  const classes = useStyle();
  const { open, title, handleClose, children, actionChildren } = props;

  return (
    <>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid container alignItems="center" justify="space-between">
              <Grid item>
                <Grid container alignItems="center">
                  <Grid item>
                    <IconButton
                      edge="start"
                      color="inherit"
                      onClick={handleClose}
                      aria-label="close">
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">{title}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>{actionChildren}</Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div className={classes.fullDialogBody}>{children}</div>
      </Dialog>
    </>
  );
};

FullDialog.defaultProps = {
  open: false,
  actionChildren: <></>,
};

FullDialog.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  children: PropTypes.instanceOf(Object).isRequired,
  actionChildren: PropTypes.instanceOf(Object),
};

export default FullDialog;
