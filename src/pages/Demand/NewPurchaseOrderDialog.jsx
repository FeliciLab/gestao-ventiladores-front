import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar,
  Container,
  Dialog,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import makeStyles from '@material-ui/core/styles/makeStyles';
import withStyles from '@material-ui/core/styles/withStyles';
import orange from '@material-ui/core/colors/orange';
import DialogTableItems from './DialogTableItems';
import { PurchaseOrder } from '../../models/purchaseOrder';
import { savePurchaseOrder } from '../../modelServices/purchaseOrderService';


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
    marginBottom: theme.spacing(2),
  },
}));

const StyledToolbar = withStyles(() => ({
  root: {
    backgroundColor: orange[600],
  },
}))(Toolbar);

const NewPurchaseOrderDialog = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {
    toogleDialog,
    headerTable,
    dataDialog,
    reloadData,
    openDialog,
  } = props;

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);


  const saveOrder = async (data) => {
    const purchaseOrder = PurchaseOrder({ itens: data.filter((item) => item.quantidade > 0) });
    await savePurchaseOrder(purchaseOrder);
    reloadData();
    toogleDialog(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={() => toogleDialog(false)}
    >
      <AppBar className={classes.appBar}>
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => toogleDialog(false)}
            aria-label="close"
          >
            <CloseIcon />
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
        <DialogTableItems
          action={saveOrder}
          toogleDialog={toogleDialog}
          reloadData={reloadData}
          headerTable={headerTable}
          dataDialog={dataDialog}
        />
      </Container>
    </Dialog>
  );
};

NewPurchaseOrderDialog.propTypes = {
  toogleDialog: PropTypes.func.isRequired,
  dataDialog: PropTypes.instanceOf(Array).isRequired,
  headerTable: PropTypes.instanceOf(Array).isRequired,
  reloadData: PropTypes.func.isRequired,
  openDialog: PropTypes.bool.isRequired,
};

export default NewPurchaseOrderDialog;
