import React, {useEffect, useState} from 'react';
import {TableHead} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const HeaderTableLayout = (props) => {
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
      </TableRow>
    </TableHead>
  );
};

export default HeaderTableLayout;