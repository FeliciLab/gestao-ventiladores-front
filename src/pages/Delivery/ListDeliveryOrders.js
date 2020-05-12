import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@material-ui/core";
import ColorIconButton from "../_common/forms/ColorIconButton";
import PrintIcon from '@material-ui/icons/Print';
import {useHistory} from "react-router-dom";
import moment from 'moment-timezone';


export default function ListDeliveryOrders (props) {
  const classes = useStyle();
  const {deliveryOrders} = props;
  const history = useHistory();

  const iconButton = {
    icon: <PrintIcon/>
  };

  const headTable = [
    {id: 'codigo', label: 'Código'},
    {id: 'instituicao_destino', label: 'Unidade/Instituição de Destino'},
    {id: 'cidade_destino', label: 'Cidade destino'},
    {id: 'nome_responsavel_destino', label: 'Representante da Instituição'},
    {id: 'nome_responsavel_transporte', label: 'Reponsável pelo Transporte'},
    {id: 'contato_responsavel_transporte', label: 'Contato do Transporte'},
    {id: 'equipamentos_id', label: 'Equipamentos, Nº Série'},
    {id: 'data_entrega', label: 'Data da Entrega'}
  ];

  function openPrint (item) {
    console.log(item);
    history.push({
      pathname: "/entrega-impressao",
      state: {
        data: item
      }
    }, [item]);
  }

  return (<React.Fragment>
    <Grid container>
      <Grid item xs={12}><Typography variang={'h5'}>Lista de Entregas</Typography></Grid>
    </Grid>
    <Paper className={classes.paper}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headTable.map((item, index) => {
                return (<TableCell key={index}>{item.label}</TableCell>);
              })}
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deliveryOrders.map((data, index) => (
              <TableRow key={index}>
                {headTable.map((head, indxHead) => {
                  if (head.id === 'data_entrega') {
                    return (
                      <TableCell key={indxHead}>{moment(new Date(data[head.id]['$date'])).tz('America/Fortaleza').format('DD/MM/YYYY HH:mm')}</TableCell>);
                  }

                  if (head.id === 'equipamentos_id') {
                    return (<TableCell key={indxHead}>
                      <div className={classes.cellDiv}>
                        {data['equipamentos'].map((equipamento, equipamentoIndex) => {
                          return (
                            <Typography key={equipamentoIndex}>
                              {equipamento.numero_de_serie}
                            </Typography>
                          );
                        })}
                      </div>
                    </TableCell>);
                  }

                  return (
                    <TableCell key={indxHead}>{data[head.id]}</TableCell>
                  );
                })}
                <TableCell>
                  <ColorIconButton
                    item={data}
                    name={'Abrir Impressão'}
                    action={openPrint}
                    icon={iconButton}
                  />
                </TableCell>
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
    padding: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  cellDiv: {
    maxHeight: "84px",
    overflowY: "auto",
    overflowX: "auto"
  }
}));