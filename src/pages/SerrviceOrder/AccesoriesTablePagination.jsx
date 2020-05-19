import React, { useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableBody from '@material-ui/core/TableBody';
import { Acessorio } from '../../models/acessorio';


const AccessoriesTablePagination = (props) => {
  const {items} = props;
  const rowsPerPage = 5;
  const [page, setPage] = useState(0);

  function handleChangePage (event, newPage) {
    setPage(newPage);
  }

  return (<React.Fragment>
    <TableContainer>
      <Table size={"small"}>
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell>Acompanha</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Estado de Conservação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.sort((a) => a).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => {
              const accessory = Acessorio(item);
              return (
                <TableRow key={index}>
                  <TableCell>{accessory.descricao || ''}</TableCell>
                  <TableCell>{accessory.acompanha ? 'Sim' : "Não"}</TableCell>
                  <TableCell>{accessory.quantidade || 0}</TableCell>
                  <TableCell>{accessory.estado_de_conservacao || ''}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
      rowsPerPageOptions={[5]}
      component="div"
      count={items.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
    />
  </React.Fragment>);
};

export default AccessoriesTablePagination;