import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Chip from '@material-ui/core/Chip';
import green from '@material-ui/core/colors/green';
import withStyles from '@material-ui/core/styles/withStyles';
import { randomIndex } from '../../../utils';


const headerData = [
  { id: 'numero_ordem_servico', label: 'Ordem de Serviço' },
  { id: 'tipo', label: 'Tipo do equipamento' },
  { id: 'numero_de_serie', label: 'Número de série' },
  { id: 'marca', label: 'Marca' },
  { id: 'modelo', label: 'Modelo' },
];

const ColorChip = withStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    fontSize: 14,
    margin: theme.spacing(2),
    backgroundColor: green.A200,
    '&:hover': {
      backgroundColor: green.A400,
    },
  },
}))(Chip);

const useStyle = makeStyles(() => ({
  tableContainer: {
    maxHeight: '500px',
    overflowY: 'auto',
  },
  chip: {
    root: {
      backgroundColor: green[400],
    },
  },
}));

const TableSearchEquipment = (props) => {
  const classes = useStyle();

  const {
    serviceOrders,
    updateForm,
  } = props;

  const [blockEffects, setBlockEffects] = useState(false);
  const [dataTableServiceOrders, setDataTableServiceOrders] = useState([]);
  const [checkedRows, setCheckedRows] = useState({});
  const [search, setSearch] = useState('');

  function handleUpdateForm(rows) {
    const docs = [];
    Object.keys(rows).forEach((serviceOrderNumber) => {
      if (!rows[serviceOrderNumber]) return;
      docs.push(
        serviceOrders.find((item) => item.numero_ordem_servico === serviceOrderNumber),
      );
    });

    updateForm({ equipamentos: docs });
  }

  function selectAll(value) {
    const check = {};
    dataTableServiceOrders.forEach((data) => {
      if (!check[data.numero_ordem_servico]) {
        check[data.numero_ordem_servico] = value;
      }
    });

    setCheckedRows(check);
    handleUpdateForm(check);
    return true;
  }

  function selectOne(serviceOrderNumber) {
    const doc = { ...checkedRows };
    doc[serviceOrderNumber] = !checkedRows[serviceOrderNumber];
    setCheckedRows(doc);
    handleUpdateForm(doc);
  }

  function searchValue(value) {
    setSearch(value);
    const dataTable = serviceOrders.slice()
      .filter((item) => {
        if (value === '') {
          return true;
        }

        const equipamento = item.equipamento[0] || false;
        if (!equipamento) {
          return false;
        }

        return item.numero_ordem_servico.includes(value)
          || equipamento.numero_de_serie.includes(value);
      })
      .map((item) => {
        const equipamento = item.equipamento[0] || {};
        return {
          numero_ordem_servico: item.numero_ordem_servico,
          tipo: equipamento.tipo || '',
          numero_de_serie: equipamento.numero_de_serie || '',
          marca: equipamento.marca || '',
          modelo: equipamento.modelo || '',

        };
      });
    setDataTableServiceOrders(dataTable);
  }

  function removeServiceOrderEquipment(serviceOrderNumber) {
    selectOne(serviceOrderNumber);
  }

  function definedData() {
    if (blockEffects) {
      return;
    }

    const dataTable = serviceOrders.map((item) => {
      const equipamento = item.equipamento[0] || {};
      return {
        numero_ordem_servico: item.numero_ordem_servico,
        tipo: equipamento.tipo || '',
        numero_de_serie: equipamento.numero_de_serie || '',
        marca: equipamento.marca || '',
        modelo: equipamento.modelo || '',

      };
    });

    setDataTableServiceOrders(dataTable);

    if (Object.keys(checkedRows).length === 0) {
      const check = {};
      serviceOrders.slice().forEach((serviceOrder) => {
        if (!Object.prototype.hasOwnProperty.call(check, serviceOrder.numero_ordem_servico)) {
          check[serviceOrder.numero_ordem_servico] = false;
        }
      });

      setCheckedRows({ ...check });
    }

    setBlockEffects(true);
  }

  useEffect(definedData, [definedData, serviceOrders]);

  return (
    <>
      <TextField
        label="Burcar pelo equipamento"
        onChange={(event) => searchValue(event.target.value)}
        value={search}
        fullWidth
        helperText="Digite número da Ordem de serviço ou número de série."
      />
      <TableContainer className={classes.tableContainer}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Checkbox onClick={(event) => selectAll(event.target.checked)} />
              </TableCell>
              {headerData.map((header) => (
                <TableCell key={header.label}>{header.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataTableServiceOrders.map((serviceOrder) => (
              <TableRow key={randomIndex()}>
                <TableCell>
                  <Checkbox
                    onClick={() => selectOne(serviceOrder.numero_ordem_servico)}
                    checked={checkedRows[serviceOrder.numero_ordem_servico]}
                  />
                </TableCell>
                {headerData.map((header) => (
                  <TableCell key={header.id}>{serviceOrder[header.id]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {Object.keys(checkedRows)
        .filter((item) => checkedRows[item])
        .map((item) => (
          <ColorChip
            classes={classes.chip.root}
            key={randomIndex()}
            label={item}
            onDelete={() => removeServiceOrderEquipment(item)}
          />
        ))}
    </>
  );
};

TableSearchEquipment.propTypes = {
  serviceOrders: PropTypes.instanceOf(Array).isRequired,
  updateForm: PropTypes.func.isRequired,
};

export default TableSearchEquipment;
