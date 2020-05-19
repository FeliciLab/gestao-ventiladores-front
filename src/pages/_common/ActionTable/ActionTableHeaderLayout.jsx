import React from 'react';
import { TableHead } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const ActionTableHeaderLayout = (props) => {
  const {headerData} = props;

  return (
    <TableHead>
      <TableRow>
        {
          headerData.map(item => (
            <TableCell
              key={item.id}
              align="left"
              padding="default"
            >
              {item.name}
            </TableCell>
          ))
        }
        <TableCell>
          Ações
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default ActionTableHeaderLayout;