import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@material-ui/core";

export default function ListDeliveryOrders (props) {
  const classes = useStyle();
  const {deliveryOrders} = props;
  const [dataTableDeliveryOrders, setDataTableDeliveryOrders] = useState([]);

  const headTable = [
    {id: 'instituicao_destino', label: 'Unidade/Instituição de Destino'},
    {id: 'cidade_destino', label: 'Cidade destino'},
    {id: 'nome_responsavel_destino', label: 'Representante da Instituição'},
    {id: 'nome_responsavel_transporte', label: 'Reponsável pelo Transporte'},
    {id: 'contato_responsavel_transporte', label: 'Contato do Transporte'},
    {id: 'quantidade', label: 'Quantidade de Equipamentos'}
  ];

  useEffect(() => {
    setDataTableDeliveryOrders(deliveryOrders.map(item => {
      return {
        instituicao_destino: item.instituicao_destino,
        cidade_destino: item.cidade_destino,
        nome_responsavel_destino: item.nome_responsavel_destino,
        nome_responsavel_transporte: item.nome_responsavel_transporte,
        contato_responsavel_transporte: item.contato_responsavel_transporte,
        quantidade: item.equipamentos_id.length
      };
    }));
  }, [deliveryOrders]);

  return (<React.Fragment>
    <Grid container>
      <Grid item xs={12}><Typography variang={'h5'}>Lista de Entregas</Typography></Grid>
    </Grid>
    <Paper className={classes.paper}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headTable.map((item, index) => (
                <TableCell key={index}>{item.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTableDeliveryOrders.map((data, index) => (
              <TableRow key={index}>
                {headTable.map((head, indxHead) => (
                  <TableCell key={indxHead}>{data[head.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </React.Fragment>);
}

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3)
  }
}));