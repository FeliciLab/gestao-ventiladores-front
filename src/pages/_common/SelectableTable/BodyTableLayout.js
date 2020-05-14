import React from 'react';
import TableBody from "@material-ui/core/TableBody";
import Checkbox from "@material-ui/core/Checkbox";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import PropTypes from 'prop-types';
import ColorIconButton from "../forms/ColorIconButton";
import FormControl from "@material-ui/core/FormControl";


const BodyTableLayout = (props) => {
  const {
    data,
    headerKeys,
    checkSelectedRow,
    selectKeyField,
    hasActions,
    actions,
    checkedData
  } = props;

  return (
    <TableBody>
      {
        data.map((item, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow
              key={index}
              hover
              role="checkbox"
              tabIndex={-1}
              aria-checked={checkedData[item[selectKeyField]]}
              selected={checkedData[item[selectKeyField]]}
            >
              <TableCell padding="checkbox">
                <FormControl>
                  <Checkbox
                    onClick={(event) => checkSelectedRow(item[selectKeyField], event.target.checked)}
                    checked={checkedData.hasOwnProperty(item[selectKeyField]) && checkedData[item[selectKeyField]]}
                    inputProps={{'aria-labelledby': labelId}}
                  />
                </FormControl>
              </TableCell>
              {
                headerKeys.map((key, index) => (
                  <TableCell key={index}>{item[key].toString() || ''}</TableCell>
                ))
              }
              {hasActions ? <TableCell>
                {actions.map((action, index) => (
                  <ColorIconButton
                    key={index}
                    item={item}
                    action={() => action.handleEvent(item)}
                    name={action.name}
                    bgColor={action.bgColor}
                    hoverColor={action.hoverColor}
                    icon={action.icon}
                  />
                ))}
              </TableCell> : <React.Fragment></React.Fragment>}
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