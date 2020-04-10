import React from "react";
import TableBody from "@material-ui/core/TableBody";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import ToolTip from "./infoButton";
export default function BodyTableDemand(props) {
  function selecionarLinha(event, id) {
    props.atualizarLinhaSelecionada(id);
  }
  console.log("dataaaaaaa", props.dados);
  return (
    <TableBody>
      {props.dados.map((item, index) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow
            hover
            onClick={(event) => selecionarLinha(event, item.id)}
            role="checkbox"
            tabIndex={-1}
            key={`${item.id}`}
            aria-checked={item.checked}
            selected={item.checked}
          >
            <TableCell padding="checkbox">
              <Checkbox
                checked={item.checked}
                inputProps={{"aria-labelledby": labelId}}
              />
            </TableCell>
            <TableCell component="th" scope="row" padding="none">
              {item.amount}
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type}</TableCell>
            <TableCell>{item.value}</TableCell>
            <TableCell>{item.provider}</TableCell>
            <TableCell>
              <ToolTip item={item} />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
}
