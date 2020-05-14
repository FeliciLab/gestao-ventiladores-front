import React from 'react';
import {Grid, TableCell, TableRow} from "@material-ui/core";
import TooptipInfo from "../../_common/components/TooltipInfo";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import LabelInput from "../../_common/components/LabelInput";
import ColorIconButton from "../../_common/forms/ColorIconButton";
import EditIcon from '@material-ui/icons/Edit';
import orange from "@material-ui/core/colors/orange";


export default function RowTableItem (props) {
  const {
    index,
    headTable,
    updateParent,
    data,
    openModelEditDescription
  } = props;

  const radioItems = [
    {value: 'pecas', label: 'Peças'},
    {value: 'acessorio', label: 'Acessórios'},
    {value: 'insumo', label: 'Insumo'}
  ];

  return (<React.Fragment>
    <TableRow>
      {
        headTable.map(
          (head, headIndex) => {
            if (head.id === 'tipo') {
              return (
                <TableCell key={headIndex}>
                  <TextField
                    select
                    label=""
                    value={data[head.id]}
                    onChange={(event) => updateParent(event.target.value, index, head.id)}
                    name={'tipo'}
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
                key={headIndex}
                label={''}
                name={head.id}
                action={(value) => updateParent(value, index, head.id)}
                value={data[head.id]}
              />
            );
          }
        )
      }
      <TableCell
        size={"small"}
        align={"right"}
      >
        <Grid container spacing={1} justify={'flex-end'} alignItems={'center'}>
          <Grid item>
            <ColorIconButton
              action={openModelEditDescription}
              item={index}
              icon={{
                icon: <EditIcon fontSize={'small'}/>,
                size: 'small',
                bgColor: 'white',
                color: orange[500],
                hoverColor: orange[50]
              }}
              name={'Editar Descrição'}
            />
          </Grid>
          <Grid item>
            <TooptipInfo icon={<InfoIcon/>}>
              <Typography variant={'subtitle1'}>
                {data['descricao']}
              </Typography>
            </TooptipInfo>
          </Grid>
        </Grid>
      </TableCell>
    </TableRow>
  </React.Fragment>);
}