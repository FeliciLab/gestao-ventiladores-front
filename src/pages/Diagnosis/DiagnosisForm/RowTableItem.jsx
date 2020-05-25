import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  TableCell,
  TableRow,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import EditIcon from '@material-ui/icons/Edit';
import orange from '@material-ui/core/colors/orange';
import TooptipInfo from '../../_common/components/TooltipInfo';
import LabelInput from '../../_common/components/LabelInput';
import ColorIconButton from '../../_common/forms/ColorIconButton';
import { randomIndex } from '../../../utils';


const RowTableItem = (props) => {
  const {
    index,
    headTable,
    updateParent,
    data,
    openModelEditDescription,
  } = props;

  const radioItems = [
    { value: 'pecas', label: 'Peças' },
    { value: 'acessorio', label: 'Acessórios' },
    { value: 'insumo', label: 'Insumo' },
  ];

  return (
    <>
      <TableRow>
        {
          headTable.map(
            (head) => {
              if (head.id === 'tipo') {
                return (
                  <TableCell key={randomIndex()}>
                    <TextField
                      select
                      label=""
                      value={data[head.id]}
                      onChange={(event) => updateParent(event.target.value, index, head.id)}
                      name="tipo"
                    >
                      {radioItems.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </TableCell>
                );
              }

              return (
                <LabelInput
                  key={randomIndex()}
                  label=""
                  name={head.id}
                  action={(value) => updateParent(value, index, head.id)}
                  value={`${data[head.id]}`}
                />
              );
            },
          )
        }
        <TableCell size="small" align="right">
          <Grid container spacing={1} justify="flex-end" alignItems="center">
            <Grid item>
              <ColorIconButton
                action={openModelEditDescription}
                item={{ index }}
                icon={{
                  icon: <EditIcon fontSize="small" />,
                  size: 'small',
                  bgColor: 'white',
                  color: orange[500],
                  hoverColor: orange[50],
                }}
                name="Editar Descrição"
              />
            </Grid>
            <Grid item>
              <TooptipInfo icon={<InfoIcon />}>
                <Typography variant="subtitle1">
                  {data.descricao}
                </Typography>
              </TooptipInfo>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    </>
  );
};

RowTableItem.propTypes = {
  index: PropTypes.number.isRequired,
  headTable: PropTypes.instanceOf(Array).isRequired,
  updateParent: PropTypes.func.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
  openModelEditDescription: PropTypes.func.isRequired,
};

export default RowTableItem;
