import React from 'react';
import {TableHead} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const cabecalhosTabela = [
  {id: 'os', texto: 'Ordem de Servico'},
  {id: 'marca', texto: 'Marca'},
  {id: 'modelo', texto: 'Modelo'},
  {id: 'origem', texto: 'Origem'}
];

export default function CabecalhoTabelaOrdemServico (props) {
  function selecionarLinha (event) {
    props.atualizarTodasLinhaSelecionada(props.selecionados.length > 0);
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={props.selecionados.length > 0 && props.selecionados.length < props.numTotalLinhas}
            checked={props.numTotalLinhas > 0 && props.selecionados.length === props.numTotalLinhas}
            onChange={selecionarLinha}
            inputProps={{ 'aria-texto': 'select all desserts' }}
          />
        </TableCell>
        {
          cabecalhosTabela.map(cabecalho => (
            <TableCell
              key={cabecalho.id}
              align="left"
              padding="default"
            >
              {cabecalho.texto}
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
}