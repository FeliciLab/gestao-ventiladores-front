import React from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import FormStatusCalibration from "./FormStatusCalibration";
import Paper from "@material-ui/core/Paper";
import moment from "moment";


const ListServiceOrderDiagnosisCalibration = (props) => {
  const {serviceOrders} = props;

  const headTable = [
    {id: 'numero_ordem_servico', label: 'Ordem de Serviço'},
    {id: 'numero_de_serie', label: 'Número de Série'},
    {id: 'marca', label: 'Marca'},
    {id: 'modelo', label: 'Modelo'},
    {id: 'nome_instituicao_origem', label: 'Origem'},
    {id: 'calibragem', label: 'Calibragem'},
    {id: 'created_at', label: 'Data de criação'},
  ];

  return (<React.Fragment>
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headTable.map((head, index) => (
                <TableCell key={index}>{head.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {serviceOrders.map((serviceOrder, indexOrder) => (
              <TableRow key={indexOrder}>
                {headTable.map((head, indexHead) => {
                  let text = serviceOrder[head.id]
                  if (head.id === 'created_at') {
                    text = moment(serviceOrder[head.id]).format('DD/MM/YYYY')
                  }
                  if (['numero_de_serie', 'marca', 'modelo', 'nome_instituicao_origem'].indexOf(head.id) >= 0) {
                    text = serviceOrder.equipamento[0][head.id]
                  }

                  if (head.id === 'calibragem') {
                    return (<TableCell key={indexHead}>
                      <FormStatusCalibration serviceOrder={serviceOrder}/>
                    </TableCell>);
                  }

                  return (<TableCell key={indexHead}>
                    {text}
                  </TableCell>);
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  </React.Fragment>);
};

export default ListServiceOrderDiagnosisCalibration;