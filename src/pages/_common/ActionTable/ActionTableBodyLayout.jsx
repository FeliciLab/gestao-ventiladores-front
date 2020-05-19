import React, { useEffect, useState } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import ActionMenuLayout from './ActionMenuLayout';
import ActionButtonLayout from './ActionButtonLayout';


const ActionTableBodyLayout = (props) => {
  const [data, setData] = useState(props.data);
  const {headerKeys, menuOptions, actionIconButton} = props;

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  return (
    <TableBody>
      {
        data.map((item, indexData) => {
          return (
            <TableRow
              hover
              key={indexData}
            >
              {
                headerKeys.map((key, indexHeader) => (
                  <TableCell key={indexHeader}>{item[key]}</TableCell>
                ))
              }
              <TableCell>
                {actionIconButton ? <ActionButtonLayout
                    item={item}
                    menuOptions={menuOptions}
                  /> :
                  <ActionMenuLayout
                    item={item}
                    menuOptions={menuOptions}
                  />
                }

              </TableCell>
            </TableRow>
          );
        })
      }
    </TableBody>
  );
};

ActionTableBodyLayout.protoType = {
  data: PropTypes.array.isRequired,
  headerKeys: PropTypes.array.isRequired
};

export default ActionTableBodyLayout;