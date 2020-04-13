import React, {useEffect, useState} from 'react';
import TableBody from "@material-ui/core/TableBody";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from 'prop-types';

const BodyTableLayout = (props) => {
  const [data, setData] = useState(props.data);
  const {headerKeys, checkSelectedRow} = props;

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <TableBody>
      {
        data.map((item, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow
              hover
              onClick={(event) => checkSelectedRow(item.numero_ordem_servico)}
              role="checkbox"
              tabIndex={-1}
              key={index}
              aria-checked={item.checked}
              selected={item.checked}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={item.checked === true}
                  inputProps={{'aria-labelledby': labelId}}
                />
              </TableCell>
              {
                headerKeys.map((key, index) => (
                  <TableCell key={index}>{item[key]}</TableCell>
                ))
              }
            </TableRow>
          );
        })
      }


    </TableBody>
  );
};

BodyTableLayout.protoType = {
  data: PropTypes.array.isRequired,
  headerKeys: PropTypes.array.isRequired
};

export default BodyTableLayout;