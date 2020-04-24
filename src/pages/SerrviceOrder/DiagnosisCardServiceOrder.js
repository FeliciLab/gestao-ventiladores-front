import React from 'react';
import {Grid, Typography} from "@material-ui/core";
import DiagnosisItemsTablePagination from "./DiagnosisItemsTablePagination";
import makeStyles from "@material-ui/core/styles/makeStyles";

const DiagnosisCardServiceOrder = (props) => {
  const classes = useStyle();
  const {item} = props;
  return (<React.Fragment>
    <Grid container alignItems={"center"} justify={"center"}>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"h6"}><strong>Diagnóstico:</strong></Typography>
      </Grid>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"body1"}><strong>Resutlado ténico:</strong></Typography>
        <Typography variant={"body2"}>{item.diagnostico.resultado_tecnico || '---'}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"body1"}><strong>Demanda de serviços:</strong></Typography>
        <Typography variant={"body2"}>{item.diagnostico.demanda_servicos || '---'}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"body1"}><strong>Insumos</strong></Typography>
        <Typography variant={"body2"}>{item.diagnostico.demanda_insumos || '---'}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.rowItem}>
        <Typography variant={"body1"}><strong>Acessórios:</strong></Typography>
        <DiagnosisItemsTablePagination items={item.diagnostico.itens}/>
      </Grid>
    </Grid>
  </React.Fragment>);
};

const useStyle = makeStyles(() => ({
  rowItem: {
    margin: '1rem 0rem'
  }
}))

export default DiagnosisCardServiceOrder;