import React, {
  useContext,
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Radio,
  TextField,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import ItemContext from '../ItemContext';
import { randomIndex } from '../../../utils';


const FormMergeItems = ({ model, handleSetModel }) => {
  const { mergeItems } = useContext(ItemContext);
  const [amount, setAmount] = useState(0);
  const [rowChosen, setRowChosen] = useState(0);

  const headTable = [
    { id: 'tipo', label: 'Tipo' },
    { id: 'fabricante', label: 'Fabricante' },
    { id: 'codigo', label: 'Código' },
    { id: 'nome', label: 'Nome' },
    { id: 'unidade_medida', label: 'Unidade de Medida' },
    { id: 'quantidade', label: 'Quantidade' },
    { id: 'descricao', label: 'Descrição' },
  ];

  const handleData = () => {
    const itemsAmount = Object.values(mergeItems).reduce((a, c) => a + c.quantidade, 0);
    setAmount(itemsAmount);
    handleSetModel({ target: { name: 'quantidade', value: itemsAmount } });
  };

  useEffect(handleData, [mergeItems]);

  const changeAmount = (event) => {
    const doc = {
      target: {
        name: event.target.name,
        value: event.target.value < amount
          ? amount
          : event.target.value,
      },
    };
    handleSetModel(doc);
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h5">Itens selecionados</Typography>
          <Typography variant="caption">Selecione uma linha de referência</Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell />
                  {headTable.map((head) => (
                    <TableCell key={randomIndex()}>{head.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.values(mergeItems).map((doc, index) => (
                  <TableRow
                    hover
                    key={randomIndex()}
                    onClick={() => setRowChosen(index)}
                  >
                    <TableCell>
                      <Radio value={index} checked={index === rowChosen} />
                    </TableCell>

                    {headTable.map((headItem) => (
                      <TableCell key={randomIndex()}>{doc[headItem.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>


        <Grid item xs={12}>
          <Typography variant="h5">Novo Item</Typography>
          <TableContainer>
            <Table>
              <TableBody>
                <TableRow>
                  {headTable.map((headField) => (
                    <TableCell key={randomIndex()}>
                      <TextField
                        label={headField.label}
                        name={headField.id}
                        value={model[headField.id]}
                        type={headField.id === 'quantidade'
                          ? 'number'
                          : 'text'}
                        onChange={headField.id === 'quantidade'
                          ? changeAmount
                          : handleSetModel}
                        fullWidth
                      />
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

FormMergeItems.propTypes = {
  model: PropTypes.instanceOf(Object).isRequired,
  handleSetModel: PropTypes.func.isRequired,
};

export default FormMergeItems;
