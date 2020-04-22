import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import {TableCell} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";

const DialogTableItems = (props) => {
  const history = useHistory();

  const {headerTable} = props;
  const [dataTable, setDataTable] = useState([]);
  const [itemsDialog, setItemsDialog] = useState([]);

  useEffect(() => {
    setDataTable(props.dataTable || []);
    setItemsDialog(props.itemsDialog.map(item => {
      if (item.tipo === 'pecas') item.tipo = "Peças";
      if (item.tipo === 'acessorio') item.tipo = "Acessório";
      return item;
    }) || []);
  }, [props]);

  const actionPrint = (data) => {
    history.push({
      pathname: "/ordem-compra",
      state: {
        data: {
          equipment: dataTable,
          items: itemsDialog.filter(item => data.find(d => d.nome === item.nome))
        }
      }
    }, [dataTable]);
  };

  function updateAmmount (value, index) {
    const _dataTable = dataTable;
    _dataTable[index].quantidade = value;
    setDataTable(_dataTable);
  }

  return (
    <React.Fragment>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headerTable.map((item, index) => (
                <TableCell key={index}>{item.name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTable.map((item, index) => (
              <TableRow key={index}>
                {headerTable.map((head, headerIndex) => {
                  if (head.id !== 'quantidade') return (
                    <TableCell key={headerIndex}>{item[head.id]}</TableCell>
                  );

                  return (
                    <TableCell key={headerIndex}>
                      <TextField
                        label={""}
                        type={"number"}
                        fullWidth
                        value={item[head.id]}
                        onChange={(event) => updateAmmount(event.target.value, index)}
                      />
                    </TableCell>
                  );

                })
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
    </React.Fragment>
  );
};

export default DialogTableItems;