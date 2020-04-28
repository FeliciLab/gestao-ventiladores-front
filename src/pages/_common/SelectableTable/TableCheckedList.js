import React, {useEffect} from 'react';
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import PropTypes from 'prop-types';
import ActionBarLayout from "./ActionBarLayout";
import HeaderTableLayout from "./HeaderTableLayout";
import BodyTableLayout from "./BodyTableLayout";

const TableCheckedList = (props) => {
  const [dataTable, setDataTable] = React.useState(props.dataTable || []);
  const {
    selectKeyField,
    headerTable,
    actionFunction,
    actionBarTitle,
    actionBarTextButton,
  } = props

  useEffect(() => {
    setDataTable(props.dataTable)
  }, [dataTable, props]);

  const checkSelectedRow = (keyValue) => {
    setDataTable(dataTable.map(item => {
        if (item[selectKeyField] === keyValue) {
          item.checked = !item.checked;
        }
        return item;
      })
    );
  };
  const checkAllSelectedRows = (checked) => {
    setDataTable(dataTable.map(item => {
        item.checked = !checked;
        return item;
      })
    );
  };

  return (
    <div style={{marginTop: '15px'}}>
      <ActionBarLayout
        dataChecked={dataTable.filter(item => item.checked)}
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
            headerData={headerTable}
            checkAllRow={checkAllSelectedRows}
            amount={dataTable.length}
            amountChecked={dataTable.filter(item => item.checked).length}
          />
          <BodyTableLayout
            data={dataTable}
            selectKeyField={selectKeyField}
            headerKeys={headerTable.map(item => item.id)}
            checkSelectedRow={checkSelectedRow}
          />
        </Table>
      </TableContainer>
      <ActionBarLayout
        dataChecked={dataTable.filter(item => item.checked)}
        action={actionFunction}
        titleBar={actionBarTitle}
        textButton={actionBarTextButton}
      />
    </div>
  );
};

TableCheckedList.protoType = {
  dataTable: PropTypes.array.isRequired,
  headerTable: PropTypes.array.isRequired,
  actionFunction: PropTypes.func.isRequired,
  actionBarTitle: PropTypes.string.isRequired,
  actionBarTextButton: PropTypes.string.isRequired,
  selectKeyField: PropTypes.string,
  classes: PropTypes.object
};
export default TableCheckedList;