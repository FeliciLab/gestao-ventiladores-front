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

const EditDialogPurchaseOrder = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const {
    toogleDialog,
    headerTable,
    dataDialog,
    reloadData,
    purchaseOrder,
    openDialog,
  } = props;

  useEffect(() => {
    setOpen(openDialog);
  }, [openDialog]);

  const updateData = async (data) => {
    const newPurchaseOrder = PurchaseOrder({
      ...purchaseOrder,
      itens: data.filter((item) => item.quantidade > 0),
      updated_at: new Date(),
    });
    await savePurchaseOrder(newPurchaseOrder);
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
            Edição da ordem de compra:
            {purchaseOrder.numero_ordem_compra}
          </Typography>
        </StyledToolbar>
      </AppBar>
      <Container>
        <DialogTableItems
          action={updateData}
          headerTable={headerTable}
          dataDialog={dataDialog}
        />
      </Container>
    </Dialog>
  );
};

EditDialogPurchaseOrder.propTypes = {
  toogleDialog: PropTypes.func.isRequired,
  headerTable: PropTypes.instanceOf(Array).isRequired,
  dataDialog: PropTypes.instanceOf(Array).isRequired,
  reloadData: PropTypes.func.isRequired,
  purchaseOrder: PropTypes.instanceOf(Object).isRequired,
  openDialog: PropTypes.bool.isRequired,
};

export default EditDialogPurchaseOrder;
