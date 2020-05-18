import React from 'react';
import CloseIcon from "@material-ui/icons/Close";
import {AppBar, Dialog, Grid, IconButton, Toolbar, Typography,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import orange from "@material-ui/core/colors/orange";


export default function DialogAccessories (props) {
  const classes = useStyle()
  const {
    open,
    title,
    handleClose,
    children,
    actionChildren
  } = props;

  return <React.Fragment>
    <Dialog fullScreen open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Grid container alignItems={'center'} justify={'space-between'}>
            <Grid item xs={'auto'}>
              <Grid container alignItems={'center'}>
                <Grid item xs={'auto'}>
                  <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                    <CloseIcon/>
                  </IconButton>
                </Grid>
                <Grid item xs={'auto'}>
                  <Typography variant="h6">
                    {title}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={'auto'}>
              {actionChildren}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {children}
    </Dialog>
  </React.Fragment>;
}

const useStyle = makeStyles(theme => ({
  appBar: {
    position: 'relative',
    backgroundColor: orange[600]
  }
}))