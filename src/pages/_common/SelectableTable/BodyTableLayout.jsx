import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import FormControl from '@material-ui/core/FormControl';
import ColorIconButton from '../forms/ColorIconButton';


const isChecked = (checkedData, field) => Object.prototype.hasOwnProperty.call(checkedData, field)
  && checkedData[field];

const BodyTableLayout = (props) => {
  const {
    data,
    headerKeys,
    checkSelectedRow,
    selectKeyField,
    hasActions,
    actions,
    checkedData,
  } = props;

  return (
    <TableBody>
      {data.map((item, index) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow
            key={labelId}
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
                  checked={isChecked(checkedData, item[selectKeyField])}
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </FormControl>
            </TableCell>
            {headerKeys.map((key) => (
              <TableCell key={key}>{item[key].toString() || ''}</TableCell>
            ))}
            {hasActions
              ? (
                <TableCell>
                  {actions.map((action) => (
                    <ColorIconButton
                      key={Math.round(Math.random() * 100000)}
                      disabled={isChecked(checkedData, item[selectKeyField])}
                      item={item}
                      action={() => action.handleEvent(item)}
                      name={action.name}
                      bgColor={action.bgColor}
                      hoverColor={action.hoverColor}
                      icon={action.icon}
                    />
                  ))}
                </TableCell>
              )
              : (<></>)}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

BodyTableLayout.defaultProps = {
  hasActions: false,
  actions: [],
  checkedData: {},
};

BodyTableLayout.propTypes = {
  data: PropTypes.instanceOf(Array).isRequired,
  headerKeys: PropTypes.instanceOf(Array).isRequired,
  checkSelectedRow: PropTypes.func.isRequired,
  selectKeyField: PropTypes.string.isRequired,
  hasActions: PropTypes.bool,
  actions: PropTypes.instanceOf(Array),
  checkedData: PropTypes.instanceOf(Object),
};

export default BodyTableLayout;
