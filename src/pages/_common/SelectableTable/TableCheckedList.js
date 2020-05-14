import React, {useEffect, useState} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import PropTypes from 'prop-types';
import ActionBarLayout from "./ActionBarLayout";
import HeaderTableLayout from "./HeaderTableLayout";
import BodyTableLayout from "./BodyTableLayout";


const TableCheckedList = (props) => {
  const [hasActions, setHasActions] = useState(false);
  const [checkedData, setCheckedData] = useState({});
  const [ammountChecked, setAmmountChecked] = useState(0);
  const {
    actions,
    dataTable,
    selectKeyField,
    headerTable,
    actionFunction,
    actionBarTitle,
    actionBarTextButton
  } = props;

  useEffect(() => {
    if (actions && actions.length > 0) {
      setHasActions(true);
    }
  }, [actions]);

  function updateAmmountChecked () {
    setAmmountChecked(Object.values(checkedData).filter(item => item === true).length);
  }

  function checkSelectedRow (keyValue, check) {
    console.log(keyValue, check)
    const checking = {};
    checking[keyValue] = check;
    setCheckedData(Object.assign(checkedData, checking));
    updateAmmountChecked();
  }

  function checkAllSelectedRows (checked) {
    const checking = {};
    for (let item of dataTable) {
      checking[item[selectKeyField]] = !checked;
    }
    setCheckedData(checking);
    updateAmmountChecked();
  }

  return (
    <div style={{marginTop: '15px'}}>
      <ActionBarLayout
        dataChecked={checkedData}
        ammount={ammountChecked}
        action={actionFunction}
        titleBar={actionBarTitle}
        textButton={actionBarTextButton}
      />
      <TableContainer>
        <Table
          aria-labelledby="tableTitle"
          aria-label="enhanced table"
        >
          <HeaderTableLayout
            hasActions={hasActions}
            headerData={headerTable}
            checkAllRow={checkAllSelectedRows}
            amount={dataTable.length}
            amountChecked={Object.values(checkedData).filter(item => item).length}
          />
          <BodyTableLayout
            checkedData={checkedData}
            hasActions={hasActions}
            actions={actions}
            data={dataTable}
            selectKeyField={selectKeyField}
            headerKeys={headerTable.map(item => item.id)}
            checkSelectedRow={checkSelectedRow}
          />
        </Table>
      </TableContainer>
      <ActionBarLayout
        dataChecked={checkedData}
        ammount={ammountChecked}
        action={actionFunction}
        titleBar={actionBarTitle}
        textButton={actionBarTextButton}
      />
    </div>
  );
};

TableCheckedList.protoType = {
  data: PropTypes.array.isRequired,
  headerTable: PropTypes.array.isRequired,
  actionFunction: PropTypes.func.isRequired,
  actionBarTitle: PropTypes.string.isRequired,
  actionBarTextButton: PropTypes.string.isRequired,
  selectKeyField: PropTypes.string,
  classes: PropTypes.object
};
export default TableCheckedList;