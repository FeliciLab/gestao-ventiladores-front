import React, {
  useEffect,
  useState,
} from 'react';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import ActionBarLayout from './ActionBarLayout';
import HeaderTableLayout from './HeaderTableLayout';
import BodyTableLayout from './BodyTableLayout';

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
    actionBarTextButton,
  } = props;

  useEffect(() => {
    if (actions && actions.length > 0) {
      setHasActions(true);
    }
  }, [actions]);

  function updateAmmountChecked() {
    setAmmountChecked(
      Object.values(dataTable)
        .filter(
          (data) => Object.keys(checkedData).find((item) => item === data.nome),
        ).length,
    );
  }

  function checkSelectedRow(keyValue, check) {
    const checking = {};
    checking[keyValue] = check;
    setCheckedData(Object.assign(checkedData, checking));
    updateAmmountChecked();
  }

  function checkAllSelectedRows(checked) {
    const checking = {};
    dataTable.forEach((item) => {
      checking[item[selectKeyField]] = !checked;
    });
    setCheckedData(Object.assign(checkedData, checking));
    updateAmmountChecked();
  }

  return (
    <div style={{ marginTop: '15px' }}>
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
            amountChecked={Object.values(checkedData).filter((item) => item).length}
          />
          <BodyTableLayout
            checkedData={checkedData}
            hasActions={hasActions}
            actions={actions}
            data={dataTable}
            selectKeyField={selectKeyField}
            headerKeys={headerTable.map((item) => item.id)}
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

TableCheckedList.defaultProps = {
  actions: [],
};

TableCheckedList.propTypes = {
  dataTable: PropTypes.instanceOf(Array).isRequired,
  headerTable: PropTypes.instanceOf(Array).isRequired,
  actionFunction: PropTypes.func.isRequired,
  actionBarTitle: PropTypes.string.isRequired,
  actionBarTextButton: PropTypes.string.isRequired,
  selectKeyField: PropTypes.string.isRequired,
  actions: PropTypes.instanceOf(Array),
};

export default TableCheckedList;
