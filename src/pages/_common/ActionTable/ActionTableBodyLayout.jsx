import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import ActionMenuLayout from './ActionMenuLayout';
import ActionButtonLayout from './ActionButtonLayout';


const ActionTableBodyLayout = (props) => {
  const {
    data,
    headerKeys,
    menuOptions,
    actionIconButton,
  } = props;

  return (
    <TableBody>
      {data
        .map((item) => (
          <TableRow hover key={Math.round(Math.random() * 100000)}>
            {
              headerKeys.map((header) => (
                <TableCell key={header}>{item[header]}</TableCell>
              ))
            }
            <TableCell>
              {actionIconButton
                ? (
                  <ActionButtonLayout
                    item={item}
                    menuOptions={menuOptions}
                  />
                )
                : (
                  <ActionMenuLayout
                    item={item}
                    menuOptions={menuOptions}
                  />
                )}
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

ActionTableBodyLayout.defaultProps = {
  actionIconButton: false,
};

ActionTableBodyLayout.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  headerKeys: PropTypes.instanceOf(Array).isRequired,
  menuOptions: PropTypes.instanceOf(Array).isRequired,
  actionIconButton: PropTypes.bool,
};

export default ActionTableBodyLayout;
