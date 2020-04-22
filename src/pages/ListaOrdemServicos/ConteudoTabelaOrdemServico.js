import React from 'react';
import TableBody from "@material-ui/core/TableBody";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


export default function ConteudoTabelaOrdemServico (props) {
  function selecionarLinha (event, numOrdemServico) {
    props.atualizarLinhaSelecionada(numOrdemServico);
  }

  return (
    <TableBody>
      {
        props.dados.map((dado, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow
              hover
              onClick={(event) => selecionarLinha(event, dado.numeroOrdemServico)}
              role="checkbox"
              tabIndex={-1}
              key={`${dado.numeroOrdemServico}`}
              aria-checked={dado.checked}
              selected={dado.checked}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={dado.checked}
                  inputProps={{ 'aria-labelledby': labelId }}
                ></Checkbox>
              </TableCell>
              <TableCell component="th" scope="row" padding="none">{dado.numeroOrdemServico}</TableCell>
              <TableCell>{dado.marca}</TableCell>
              <TableCell>{dado.modelo}</TableCell>
              <TableCell>{dado.origem}</TableCell>
            </TableRow>
          );
        })
      }


    </TableBody>
  );
}