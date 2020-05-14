import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import AccessoriesTablePagination from "./AccesoriesTablePagination";
import makeStyles from "@material-ui/core/styles/makeStyles";


const ScreeningCardServiceOrder = (props) => {
  const classes = useStyle();
  const {item} = props;
  return (<React.Fragment>
    <Grid container alignItems={"center"} justify={"center"}>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"h6"}><strong>Triagem:</strong></Typography>
      </Grid>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"body1"}><strong>Acessórios:</strong></Typography>
        <AccessoriesTablePagination items={item.triagem.acessorios}/>
      </Grid>
    </Grid>
  </React.Fragment>);
};

const useStyle = makeStyles(() => ({
  rowItem: {
    margin: '1rem 0rem'
  }
}));

export default ScreeningCardServiceOrder;