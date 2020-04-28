import React, {useEffect, useState} from 'react';
import {AppBar, Container, Dialog, IconButton, Toolbar, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import orange from "@material-ui/core/colors/orange";
import DialogTableItems from "./DialogTableItems";

const DialogItems = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {toogleDialog, headerTable, dataDialog, reloadData} = props;

  useEffect(() => {
    setOpen(props.openDialog);
  }, [props]);

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => toogleDialog(false)}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => toogleDialog(false)}
            aria-label="close"
          >
            <CloseIcon/>
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
          >
            Lista de Itens
          </Typography>
        </StyledToolbar>
      </AppBar>
      <Container>
        <DialogTableItems
          toogleDialog={toogleDialog}
          reloadData={reloadData}
          headerTable={headerTable}
          dataTable={dataDialog}
        />
      </Container>

    </Dialog>
  );
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const StyledToolbar = withStyles((theme) => ({
  root: {
    backgroundColor: orange[600],
  }
}))(Toolbar);


const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide
    direction="up"
    ref={ref} {...props} />;
});

export default DialogItems;