import React, {useEffect, useState} from 'react';
import {AppBar, Container, Dialog, IconButton, Toolbar, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Slide from "@material-ui/core/Slide";
import withStyles from "@material-ui/core/styles/withStyles";
import orange from "@material-ui/core/colors/orange";
import DialogTableItems from "./DialogTableItems";
import {PurchaseOrder} from "../../models/purchaseOrder";
import {savePurchaseOrder} from "../../modelServices/purchaseOrderService";

const NewPurchaseOrderDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {toogleDialog, headerTable, dataDialog, reloadData} = props;

  useEffect(() => {
    setOpen(props.openDialog);
  }, [props]);


  async function saveOrder (data) {
    const purchaseOrder = PurchaseOrder({itens: data.filter(item => item.quantidade > 0)});
    try {
      await savePurchaseOrder(purchaseOrder);
      reloadData();
      toogleDialog(false);
    } catch (e) {
      console.log(e);
    }
  }

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
            Nova ordem de compra
          </Typography>
        </StyledToolbar>
      </AppBar>
      <Container>
        <Typography variante={"h5"} className={classes.titleList}>Lista de itens</Typography>
        <DialogTableItems
          action={saveOrder}
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
  titleList: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  }
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

export default NewPurchaseOrderDialog;