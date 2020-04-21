import React from 'react';
import {TableCell, TableRow} from "@material-ui/core";
import CellInput from "../_common/components/CellInput";
import TooptipInfo from "../_common/components/TooltipInfo";
import InfoIcon from "@material-ui/icons/Info";
import Typography from "@material-ui/core/Typography";
import SelectControl from "../_common/forms/SelectControl";

export default function RowTableItem (props) {
  const {
    index,
    headTable,
    updateParent
  } = props;

  const [item, setItem] = React.useState({});

  const radioItems = [
    {value: 'pecas', name: 'Peças'},
    {value: 'acessorio', name: 'Acessórios'}
  ];

  if (props.data && Object.keys(props.data).length !== 0 && Object.keys(item).length === 0) {
    setItem(props.data);
  }

  return (<React.Fragment>
    <TableRow>
      {
        headTable.map(
          (head, headIndex) => {
            if (head.id === 'tipo') {
              return (
                <TableCell key={headIndex}>
                  <SelectControl
                    label={''}
                    name={"tipo"}
                    action={(event) => updateParent(event, index, head.id)}
                    defaultValue={item[head.id]}
                    menuItems={radioItems}
                  />
                </TableCell>
              );
            }

            return (
              <CellInput
                key={headIndex}
                label={''}
                name={head.id}
                action={(event) => updateParent(event, index, head.id)}
                defaultValue={item[head.id]}
              />
            );
          }
        )
      }
      <TableCell
        size={"small"}
        align={"right"}
      >
        <TooptipInfo icon={<InfoIcon/>}>
          <Typography variant={'subtitle1'}>
            {item['descricao']}
          </Typography>
        </TooptipInfo>
      </TableCell>
    </TableRow>
  </React.Fragment>);
}