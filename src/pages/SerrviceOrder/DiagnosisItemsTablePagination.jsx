import React, { useState } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { getItemDiagnosis } from '../../models/itensDiagnosticos';


const DiagnosisItemsTablePagination = (props) => {
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
            <TableCell>Tipo</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell>Fabricante</TableCell>
            <TableCell>Código</TableCell>
            <TableCell>Unidade de Medida</TableCell>
            <TableCell>Quantidade</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.sort((a) => a).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((item, index) => {
              const itemDiag = getItemDiagnosis(item);
              return (
                <TableRow key={index}>
                  <TableCell>{itemDiag.tipo === 'pecas' ? 'Peça' : 'Acessório'}</TableCell>
                  <TableCell>{itemDiag.nome || ''}</TableCell>
                  <TableCell>{itemDiag.fabricante || ''}</TableCell>
                  <TableCell>{itemDiag.codigo || ''}</TableCell>
                  <TableCell>{itemDiag.unidade_medida || ''}</TableCell>
                  <TableCell>{itemDiag.quantidade || 0}</TableCell>
                  <TableCell>{itemDiag.descricao || ''}</TableCell>
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

export default DiagnosisItemsTablePagination;