import React, {useEffect, useState} from 'react';
import {TableHead} from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";


const HeaderTableLayout = (props) => {
  const {headerData, checkAllRow} = props;
  const [amountChecked, setAmountChecked] = useState(0);
  const [amount, setAmount] = useState(-1);

  useEffect(() => {
    setAmountChecked(props.amountChecked);
    setAmount(props.amount);
  }, [props.amountChecked, props.amount]);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox" align={"center"}>
          <Checkbox
            indeterminate={amountChecked > 0 && amountChecked < amount}
            checked={amount > 0 && amountChecked === amount}
            onChange={() => checkAllRow(amountChecked > 0)}
          />
        </TableCell>
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