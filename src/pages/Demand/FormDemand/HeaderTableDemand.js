import React from "react";
import {TableHead} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const headCells = [
  {id: "quantity", label: "Quantidade"},
  {id: "name", label: "Nome"},
  {id: "type", label: "Tipo"},
  {id: "value", label: "Valor"},
  {id: "provider", label: "Fornecedor"},
  {id: "info", label: "info"},
];

export default function HeaderTableDemand(props) {
  console.log(props);
  function selecionarLinha (event) {
    props.atualizarTodasLinhaSelecionada(props.selecionados.length > 0);
  }
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={
              props.selecionados.length > 0 &&
              props.selecionados.length < props.numTotalLinhas
            }
            checked={
              props.numTotalLinhas > 0 &&
              props.selecionados.length === props.numTotalLinhas
            }
            onChange={selecionarLinha}
          />
        </TableCell>
        {headCells.map((item) => (
          <TableCell key={item.id} align="left" padding="default">
            {item.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
