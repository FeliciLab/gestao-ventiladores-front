import React, {useEffect, useState} from 'react';
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import orange from "@material-ui/core/colors/orange";
import DialogTableItems from "./DiableTableItems";
import {Container} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const DialogItems = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dataDialog, setDataDialog] = useState({});
  const [itemsDialog, setItemsDialog] = useState([]);
  const {toogleDialog} = props;

  useEffect(() => {
    setOpen(props.openDialog);
    setDataDialog(props.dataDialog);
    if (props.dataDialog.diagnostico && props.dataDialog.diagnostico.itens) {
      setItemsDialog(props.dataDialog.diagnostico.itens);
    }
  }, [props, open, dataDialog]);

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
        <div style={{marginTop: "2rem"}}>
          <Grid container justify={"space-between"}>
            <Grid item xs={"auto"}>
              <Typography variant={"h5"} component={"h5"}>
                FILA DE DEMANDAS DE AQUISIÇÕES
              </Typography>
              <Typography variant={"h5"} component={"h5"}>
                <strong>OS Nº: {dataDialog.numero_ordem_servico}</strong>
              </Typography>
            </Grid>
            <Grid item xs={"auto"}></Grid>

          </Grid>
        </div>
        <DialogTableItems
          dataTable={itemsDialog}
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